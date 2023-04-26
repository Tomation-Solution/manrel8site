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
    cac_registration_number: yup.number().positive().integer().required(),
    name_of_company: yup.string().required(),
    email: yup.string().email().required(),
    corporate_office_addresse: yup.string().required(),
    telephone_number: yup.string().required(),
    website: yup.string().url().required(),
  })
  .required();

const PurchaseApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cac_registration_number: "",
      name_of_company: "",
      email: "",
      corporate_office_addresse: "",
      telephone_number: "",
      website: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (locationState?.from === "/make-payment") {
      setValue(
        "cac_registration_number",
        locationState.cac_registration_number
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

  const onSubmitHandler = (data) => {
    const rewrittenRegno = `RC${data.cac_registration_number}`;
    data.cac_registration_number = rewrittenRegno;

    return navigate("/make-payment", {
      state: { from: location.pathname, ...data },
    });
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
                {errors.name_of_company && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <input
                  type={"text"}
                  {...register("name_of_company", { required: true })}
                />
              </label>
              <label>
                CAC Registration Number
                {errors.cac_registration_number && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <div className="padded-text">
                  <p>RC</p>
                  <input
                    type={"number"}
                    min={0}
                    placeholder="CAC Registration Number"
                    {...register("cac_registration_number", { required: true })}
                  />
                </div>
              </label>
            </div>

            <div className="half-input">
              <label>
                Telephone Number(s) Including Mobile
                {errors.telephone_number && (
                  <ErrorMessage>Invalid Input</ErrorMessage>
                )}
                <input
                  type={"text"}
                  {...register("telephone_number", { required: true })}
                />
              </label>
              <label>
                Email Address
                {errors.email && <ErrorMessage>Invalid Input</ErrorMessage>}
                <input
                  type={"email"}
                  {...register("email", { required: true })}
                />
              </label>
            </div>

            <div className="half-input">
              <label>
                Website Address. No website? use our offical sites url
                {errors.website && <ErrorMessage>Invalid Input</ErrorMessage>}
                <input
                  type={"text"}
                  {...register("website", { required: true })}
                />
              </label>
            </div>

            <label>
              Corporate Office Address
              {errors.corporate_office_addresse && (
                <ErrorMessage>Invalid Input</ErrorMessage>
              )}
              <textarea
                type={"text"}
                {...register("corporate_office_addresse", { required: true })}
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
