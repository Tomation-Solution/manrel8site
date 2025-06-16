import BackDrop from "../BackDrop/BackDrop";
import CloseIcon from "@mui/icons-material/Close";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useForm } from "react-hook-form";
import "../NewEvents/Modals.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormError } from "../NewEvents/FormComponents";

import { formatMoney } from "../../utils/money-formatter";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { payForPublication } from "../../utils/csm-api-calls";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import PaidPublicationsPreview from "../PaidPublications/PaidPublicationPreview/PaidPublicationsPreview";
import Paystack from "@paystack/inline-js";
import PaymentSuccessModal from "./PaymentSuccessModal";

export const PublicationPayModal = ({ data, closefn }) => {
  const [publicationData, setPublicationData] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [expiryTime, setExpiryTime] = useState("");

  useEffect(() => {
    setPublicationData(data);
  }, [data, publicationData]);

  const schema = yup.object({
    fullname: yup.string().required("fullname is required"),
    email: yup.string().email().required("email is required"),
    phone_number: yup
      .string("phone no is required")
      .required("phone no is required"),
    company_name: yup.string().required("company name is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      email: "",
      phone_number: "",
      company_name: "",
      paymentGateWay: "paystack",
    },
  });

  const { mutate, isLoading } = useMutation(payForPublication, {
    onMutate: () => {
      toast.info("processing registration payment");
    },
    onSuccess: (data) => {
      toast.success("registration payment successful");
      if (data) {
        setDownloadLink(data.download_url);
        setExpiryTime(data.expires_at);
        setTimeout(() => {
          setShowSuccessModal(true);
        }, 1000);
      }
    },
    onError: () => {
      toast.error("registration payment failed");
    },
  });

  const onSubmitHandler = (dataInput) => {
    if (getValues("paymentGateWay") === "flutterwave") {
      window.FlutterwaveCheckout({
        public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
        tx_ref: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        amount: Number(publicationData.price),
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email: dataInput.email,
          phone_number: dataInput.phone_number,
          name: dataInput.fullname,
        },
        customizations: {
          title: "MAN Paid Publication",
          description: "Payment for publication",
        },
        callback: (response) => {
          mutate({
            publication: publicationData.id,
            ...dataInput,
            amount: Number(publicationData.price),
            payment_response: response,
          });
        },
        onclose: () => {},
      });
      return;
    }

    if (getValues("paymentGateWay") === "interswitch") {
      window.webpayCheckout({
        merchant_code: process.env.REACT_APP_INTERSWITCH_MERCHANT_CODE,
        pay_item_id: process.env.REACT_APP_INTERSWITCH_PAY_ITEM_ID,
        txn_ref: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        site_redirect_url: window.location.origin,
        amount: Number(publicationData.price) * 100,
        currency: 566,
        onComplete: (response) => {
          mutate({
            publication: publicationData.id,
            ...dataInput,
            amount: Number(publicationData.price),
            payment_response: response,
          });
        },
        mode: process.env.REACT_APP_INTERSWITCH_MODE || "TEST",
      });
      return;
    }

    if (getValues("paymentGateWay") === "paystack") {
      const popup = new Paystack();

      popup.checkout({
        key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
        email: dataInput.email,
        amount: Number(publicationData.price) * 100,
        onSuccess: (transaction) => {
          mutate({
            publication: publicationData.id,
            ...dataInput,
            amount: Number(publicationData.price),
            payment_response: transaction,
          });
        },
      });
      return;
    }
  };

  return (
    <BackDrop>
      <Loader loading={isLoading} />
      <div className="modal-cover">
        <div className="top">
          <h2>Pay for Publication</h2>
          <p>Let's start by entering your information.</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="card">
            <FormError>{errors?.fullname?.message}</FormError>
            <h4>Full name</h4>
            <input type="text" {...register("fullname")} />
          </div>
          <div className="card">
            <FormError>{errors?.phone_number?.message}</FormError>
            <h4>Phone Number</h4>
            <input type={"text"} {...register("phone_number")} />
          </div>
          <div className="card">
            <FormError>{errors?.email?.message}</FormError>
            <h4>Email Address</h4>
            <input type="email" {...register("email")} />
          </div>
          <div className="card">
            <FormError>{errors?.company_name?.message}</FormError>
            <h4>Company Name</h4>
            <input type="text" {...register("company_name")} />
          </div>
          <div className="card">
            <h4>Amount</h4>
            <input
              type="text"
              value={formatMoney(publicationData?.price)}
              disabled
            />
          </div>

          <select
            onChange={(e) => {
              setValue("paymentGateWay", e.target.value);
            }}
          >
            <option value="paystack">select payment gateway</option>
            <option value="paystack">paystack</option>
            <option value="flutterwave">flutterwave</option>
            {/* <option value="remita">Remita</option> */}
            <option value="interswitch">Interswitch</option>
          </select>
          <br />
          <br />
          <div className="card">
            <button>Proceed To Pay</button>
          </div>
        </form>
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
      {showSuccessModal && downloadLink && expiryTime && (
        <PaymentSuccessModal
          downloadUrl={downloadLink}
          expiresAt={expiryTime}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </BackDrop>
  );
};

export const SinglePublication = ({ registerfn, data }) => {
  const [paidPublicationsPreviewModal, setPaidPublicationsPreviewModal] =
    useState(false);

  return (
    <>
      {paidPublicationsPreviewModal && (
        <PaidPublicationsPreview
          data={data}
          openPayModal={() => registerfn(data)}
          closefn={() =>
            setPaidPublicationsPreviewModal(!paidPublicationsPreviewModal)
          }
        />
      )}
      <div className="event-card">
        <img
          src={data.image}
          alt=""
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover",
            minWidth: "100%",
            objectPosition: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.05)",
            },
            ":active": {
              transform: "scale(0.95)",
            },
          }}
        />
        <div style={{ margin: "10px" }}>
          <h2>{data.name}</h2>
          <div className="icons">
            <PaymentsIcon />
            <p>{formatMoney(data.price)}</p>
          </div>
          <div className="buttons">
            <button
              onClick={() =>
                setPaidPublicationsPreviewModal(!paidPublicationsPreviewModal)
              }
            >
              Pay For Publication
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
