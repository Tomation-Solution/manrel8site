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

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.number().positive().integer().required(),
});

const ProspectiveMemberLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation((data) => loginUser(data), {
    onMutate: () => {
      toast.info("Validating Credentials", {
        icon: false,
      });
    },
    onSuccess: (data) => {
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
    const rewrittenPassword = `RC${data.password}`;
    data.password = rewrittenPassword;

    if (data.password.startsWith("RC")) {
      mutate(data);
    } else {
      toast.error(`CAC registration number must start with RC`);
    }
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
            <br />

            <small style={{ color: "red", textAlign: "center" }}>
              {errors?.email?.message}
            </small>
            <input
              type={"email"}
              {...register("email", { required: true })}
              placeholder="Email Address"
            />

            <small style={{ color: "red", textAlign: "center" }}>
              {errors?.password?.message
                ? "Invalid Registration Number, positive numbers only"
                : null}
            </small>
            <div className="padded-form-container">
              <p className="padded-text-left">RC</p>
              <input
                className="padded-input"
                type={"number"}
                min={0}
                {...register("password", { required: true })}
                placeholder="CAC Registration Number"
              />
            </div>

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
