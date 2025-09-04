import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./PurchaseApplication.scss";
import { PurchaseWarnBanner } from "./PurchaseComp/PurchaseComp";
import PaymentImg1 from "../../images/new-images/PaymentImg (1).png";
import PaymentImg2 from "../../images/new-images/PaymentImg (2).png";
import PaymentImg3 from "../../images/new-images/PaymentImg (3).png";
import InterswitchImg from "../../images/new-images/InterswitchImg.jpeg";
import { useMutation, useQuery } from "react-query";
import {
  buyForm,
  getInlinePaymentConfig,
  verifyInlinePayment,
} from "../../utils/api-calls";
import { toast } from "react-toastify";

const MakePayment = () => {
  const location = useLocation();
  const [paymentType, setPaymentType] = useState("paystack");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
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

  // Load payment scripts dynamically
  useEffect(() => {
    // Load Remita script
    const remitaScript = document.createElement("script");
    remitaScript.src =
      "https://login.remita.net/payment/v1/remita-pay-inline.bundle.js";
    remitaScript.async = true;
    document.body.appendChild(remitaScript);

    // Load Interswitch script
    const interswitchScript = document.createElement("script");
    interswitchScript.src =
      "https://newwebpay.qa.interswitchng.com/inline-checkout.js";
    interswitchScript.async = true;
    document.body.appendChild(interswitchScript);

    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(remitaScript)) {
        document.body.removeChild(remitaScript);
      }
      if (document.body.contains(interswitchScript)) {
        document.body.removeChild(interswitchScript);
      }
    };
  }, []);

  const { from, ...locationTo } = locationState || {};

  // Get payment configuration for inline payments
  const { data: paymentConfig } = useQuery(
    ["paymentConfig", paymentType],
    () => getInlinePaymentConfig(paymentType),
    {
      enabled: ["remita", "interswitch"].includes(paymentType),
      retry: false,
    }
  );

  // Traditional payment mutation (for Paystack and Flutterwave)
  const { mutate: processTraditionalPayment, isLoading: isTraditionalLoading } =
    useMutation(buyForm, {
      onMutate: () => {
        toast.info("Validating Details", { icon: false });
      },
      onSuccess: (data) => {
        toast.success("Payment Successful, Redirecting", { icon: false });
        if (data.data?.payment_info?.data?.authorization_url) {
          window.open(
            data.data?.payment_info?.data?.authorization_url,
            "_blank"
          );
        }
      },
      onError: (error) => {
        toast.error("Payment Cancelled", { icon: false });
        if (error?.message?.response?.data?.message?.error) {
          toast.error(`${error?.message?.response?.data?.message?.error}`, {
            icon: false,
          });
        }
      },
    });

  // Inline payment verification mutation
  const { mutate: verifyPayment } = useMutation(verifyInlinePayment, {
    onSuccess: (data) => {
      setIsProcessingPayment(false);
      toast.success("Account created successfully!", { icon: false });

      // Redirect to login or dashboard
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    },
    onError: (error) => {
      setIsProcessingPayment(false);
      toast.error("Payment verification failed", { icon: false });
      if (error?.response?.data?.message?.error) {
        toast.error(`${error.response.data.message.error}`, { icon: false });
      }
    },
  });

  const handleRemitaPayment = (formData) => {
    if (!window.RmPaymentEngine) {
      toast.error("Remita payment engine not loaded", { icon: false });
      return;
    }

    if (!paymentConfig?.data?.config) {
      toast.error("Payment configuration not loaded", { icon: false });
      return;
    }

    const config = paymentConfig.data.config;
    const transactionId = `RMT-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    setIsProcessingPayment(true);
    toast.info("Initializing Remita payment...", { icon: false });

    const handler = window.RmPaymentEngine.init({
      key: config.merchant_id,
      customerId: formData.email,
      transactionId: transactionId,
      firstName: formData.name_of_company.split(" ")[0] || "Customer",
      lastName:
        formData.name_of_company.split(" ").slice(1).join(" ") || "Name",
      email: formData.email,
      amount: config.amount,
      narration: "Prospective Member Registration",
      onSuccess: function (response) {
        console.log("Remita payment successful", response);
        toast.success("Payment successful, verifying...", { icon: false });

        // Verify payment and create account
        const verificationData = {
          payment_reference: transactionId,
          payment_amount: parseFloat(config.amount),
          ...formData,
        };

        verifyPayment({
          paymentType: "remita",
          data: verificationData,
        });
      },
      onError: function (response) {
        console.log("Remita payment error", response);
        setIsProcessingPayment(false);
        toast.error("Payment failed", { icon: false });
      },
      onClose: function () {
        console.log("Remita payment closed");
        setIsProcessingPayment(false);
        toast.warning("Payment cancelled by user", { icon: false });
      },
    });

    handler.openIframe();
  };

  const handleInterswitchPayment = (formData) => {
    if (!window.webpayCheckout) {
      toast.error("Interswitch payment engine not loaded", { icon: false });
      return;
    }

    if (!paymentConfig?.data?.config) {
      toast.error("Payment configuration not loaded", { icon: false });
      return;
    }

    const config = paymentConfig.data.config;
    const txnRef = `ISW-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    setIsProcessingPayment(true);
    toast.info("Initializing Interswitch payment...", { icon: false });

    const paymentRequest = {
      merchant_code: process.env.REACT_APP_INTERSWITCH_MERCHANT_CODE,
      pay_item_id: process.env.REACT_APP_INTERSWITCH_PAY_ITEM_ID,
      txn_ref: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
      site_redirect_url: window.location.origin,
      amount: config.amount,
      currency: 566,
      cust_name: formData.name_of_company,
      cust_email: formData.email,
      mode: process.env.REACT_APP_INTERSWITCH_MODE || "TEST",
      onComplete: function (response) {
        console.log("Interswitch payment response", response);

        if (response.resp === "00") {
          toast.success("Payment successful, verifying...", { icon: false });

          // Verify payment and create account
          const verificationData = {
            payment_reference: txnRef,
            payment_amount: config.amount / 100, // Convert from kobo to naira
            ...formData,
          };

          verifyPayment({
            paymentType: "interswitch",
            data: verificationData,
          });
        } else {
          setIsProcessingPayment(false);
          toast.error("Payment failed or was cancelled", { icon: false });
        }
      },
    };

    window.webpayCheckout(paymentRequest);
  };

  const onSubmitHandler = (data) => {
    console.log({ Cac: locationState.cac_registration_number });
    const rewrittenRegno = `${locationState.cac_registration_number}`;

    const formData = {
      ...data,
      cac_registration_number: rewrittenRegno,
      name_of_company: locationState.name_of_company,
      email: locationState.email,
      corporate_office_addresse: locationState.corporate_office_addresse,
      telephone_number: locationState.telephone_number,
      website: locationState.website,
    };

    // Handle inline payments
    if (paymentType === "remita") {
      handleRemitaPayment(formData);
    } else if (paymentType === "interswitch") {
      handleInterswitchPayment(formData);
    } else {
      // Handle traditional payments (Paystack, Flutterwave)
      processTraditionalPayment({ data: formData, paymentType });
    }
  };

  const isLoading = isTraditionalLoading || isProcessingPayment;

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
                  <button type="button">Go Back to Edit</button>
                </Link>
              </div>
            </div>

            <div className="each-half">
              <h1 className="header center">Select Payment Method</h1>

              <label
                className={`image-label ${
                  paymentType === "remita" ? "selected" : ""
                }`}
              >
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Unavailable</h5>
                  <img src={PaymentImg1} alt="Remita" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="remita"
                  disabled
                  className="image-radio"
                  checked={paymentType === "remita"}
                  onChange={(e) => {
                    setPaymentType("remita");
                  }}
                />
              </label>

              <label
                className={`image-label ${
                  paymentType === "interswitch" ? "selected" : ""
                }`}
              >
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Unavailable</h5>
                  <img src={InterswitchImg} alt="Interswitch" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="interswitch"
                  disabled
                  className="image-radio"
                  checked={paymentType === "interswitch"}
                  onChange={(e) => {
                    setPaymentType("interswitch");
                  }}
                />
              </label>

              <label
                className={`image-label ${
                  paymentType === "flutterwave" ? "selected" : ""
                }`}
              >
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Available</h5>
                  <img src={PaymentImg2} alt="Flutterwave" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="flutterwave"
                  className="image-radio"
                  checked={paymentType === "flutterwave"}
                  onChange={(e) => {
                    setPaymentType("flutterwave");
                  }}
                />
              </label>

              <label
                className={`image-label ${
                  paymentType === "paystack" ? "selected" : ""
                }`}
              >
                <div className="">
                  <h5 style={{ textAlign: "center" }}>Available</h5>
                  <img src={PaymentImg3} alt="Paystack" />
                </div>
                <input
                  name="payType"
                  type={"radio"}
                  value="paystack"
                  className="image-radio"
                  checked={paymentType === "paystack"}
                  onChange={(e) => {
                    setPaymentType("paystack");
                  }}
                />
              </label>

              {isProcessingPayment && (
                <div className="processing-payment">
                  <p>Processing payment, please wait...</p>
                  <div className="loading-spinner"></div>
                </div>
              )}

              <div className="btn-con">
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Proceed to Pay"}
                </button>
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
