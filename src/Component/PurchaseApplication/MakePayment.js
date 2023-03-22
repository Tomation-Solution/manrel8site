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

const MakePayment = () => {
  const location = useLocation();
  const locationState = location.state;
  const { setValue, register } = useForm();

  useEffect(() => {
    setValue("cac_reg_no", locationState.cac_reg_no);
    setValue("company_name", locationState.company_name);
    setValue("email", locationState.email);
    setValue("office_address", locationState.office_address);
    setValue("tele_no", locationState.tele_no);
    setValue("web_address", locationState.web_address);
  }, [locationState, setValue]);

  return (
    <div className="purchase-application">
      <UIProvider>
        <NewNavBar />

        <div className="purchase-container">
          <h1 className="header">Make Payment</h1>
          <PurchaseWarnBanner>
            Kindly confirm that the your information are correct before making
            payment
          </PurchaseWarnBanner>
          <form className="split-page">
            <div className="each-half">
              <label>
                Name of Company
                <input
                  type={"text"}
                  {...register("company_name", { disabled: true })}
                />
              </label>
              <label>
                CAC Registration Number
                <input
                  type={"text"}
                  {...register("cac_reg_no", { disabled: true })}
                />
              </label>

              <label>
                Telephone Number(s) Including Mobile
                <input
                  type={"text"}
                  {...register("tele_no", { disabled: true })}
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
                  {...register("web_address", { disabled: true })}
                />
              </label>

              <label>
                Corporate Office Address
                <textarea
                  type={"text"}
                  {...register("office_address", { disabled: true })}
                />
              </label>

              <div className="btn-con">
                <Link
                  to={"/purchase-application"}
                  state={{ from: location.pathname, ...locationState }}
                >
                  <button>Go Back to Edit</button>
                </Link>
              </div>
            </div>

            <div className="each-half">
              <h1 className="header center">Select Payment Method </h1>

              <label className="image-label">
                <img src={PaymentImg1} alt="" />
                <input
                  name="payType"
                  type={"radio"}
                  value="remita"
                  className="image-radio"
                />
              </label>
              <label className="image-label">
                <img src={PaymentImg2} alt="" />
                <input
                  name="payType"
                  type={"radio"}
                  value="flutterwave"
                  className="image-radio"
                />
              </label>
              <label className="image-label">
                <img src={PaymentImg3} alt="" />
                <input
                  name="payType"
                  type={"radio"}
                  value="paystack"
                  className="image-radio"
                />
              </label>

              <div className="btn-con">
                <button>Proceed to Pay</button>
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
