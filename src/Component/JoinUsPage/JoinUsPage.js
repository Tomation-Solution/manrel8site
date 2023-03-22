import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./JoinUsPage.scss";
import { Link, useNavigate } from "react-router-dom";

const JoinUsPage = () => {
  const [check, setCheck] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (check === "agree") {
      //   navigate("/join-now-form");
      navigate("/purchase-application");
    } else {
      alert("Please check the box");
    }
  };
  return (
    <div className="join-new-page">
      <UIProvider>
        <NewNavBar />
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
            A prospective member of MAN must be a manufacturer and have a
            manufacturing plant in Nigeria.
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
              <button type="submit" onClick={submitHandler}>
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
          <form>
            <input type={"text"} placeholder="Email Address" />
            <input type={"text"} placeholder="CAC Registration Number" />

            <button>LOGIN</button>
          </form>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default JoinUsPage;
