import React from "react";
import { FormError } from "../../NewEvents/FormComponents";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MediaVerificationForm from "./MediaVerificationForm";
import { useMutation } from "react-query";
import { exhibitionParticipantsRegistration } from "../../../utils/csm-api-calls";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";

const GeneralRegistrationForm = ({ eventId, type }) => {
  const schema = yup.object({
    company_name: yup.string().required("company name is a required field"),
    designation: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone_no: yup.string().required("phone number is a required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      company_name: "",
      name: "",
      designation: "fill",
      email: "",
      phone_no: "",
    },
  });

  const { isLoading, mutate } = useMutation(
    exhibitionParticipantsRegistration,
    {
      onMutate: () => {
        toast.info("processing registration");
      },
      onSuccess: () => {
        toast.success("registration successful");
      },
      onError: () => {
        toast.error("registration failed");
      },
    }
  );

  const onSubmitHandler = (data) => {
    mutate({ type: type, event: eventId, ...data });
  };

  const { isValid, MediaVerificationFormComponent } =
    MediaVerificationForm(type);

  if (!isValid && type !== "exhibitor-participant") {
    return <>{MediaVerificationFormComponent}</>;
  }

  return (
    <>
      <Loader loading={isLoading} />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="card">
          <FormError>{errors.company_name?.message}</FormError>
          <h4>Company / Individual Name</h4>
          {/* <small>if you dont have a company, fill with stand-alone</small> */}
          <input
            type="text"
            {...register("company_name", { required: true })}
          />
        </div>

        <div className="card">
          <FormError>{errors.name?.message}</FormError>
          <h4>Fullname</h4>
          <input type="text" {...register("name", { required: true })} />
        </div>

        <div className="card">
          <FormError>{errors.designation?.message}</FormError>
          <h4>Designation</h4>
          {/* <small>if you dont have a company, fill with stand-alone</small> */}
          <input type="text" {...register("designation", { required: true })} />
        </div>

        <div className="card">
          <FormError>{errors.email?.message}</FormError>
          <h4>Email</h4>
          <input type="text" {...register("email", { required: true })} />
        </div>

        <div className="card">
          <FormError>{errors.phone_no?.message}</FormError>
          <h4>Phone Number</h4>
          <input type="text" {...register("phone_no", { required: true })} />
        </div>

        <div className="card">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default GeneralRegistrationForm;
