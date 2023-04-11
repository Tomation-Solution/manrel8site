import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./JoinUsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Subscribe from "../Subscribe/Subscribe";
import { useMutation } from "react-query";
import { loginUser } from "../../utils/api-calls";
import { toast } from "react-toastify";

const JoinUsPage = () => {
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
        localStorage.setItem("token", JSON.stringify(data.token));
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

  const submitHandler = () => {
    if (check === "agree") {
      navigate("/purchase-application");
    } else {
      alert("Please check the box");
    }
  };

  const loginSubmitHandler = (data) => {
    mutate(data);
  };

  return (
    <div className="join-new-page">
      <UIProvider>
        <Subscribe />
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
            To become a member of MAN, please confirm that you meet the{" "}
            <Link to={"/membership-requirement"}>requirements</Link>
          </h4>
          <form>
            <label>
              <input
                type={"radio"}
                value="agree"
                required
                onClick={(e) => setCheck(e.target.value)}
              />
              I hereby Confirm that I am eligible to be a Member of MAN.
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
                Pay for Membership Application Form
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

export default JoinUsPage;
