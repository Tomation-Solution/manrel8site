import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./PurchaseApplication.scss";
import {
  PurchaseWarnBanner,
  //   ProcessingPayment,
} from "./PurchaseComp/PurchaseComp";
import PaymentImg1 from "../../images/new-images/PaymentImg (1).png";
import PaymentImg2 from "../../images/new-images/PaymentImg (2).png";
import PaymentImg3 from "../../images/new-images/PaymentImg (3).png";
import InterswitchImg from "../../images/new-images/InterswitchImg.jpeg";
import { useMutation } from "react-query";
import { buyForm } from "../../utils/api-calls";
import { toast } from "react-toastify";

const MakePayment = () => {
  const location = useLocation();
  const locationState = location.state;
  const { setValue, register, handleSubmit } = useForm({
    defaultValues: {
      cac_registration_number: "",
      name_of_company: "",
      email: "",
      corporate_office_addresse: "",
      telephone_number: "",
      website: "",
    },
  });

  useEffect(() => {
    if (locationState?.from === "/purchase-application") {
      setValue(
        "cac_registration_number",
        locationState.cac_registration_number.replace("RC", "")
      );
      setValue("name_of_company", locationState.name_of_company);
      setValue("email", locationState.email);
      setValue(
        "corporate_office_addresse",
        locationState.corporate_office_addresse
      );
      setValue("telephone_number", locationState.telephone_number);
      setValue("website", locationState.website);
    }
  }, [locationState, setValue]);

  const { from, ...locationTo } = locationState;

  const { mutate, isLoading } = useMutation(buyForm, {
    onMutate: () => {
      toast.info("Validating Details", {
        icon: false,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      window.localStorage.setItem("token", JSON.stringify(data.data.token));
      toast.success("Paymet Successfull Redirecting", {
        icon: false,
      });
      if (data.data?.payment_info?.data?.authorization_url) {
        window.open(data.data?.payment_info?.data?.authorization_url, "_blank");
      }
    },
    onError: (error) => {
      toast.error("Payment Cancelled", {
        icon: false,
      });
      if (error?.message?.response?.data?.message?.error) {
        toast.error(`${error?.message?.response?.data?.message?.error}`, {
          icon: false,
        });
      }
    },
  });

  const onSubmitHandler = (data) => {
    const rewrittenRegno = `RC${data.cac_registration_number}`;
    data.cac_registration_number = rewrittenRegno;
    mutate(data);
  };

  return (
    <div className="purchase-application">
      <UIProvider>
        <NewNavBar />

        <div className="purchase-container">
          <h1 className="header">Make Payment</h1>
          <PurchaseWarnBanner>
            Kindly confirm that your information are correct before making
            payment
          </PurchaseWarnBanner>
          <form className="split-page" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="each-half">
              <label>
                Name of Company
                <input
                  type={"text"}
                  {...register("name_of_company", { disabled: true })}
                />
              </label>
              <label>
                CAC Registration Number
                <div className="padded-text">
                  <p>RC</p>
                  <input
                    type={"text"}
                    {...register("cac_registration_number", { disabled: true })}
                  />
                </div>
              </label>

              <label>
                Telephone Number(s) Including Mobile
                <input
                  type={"text"}
                  {...register("telephone_number", { disabled: true })}
                />
              </label>

              <label>
                Email Address
                <input
                  type={"text"}
                  {...register("email", { disabled: true })}
                />
              </label>

              <label>
                Website Address
                <input
                  type={"text"}
                  {...register("website", { disabled: true })}
                />
              </label>

              <label>
                Corporate Office Address
                <textarea
                  type={"text"}
                  {...register("corporate_office_addresse", { disabled: true })}
                />
              </label>

              <div className="btn-con">
                <Link
                  to={"/purchase-application"}
                  state={{ from: location.pathname, ...locationTo }}
                >
                  <button>Go Back to Edit</button>
                </Link>
              </div>
            </div>

            <div className="each-half">
              <h1 className="header center">Select Payment Method </h1>

              <label className="image-label">
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Not Available</h5>
                  <img src={PaymentImg1} alt="" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="remita"
                  className="image-radio"
                />
              </label>

              <label className="image-label">
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Not Available</h5>
                  <img src={InterswitchImg} alt="" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="interswitch"
                  className="image-radio"
                />
              </label>

              <label className="image-label">
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Not Available</h5>
                  <img src={PaymentImg2} alt="" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="flutterwave"
                  className="image-radio"
                />
              </label>
              <label className="image-label">
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Available</h5>
                  <img src={PaymentImg3} alt="" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="paystack"
                  className="image-radio"
                />
              </label>

              <div className="btn-con">
                <button disabled={isLoading}>Proceed to Pay</button>
              </div>
            </div>
          </form>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MakePayment;
