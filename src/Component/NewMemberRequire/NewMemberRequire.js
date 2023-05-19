import "./NewMemberRequire.scss";

import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import { Link, useNavigate } from "react-router-dom";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/MemberRequirement.png";

const NewMemberRequire = () => {
  const [check, setCheck] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (check === "agree") {
      navigate("/purchase-application");
    } else {
      alert("Confirm you have read the requirements and check the checkbox");
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
            "The membership requirement steps below details the process of becoming a member of MAN",
          ]}
        />
        <section className="membreq-steps" style={{ marginTop: "50px" }}>
          <h1>
            Step 1 : Confirm Eligibility - A Prospective Member of MAN Should
          </h1>

          <div className="steps-items">
            <div className="step-item" style={{ backgroundColor: "#596d27" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">
                HAVE A MANUFACTURING PLANT IN NIGERIA
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#506223" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">
                BE A MANUFACTURER OF AT LEAST ONE PRODUCT
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#47571f" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">
                THE MANUFACTURING PLANT SHOULD BE IN PRODUCTION.
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#3e4c1b" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                THE PRODUCT(S) SHOULD BE DULY REGISTERED WITH APPROPRIATE
                REGULATORY BODIES
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#354117" }}>
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
          <h1>Step 2 : Purchase a Membership Application Form</h1>
          <div className="steps-items2">
            <p>
              An intending member of the Association (being a manufacturer) will
              be required to obtain and complete a Membership Application Form.
            </p>
            {/* <span>
              <Link to={"/join-now-page"}>Click Here to make payment</Link>
            </span> */}
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
            <div className="step-item" style={{ backgroundColor: "#596d27" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">
                COMPANY’S CERTIFICATE OF INCORPORATION
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#506223" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">
                CORPORATE AFFAIRS COMMISSION (CAC) FORMS C02 AND C07
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#47571f" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">
                COPIES OF DULY CERTIFIED AUDITED FINANCIAL STATEMENT FOR
                PROCEEDING TWO (2) YEARS OR BUSINESS PLAN FOR NEW COMPANIES
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#3e4c1b" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                LETTER OF INTRODUCTION ON THE COMPANY'S LETTER-HEAD, APPLYING
                FOR MEMBERSHIP OF THE ASSOCIATION
              </p>
            </div>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>
            Step 4 : Make Payment for Annual Subscription, Levies and Submit
          </h1>

          <div className="steps-items">
            <div className="step-item" style={{ backgroundColor: "#596d27" }}>
              <div className="circled-num">
                <p>1</p>
              </div>
              <p className="step-item-text">REGISTRATION FEE [N10,000.00]</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#506223" }}>
              <div className="circled-num">
                <p>2</p>
              </div>
              <p className="step-item-text">ANNUAL SUBSCRIPTION</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#47571f" }}>
              <div className="circled-num">
                <p>3</p>
              </div>
              <p className="step-item-text">SPECIAL DEVELOPMENT LEVY</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#3e4c1b" }}>
              <div className="circled-num">
                <p>4</p>
              </div>
              <p className="step-item-text">
                LAND USE CHARGE LEVY FOR MEMBERS IN LAGOS ONLY [N20,000.00]
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#354117" }}>
              <div className="circled-num">
                <p>5</p>
              </div>
              <p className="step-item-text">
                BUY MADE-IN-NIGERIA PRODUCTS ADVERT LEVY [N10,000.00]
              </p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#2c3613" }}>
              <div className="circled-num">
                <p>6</p>
              </div>
              <p className="step-item-text">LEGAL LEVY [N10,000.00]</p>
            </div>
            <div className="step-item" style={{ backgroundColor: "#232b0f" }}>
              <div className="circled-num">
                <p>7</p>
              </div>
              <p className="step-item-text">AGM LEVY [N10,000.00]</p>
            </div>
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>Step 5 : Acknowledgement and Inspection of Factory</h1>
          <div className="steps-items2">
            <h1>Await Schedule of Factory Inspection visit from MAN</h1>
            {/* <h3 style={{ color: "#2b3513" }}>
              • Payments and documents submitted shall be acknowledged.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • The Branch shall schedule factory inspection visit.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • Report of the factory inspection visit shall be forwarded to the
              National Secretariat for processing.
            </h3> */}
            <div className="gray-circle"></div>
          </div>
        </section>
        <section className="membreq-steps">
          <h1>Step 6 : Approval and Admission to Membership</h1>
          <div className="steps-items2">
            <h1>Await Confirmation of Approval From MAN</h1>
            {/* <h3 style={{ color: "#2b3513" }}>
              • Qualified applicant(s) shall be presented to the National
              Council for consideration and approval.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • Approval or rejection of Membership Application.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • Issuance of admission or rejection letter.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • Issuance of Membership Certificate to admitted members.
            </h3>
            <h3 style={{ color: "#2b3513" }}>
              • Induction of newly admitted members.
            </h3> */}
            <div className="gray-circle"></div>
          </div>
        </section>

        <div className="join-us">
          <h1>Join Us!</h1>
          <p>
            You have made a great choice for your company by deciding to join
            the league of Manufacturers with credibility in Nigeria
          </p>
        </div>
        <div className="eligibilty">
          <h1>Confirm Eligibility</h1>
          <h4>
            To become a member of MAN, please confirm that you meet the{" "}
            <Link to={"/membership-requirement"}> requirements</Link>
          </h4>
          <form>
            <label>
              <input
                type={"radio"}
                value={"agree"}
                required
                onChange={(e) => setCheck(e.target.value)}
              />
              Confirm you have read the requirements and check the checkbox.
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px",
              }}
            >
              <button onClick={(e) => submitHandler(e)}>
                Pay for Membership Application Form
              </button>
            </div>
          </form>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewMemberRequire;
