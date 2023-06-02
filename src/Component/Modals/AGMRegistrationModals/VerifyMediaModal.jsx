import React from "react";
import "../../NewEvents/Modals.scss";
import MediaVerificationForm from "./MediaVerificationForm";
import { useForm } from "react-hook-form";
import { FormError } from "../../NewEvents/FormComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const VerifyMediaModal = ({ type }) => {
  const schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    phone_number: yup.string().required("phone number is a required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      email: "",
      phone_number: "",
    },
  });

  const onSubmitHandler = (data) => {
    console.log({ type, ...data });
  };

  const { isValid, MediaVerificationFormComponent } =
    MediaVerificationForm(type);

  if (!isValid) {
    return <>{MediaVerificationFormComponent}</>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="card">
          <FormError>{errors.fullname?.message}</FormError>
          <h4>Fullname</h4>
          <input type="text" {...register("fullname", { required: true })} />
        </div>

        <div className="card">
          <FormError>{errors.email?.message}</FormError>
          <h4>Email</h4>
          <input type="text" {...register("email", { required: true })} />
        </div>

        <div className="card">
          <FormError>{errors.phone_number?.message}</FormError>
          <h4>Phone Number</h4>
          <input
            type="text"
            {...register("phone_number", { required: true })}
          />
        </div>

        <div className="card">
          <button>Proceed To Pay</button>
        </div>
      </form>
    </>
  );
};

export default VerifyMediaModal;
