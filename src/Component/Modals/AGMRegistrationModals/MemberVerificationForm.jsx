import React from "react";
import { useState } from "react";
import { FormError } from "../../NewEvents/FormComponents";
import { useForm } from "react-hook-form";

const MemberVerificationForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [submitData, setSubmitData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      membID: "",
    },
  });

  const onSubmitHandler = (data) => {
    setIsValid(true);
    setSubmitData(data);
  };

  const MemberVerificationFormComponent = (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="card">
        {errors?.membID && <FormError>Member Is is required</FormError>}
        <h4>Member ID</h4>
        <input type="text" {...register("membID", { required: true })} />
      </div>

      <div className="card">
        <button>Verify</button>
      </div>
    </form>
  );

  return { isValid, submitData, MemberVerificationFormComponent };
};

export default MemberVerificationForm;
