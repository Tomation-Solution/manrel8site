import React from "react";
import { useState } from "react";
import { FormError } from "../../NewEvents/FormComponents";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { verifyMemberByMembersgipNo } from "../../../utils/api-calls";

const MemberVerificationForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [submitData, setSubmitData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      MEMBERSHIP_NO: "",
    },
  });

  const { isLoading, mutate } = useMutation(verifyMemberByMembersgipNo, {
    onSuccess: (data) => {
      setSubmitData(data?.data[0]?.isValid);
      setIsValid(true);
      toast.success("valid member");
    },
    onError: () => {
      toast.error("invalid membership number");
    },
  });

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  const MemberVerificationFormComponent = (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="card">
        {errors?.MEMBERSHIP_NO && <FormError>Member Is is required</FormError>}
        <h4>MEMBERSHIP NUMBER</h4>
        <input type="text" {...register("MEMBERSHIP_NO", { required: true })} />
      </div>

      <div className="card">
        <button disabled={isLoading}>Verify</button>
      </div>
    </form>
  );

  return { isValid, submitData, MemberVerificationFormComponent };
};

export default MemberVerificationForm;
