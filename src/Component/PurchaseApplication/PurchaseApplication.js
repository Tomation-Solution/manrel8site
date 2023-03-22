import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./PurchaseApplication.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ErrorMessage,
  PurchaseBanner,
  PurchaseWarnBanner,
} from "./PurchaseComp/PurchaseComp";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup
  .object({
    cac_reg_no: yup.string().required(),
    company_name: yup.string().required(),
    email: yup.string().email().required(),
    office_address: yup.string().required(),
    tele_no: yup.number().positive().integer().required(),
    web_address: yup.string(),
  })
  .required();

const PurchaseApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  console.log(location);

  //   const locationState = location.state;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (locationState?.from === "/make-payment") {
      setValue("cac_reg_no", locationState.cac_reg_no);
      setValue("company_name", locationState.company_name);
      setValue("email", locationState.email);
      setValue("office_address", locationState.office_address);
      setValue("tele_no", locationState.tele_no);
      setValue("web_address", locationState.web_address);
    }
  }, [locationState, setValue]);

  const onSubmitHandler = (data) => {
    return navigate("/make-payment", { state: data });
  };

  return (
    <div className="purchase-application">
      <UIProvider>
        <NewNavBar />
        <PurchaseBanner />
        <div className="purchase-container">
          <h1 className="header">Company Information</h1>
          <PurchaseWarnBanner>
            Kindly fill this form accurately to purchase the application form.
            All fields are required.
          </PurchaseWarnBanner>

          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="half-input">
              <label>
                Name of Company
                {errors.company_name && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <input
                  type={"text"}
                  {...register("company_name", { required: true })}
                />
              </label>
              <label>
                CAC Registration Number
                {errors.cac_reg_no && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <input
                  type={"text"}
                  {...register("cac_reg_no", { required: true })}
                />
              </label>
            </div>

            <div className="half-input">
              <label>
                Telephone Number(s) Including Mobile
                {errors.tele_no && <ErrorMessage>Invalid Input</ErrorMessage>}
                <input
                  type={"text"}
                  {...register("tele_no", { required: true })}
                />
              </label>
              <label>
                Email Address
                {errors.email && <ErrorMessage>Invalid Input</ErrorMessage>}
                <input
                  type={"text"}
                  {...register("email", { required: true })}
                />
              </label>
            </div>

            <div className="half-input">
              <label>
                Website Address
                {errors.web_address && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <input
                  type={"text"}
                  {...register("web_address", { required: true })}
                />
              </label>
            </div>

            <label>
              Corporate Office Address
              {errors.office_address && (
                <ErrorMessage>Invalid Input</ErrorMessage>
              )}
              <textarea
                type={"text"}
                {...register("office_address", { required: true })}
              />
            </label>

            <div className="btn-con">
              <button>Proceed to Pay</button>
            </div>
          </form>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default PurchaseApplication;
