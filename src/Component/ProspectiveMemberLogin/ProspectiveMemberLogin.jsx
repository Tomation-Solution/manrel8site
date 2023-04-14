import React from "react";
import "./ProspectiveMemberLogin.scss";

import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { loginUser } from "../../utils/api-calls";
import { useForm } from "react-hook-form";

const ProspectiveMemberLogin = () => {
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

  return (
    <UIProvider>
      <Subscribe />
      <NewNavBar />
      <div className="prospective-member">
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
      </div>
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default ProspectiveMemberLogin;
