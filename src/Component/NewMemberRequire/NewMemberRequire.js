import "./NewMemberRequire.scss";

import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { loginUser } from "../../utils/api-calls";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/MemberRequirement.png";

const NewMemberRequire = () => {
  const [check, setCheck] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation((data) => loginUser(data), {
    onMutate: () => {
      toast.info("Validating Credentials", {
        icon: false,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.has_paid) {
        toast.success("Successfully Logged In", {
          icon: false,
        });
        localStorage.setItem("userdata", JSON.stringify(data));
        navigate("/app-portal");
        window.location.reload(true);
      }
    },
    onError: (error) => {
      toast.error(`${error.message}`, {
        icon: false,
      });
    },
  });

  const loginSubmitHandler = (data) => {
    mutate(data);
  };

  const submitHandler = () => {
    if (check === "agree") {
      //   navigate("/join-now-form");
      navigate("/purchase-application");
    } else {
      alert("Please check the box");
    }
  };

  return (
    <div className="member-require">
      <UIProvider>
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Membership Requirements"}
          details={[
            "The membership requirement steps below detail the process to becoming a member of MAN",
          ]}
        />
        {/* <h1 className="membreq-header">Membership Requirments</h1>
        <h1 className="membreq-subheader">
          The membership requirement steps below detail the process to becoming
          a member of MAN
        </h1> */}
        <section className="membreq-steps" style={{ marginTop: "50px" }}>
          <h1>
            Step 1 : Confirm Eligibility - A Prospective Member of MAN Must
          </h1>

          <div className="steps-items">
            <div className="step-item" style={{ backgroundColor: "#6B8E23" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">
                MUST HAVE A MANUFACTURING PLANT IN NIGERIA
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#2E8B57" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">
                MUST BE A MANUFACTURER OF AT LEAST ONE PRODUCT
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#006400" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">
                THE MANUFACTURING PLANT MUST BE IN PRODUCTION.
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#228B22" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                THE PRODUCT(S) MUST BE DULY REGISTERED WITH APPROPRAITE
                REGULATORY BODY (SON, NAFDAC, ETC)
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#556B2F" }}>
              <div className="circled-num">
                <p>5</p>
              </div>
              <p className="step-item-text">
                MINIMUM SALES TURNOVER OF 100 MILLION NAIRA
              </p>
            </div>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>Step 2 : Make Payment for Application Form</h1>
          <div className="steps-items2">
            <p>
              An intending member of the Association, (being a manufacturer)
              will be required to obtain and complete a membership Application
              Form.
            </p>
            <span>
              <a href="/">Click Here to make payment</a>
            </span>
            <h1>APPLICATION FORM [N20,000.00]</h1>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>
            Step 3 : Fill application form, upload necessary documents and save
            - Documents required for upload include:
          </h1>

          <div className="steps-items">
            <div className="step-item" style={{ backgroundColor: "#2C3513" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">
                COMPANY’S CERTIFICATE OF INCORPORATION
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#556B2F" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">
                CORPORATE AFFAIRS COMMISSION (CAC) FORMS C02 AND C07
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#4ECB71" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">
                COPIES OF DULY CERTIFIED AUDITED FINANCIAL STATEMENT FOR
                PROCEEDING TWO (2) YEARS OR BUSINESS PLAN FOR NEW COMPANIES
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#3CB371" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                A COVERING LETTER ON THE LETTER HEAD OF YOUR COMPANY APPLYING TO
                BE REGISTERED AS A MEMBER OF MAN
              </p>
            </div>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>
            Step 4 :Make Payment for Annual Subscription, Levies and Submit
          </h1>

          <div className="steps-items">
            <div className="step-item" style={{ backgroundColor: "#2C3513" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">REGISTRATION FEE [N10,000.00]</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#2E8B57" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">ANNUAL SUBSCRIPTION</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#4ECB71" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">SPECIAL DEVELOPMENT LEVY</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#006400" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                LAND USE CHARGE LEVY FOR MEMBERS IN LAGOS ONLY [N20,000.00]
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#038E4B" }}>
              <div className="circled-num">
                <p>5</p>
              </div>
              <p className="step-item-text">
                BUY MADE-IN-NIGERIA PRODUCTS ADVERT LEVY [N10,000.00]
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#228B22" }}>
              <div className="circled-num">
                <p>6</p>
              </div>
              <p className="step-item-text">LEGAL LEVY [N10,000.00]</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "	#556B2F" }}>
              <div className="circled-num">
                <p>7</p>
              </div>
              <p className="step-item-text">AGM LEVY [N10,000.00]</p>
            </div>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>Step 5 : Await Schedule of Inspection Visit From MAN</h1>
          <div className="steps-items2">
            <h1>Await Schedule of Factory Inspection visit from MAN</h1>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>Step 6 : Await Confirmation of Approval from MAN</h1>
          <div className="steps-items2">
            <h1>Await Confirmation of Approval From MAN</h1>
            <div className="gray-circle"></div>
          </div>
        </section>

        <div className="join-us">
          <h1>Join Us!</h1>
          <p>
            You have made a great choice for your company by deciding to join
            the league of Manufacturers with credibility in Nigeria!
          </p>
        </div>
        <div className="eligibilty">
          <h1>Confirm Eligibility</h1>
          <h4>
            To become a member of MAN, please confirm that you meet the{" "}
            <Link to={"/membership-requirement"}>the requirements</Link>
          </h4>
          <form>
            <label>
              <input
                type={"checkbox"}
                value="agree"
                required
                onClick={(e) => setCheck(e.target.value)}
              />
              I hereby Confirm that i am Eligible to be a Member of MAN.
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px",
              }}
            >
              <button onClick={submitHandler}>
                pay for the application form
              </button>
            </div>
          </form>
        </div>
        <div className="prospective">
          <h1>Prospective Member</h1>
          <p>
            If you have already purchased the application form, or you want to
            know the status of a previous purchase, kindly login with your
            company information.
          </p>
          <form onSubmit={handleSubmit(loginSubmitHandler)}>
            <input
              type={"email"}
              {...register("email", { required: true })}
              required
              placeholder="Email Address"
            />
            <input
              type={"text"}
              {...register("password", { required: true })}
              required
              placeholder="CAC Registration Number"
            />

            <button disabled={isLoading}>LOGIN</button>
          </form>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewMemberRequire;
