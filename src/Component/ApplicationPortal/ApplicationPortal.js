import React, { useEffect, useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./ApplicationPortal.scss";
import Logo from "../../images/manlogo2.png";
import PlusIcon from "../../images/new-images/PlusIcon.png";
import NextPage from "./NextPage";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import { useFieldArray, useForm } from "react-hook-form";

const ApplicationPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [next, setNext] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product_manufacturer: [{ name: "product name", value: "value info" }],
      materails: [{ name: "materials_name", value: "materails_value" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "product_manufacturer",
    rules: {
      required: "Please add atleast one manufactured product",
    },
  });

  const {
    fields: materailField,
    append: materailAppend,
    remove: materialRemove,
  } = useFieldArray({
    control,
    name: "materails",
    rules: {
      required: "Please add atleast one material used",
    },
  });

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  const setNextHandler = () => {
    setNext(!next);
  };
  return (
    <div className="applicationPortal">
      <UIProvider>
        <Subscribe />
        <div className="logo">
          <Link to="/">
            <img alt="" src={Logo} />
          </Link>
        </div>
        <h1 className="header">Application Portal</h1>
        <div className="application-container">
          <div className="side-navigation">
            <Link to={"/app-portal"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn green">Application</div>
            </Link>
            <Link to={"/application-status"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn">Application Status</div>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn">Log Out</div>
            </Link>
          </div>
          {!next ? (
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="status-track">
                <div className="status-item">1</div>
                <div className="status-separator"></div>
                <div className="status-item dotted">2</div>
              </div>
              <div className="half-input">
                <label>
                  Name of Company
                  <input type={"text"} />
                </label>
                <label>
                  CAC Registration Number
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Tax Identification Number (TIN)
                  <input type={"text"} />
                </label>
                <label>
                  Corporate office Address
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Office Bus stop
                  <input type={"text"} />
                </label>
                <label>
                  Office City
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Office LGA
                  <input type={"text"} />
                </label>
                <label>
                  Office State
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Postal Address (If Any)
                  <input type={"text"} />
                </label>
                <label>
                  Telephone Number(s) Inc. Mobile
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Email Address
                  <input type={"text"} />
                </label>
                <label>
                  Website Address
                  <input type={"text"} />
                </label>
              </div>
              <div className="half-input">
                <label>
                  Email AddressFactory Details(Phone No., Email){" "}
                  <input type={"text"} />
                </label>
                <label>
                  Legal Status of Company
                  <select>
                    <option>Sole Proprietorship</option>
                    <option>Partnership</option>
                    <option>Private Company</option>
                    <option>Public Limited Company</option>
                  </select>
                </label>
              </div>
              {fields.map((fields, index) => (
                <section key={fields.id}>
                  <div className="half-input">
                    <label>
                      Products Manufactured
                      <input
                        type={"text"}
                        {...register(`product_manufacturer.${index}.name`, {
                          required: true,
                        })}
                      />
                    </label>
                    <label>
                      SON/ ISON/NAFDAC Certificates (If Any)
                      <input
                        type={"text"}
                        {...register(`product_manufacturer.${index}.value`, {
                          required: true,
                        })}
                      />
                    </label>
                  </div>
                  <div className="delete-btn">
                    <button onClick={() => remove(index)}>Delete</button>
                  </div>
                </section>
              ))}
              <h5 style={{ textAlign: "center" }}>
                {errors?.product_manufacturer?.root?.message}
              </h5>
              <div className="add-more">
                <img
                  src={PlusIcon}
                  alt=""
                  onClick={() =>
                    append({
                      name: "New Product",
                      value: "New Product Value",
                    })
                  }
                />
                <p>Add Product Manufactured</p>
              </div>

              {materailField.map((fields, index) => (
                <section key={fields.id}>
                  <div className="half-input">
                    <label>
                      Major Raw Materials Used(Indicate if Impoted/HS Code)
                      <input
                        type={"text"}
                        {...register(`materails.${index}.name`, {
                          required: true,
                        })}
                      />
                    </label>
                    <label>
                      % of Local Raw Materials
                      <input
                        type={"text"}
                        {...register(`materails.${index}.value`, {
                          required: true,
                        })}
                      />
                    </label>
                  </div>
                  <div className="delete-btn">
                    <button onClick={() => materialRemove(index)}>
                      Delete
                    </button>
                  </div>
                </section>
              ))}
              <h5 style={{ textAlign: "center" }}>
                {errors?.materails?.root?.message}
              </h5>
              <div className="add-more">
                <img
                  src={PlusIcon}
                  alt=""
                  onClick={() =>
                    materailAppend({
                      name: "New Material Name",
                      value: "New Material Value",
                    })
                  }
                />
                <p>Add Raw Materials Used</p>
              </div>

              <div className="half-input">
                <label>
                  Number of Male Permanent Staff
                  <input type={"text"} />
                </label>
                <label>
                  Number of Female Permanent Staff
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Number of Male Expatriates
                  <input type={"text"} />
                </label>
                <label>
                  Number of Female Expatriates
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Email Address
                  <input type={"text"} />
                </label>
                <label>
                  Website Address
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Local Share Capital
                  <input type={"text"} />
                </label>
                <label>
                  Foreign Share Capital
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Ownership Structure Equity(local)
                  <input type={"text"} />
                </label>
                <label>
                  Ownership Structure Equity(Foreign)
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Total Value of Land Asset
                  <input type={"text"} />
                </label>
                <label>
                  Total Value of Land Asset
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Total Value of Other Asset
                  <input type={"text"} />
                </label>
                <label>
                  Installed capacity(In tons, Kg, etc)
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Current Sales Turnover
                  <input type={"text"} />
                </label>
                <label>
                  Projected Sales Turnover
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Are your products exported?
                  <select>
                    <option>yes</option>
                    <option>no</option>
                  </select>
                </label>
                <label>
                  Company’s contact information
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Designation
                  <input type={"text"} />
                </label>
                <label>
                  Name of MD/CEO of Comoany
                  <input type={"text"} />
                </label>
              </div>

              <div className="half-input">
                <label>
                  Select Date of Registration
                  <input type={"text"} />
                </label>
                <label>
                  Upload Signature
                  <input type={"text"} />
                </label>
              </div>
              <h5 style={{ textAlign: "center" }}>
                {errors?.materails?.root?.message}
              </h5>
              <div className="btn-con align-center">
                <button>Save & Continue Later</button>
                <button onClick={setNextHandler}>Next</button>
              </div>
            </form>
          ) : (
            <NextPage backfn={setNextHandler} />
          )}
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default ApplicationPortal;
