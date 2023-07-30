import React from "react";
import "../../NewEvents/Modals.scss";
import { FormError } from "../../NewEvents/FormComponents";
import { useFieldArray, useForm } from "react-hook-form";
import PlusIcon from "../../../images/new-images/PlusIcon.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MemberVerificationForm from "./MemberVerificationForm";
import { formatMoney } from "../../../utils/money-formatter";
import { useMutation } from "react-query";
import { memberRegistration } from "../../../utils/csm-api-calls";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";
import numbro from "numbro";

const VerifyMemberModal = ({ eventId, type, luncheonPrice }) => {
  const schema = yup.object({
    company_name: yup.string().required(),
    company_address: yup.string().required(),
    email: yup.string().email().required(),
    participant: yup
      .array(
        yup.object({
          name: yup.string().required(),
          email: yup.string().email().required(),
          phone_no: yup.string().required(),
        })
      )
      .min(1, "Please add atleast one participant"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      company_name: "",
      company_address: "",
      email: "",
      participant: [
        {
          name: "",
          email: "",
          phone_no: "",
        },
      ],
    },
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: "participant",
    rules: {
      required: "Please provide atleast one participant",
    },
  });

  const { mutate, isLoading } = useMutation(memberRegistration, {
    onMutate: () => {
      toast.info("processing registration");
    },
    onSuccess: (data) => {
      toast.success("registration successful");
      if (data?.data?.data?.authorization_url) {
        const redirectUrl = data?.data?.data?.authorization_url;
        window.open(redirectUrl, "_blank");
      }
    },
    onError: () => {
      toast.error("registration failed");
    },
  });

  const onSubmitHandler = (data) => {
    mutate({ event: eventId, ...data });
  };

  const { submitData, isValid, MemberVerificationFormComponent } =
    MemberVerificationForm();

  const participantsLength = watch("participant").length;

  if (!isValid) {
    return <>{MemberVerificationFormComponent}</>;
  }

  return (
    <>
      <Loader loading={isLoading} />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {submitData && (
          <small>
            <b style={{ marginRight: "5px" }}>NOTE:</b>
            {/* you're a subscribed member, therefore the payment of{" "}
            {numbro(luncheonPrice).format({ thousandSeparated: true })} for the
            luncheon of a single participant is automatically covered. */}
            Payment of AGM luncheon (N
            {numbro(luncheonPrice).format({ thousandSeparated: true })}) covers
            one participant. Additional participant (s) attract extra N
            {numbro(luncheonPrice).format({ thousandSeparated: true })} each.
          </small>
        )}
        <br />
        <br />
        <div className="card">
          <h4>Luncheon Price</h4>
          <input
            type="text"
            value={formatMoney(participantsLength * luncheonPrice)}
            disabled
          />
        </div>
        <div className="card">
          <FormError>{errors.company_name?.message}</FormError>
          <h4>Company Name</h4>
          <input
            type="text"
            {...register("company_name", { required: true })}
          />
        </div>
        <div className="card">
          <FormError>{errors.company_address?.message}</FormError>
          <h4>Company Address</h4>
          <input
            type="text"
            {...register("company_address", { required: true })}
          />
        </div>
        <div className="card">
          <FormError>{errors.email?.message}</FormError>
          <h4>Company Email</h4>
          <small>payment receipt will be sent here</small>
          <input type="text" {...register("email", { required: true })} />
        </div>

        {fields.map((item, index) => (
          <section key={item.id} className="participant-section">
            <div className="card">
              <h4>Participant Name</h4>
              <FormError>
                {errors.participant?.[index]?.name?.message
                  ? "invalid input"
                  : null}
              </FormError>

              <input
                type="text"
                {...register(`participant.${index}.name`)}
                placeholder="participant name"
              />
            </div>

            <div className="card">
              <FormError>
                {errors.participant?.[index]?.email?.message
                  ? "invalid input"
                  : null}
              </FormError>
              <h4>Participant Email Address</h4>
              <input
                type="text"
                {...register(`participant.${index}.email`)}
                placeholder="participant email"
              />
            </div>
            <div className="card">
              <FormError>
                {errors.participant?.[index]?.phone_no?.message
                  ? "invalid input"
                  : null}
              </FormError>
              <h4>Participant Phone Number</h4>
              <input
                type="text"
                {...register(`participant.${index}.phone_no`)}
                placeholder="participant phone number"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="remove-btn" onClick={() => remove(index)}>
                Remove This Participant
              </button>
            </div>
          </section>
        ))}
        <FormError>{errors?.participant?.message}</FormError>

        <div className="diff-btn">
          <div
            onClick={() =>
              append({
                name: "",
                email: "",
                phone_no: "",
              })
            }
          >
            <img src={PlusIcon} alt="" />
            <p>Add New Participant</p>
          </div>
        </div>

        <div className="card">
          <button>Proceed To Pay</button>
        </div>
      </form>
    </>
  );
};

export default VerifyMemberModal;
