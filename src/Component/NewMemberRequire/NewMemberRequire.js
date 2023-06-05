import "./NewMemberRequire.scss";

import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import { Link, useNavigate } from "react-router-dom";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
// import backImage from "../../images/new-images/MemberRequirement.png";
import backImage from "../../images/Rectangle.png";
import { useQuery } from "react-query";
import { joinStepsApi } from "../../utils/api-calls2";

const NewMemberRequire = () => {
  const [check, setCheck] = useState("");
  const navigate = useNavigate();
  const { data } = useQuery("joinStepsApi", joinStepsApi);
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
        {data
          ?.sort((a, b) => a.id - b.id)
          .map((d, index) => (
            <SectionRequire
              step_name={d.step_name}
              step_list={d.step_list}
              step_description={d.step_description}
              step_extras={d.step_extras}
              key={index}
            />
          ))}

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

const SectionRequire = ({
  step_name,
  step_list,
  step_description,
  step_extras,
}) => {
  return (
    <section className="membreq-steps">
      <h1>{step_name}</h1>
      <div className="steps-items2">
        <p>{step_description}</p>
        {step_extras?.map((d, index) => (
          <h1 key={index}>{d}</h1>
        ))}
        <div className="gray-circle"></div>

        <div
          className="steps-items"
          style={{ border: "transparent", padding: "unset" }}
        >
          {step_list?.map((d, index) => (
            <div className="step-item" style={{ backgroundColor: "#596d27" }}>
              <div className="circled-num">
                <p>{index + 1}</p>
              </div>
              <p className="step-item-text">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
