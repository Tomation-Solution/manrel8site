import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../../NewEvents/FormComponents";
import { useMutation } from "react-query";
import { InvitationVerification } from "../../../utils/csm-api-calls";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";

const MediaVerificationForm = (type) => {
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ref: "",
    },
  });

  const { isLoading, mutate } = useMutation(InvitationVerification, {
    onMutate: () => {
      toast.info("processing invitation code");
    },
    onSuccess: () => {
      toast.success("invitation code is valid");
      setIsValid(true);
    },
    onError: () => {
      toast.error("invalid invitation code");
    },
  });

  const onSubmitHandler = (data) => {
    mutate({ ...data, type });
  };

  const MediaVerificationFormComponent = (
    <>
      <Loader loading={isLoading} />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="card">
          {errors?.ref && <FormError>Invitation Code is required</FormError>}
          <h4>Invitation Code</h4>
          <input type="text" {...register("ref", { required: true })} />
        </div>

        <div className="card">
          <button>Verify</button>
        </div>
      </form>
    </>
  );

  return { isValid, MediaVerificationFormComponent };
};

export default MediaVerificationForm;
