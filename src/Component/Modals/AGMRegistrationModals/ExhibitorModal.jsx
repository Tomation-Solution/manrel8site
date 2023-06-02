import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { FormError } from "../../NewEvents/FormComponents";
import PlusIcon from "../../../images/new-images/PlusIcon.png";
import { formatMoney } from "../../../utils/money-formatter";
import "../../NewEvents/Modals.scss";
import { useMutation } from "react-query";
import { exhibitorRegistration } from "../../../utils/csm-api-calls";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";

const ExhibitorModal = ({ type, luncheonPrice, exhibitionBoots, eventId }) => {
  const schema = yup.object({
    luncheon_covered_participants: yup
      .number("must be a valid number")
      .typeError("must be a number")
      .positive("must be a valid number")
      .min(0, "minimum number of luncheon coverage is 0")
      .max(50, "maximum number of luncheon coverage is 50")
      .required("must be a valid number"),
    company_name: yup.string().required(),
    company_address: yup.string().required(),
    email: yup.string().email().required(),
    boot: yup
      .array()
      .of(yup.string())
      .typeError("must select a boot")
      .min(1, "please select a boot to rent")
      .required(),
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
      luncheon_covered_participants: "",
      company_name: "",
      company_address: "",
      email: "",
      boot: "",
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

  const { mutate, isLoading } = useMutation(exhibitorRegistration, {
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

  let numberOfLuncheonParticipants = watch("luncheon_covered_participants");

  if (isNaN(numberOfLuncheonParticipants)) {
    numberOfLuncheonParticipants = 0;
  }

  const totalLuncheon = numberOfLuncheonParticipants * luncheonPrice;

  const bootWatch = watch("boot", []);
  let bootprice = 0;
  if (bootWatch) {
    bootWatch.forEach((item) => {
      const bootinfo = item.split(",");
      bootprice = bootprice + parseFloat(bootinfo[1]);
    });
  }

  const sumTotal = bootprice + totalLuncheon;

  const onSubmitHandler = (data) => {
    let { boot, ...payload } = data;
    boot = boot.map((item) => {
      const bootdata = item.split(",");
      return bootdata[0];
    });
    mutate({ event: eventId, boot, ...payload });
  };

  if (exhibitionBoots.length <= 0) {
    return (
      <FormError>Exhibition closed, no free exhibition boots left</FormError>
    );
  }

  return (
    <>
      <Loader loading={isLoading} />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="card">
          <h4>Luncheon Price</h4>
          <input type="text" value={formatMoney(totalLuncheon)} disabled />
        </div>

        <div className="card">
          <FormError>{errors.luncheon_covered_participants?.message}</FormError>
          <h4>Number of luncheon covered participants</h4>
          <input
            type="number"
            min={0}
            max={50}
            onWheel={(e) => e.currentTarget.blur()}
            {...register("luncheon_covered_participants", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="card">
          <FormError>{errors?.boot?.message}</FormError>
          <h4>Choose a boot to rent</h4>
          <small style={{ fontSize: "12px" }}>
            on desktop you can hold ctrl to select multiple boots
          </small>

          <select
            {...register("boot", { required: true })}
            multiple
            style={{ height: "150px" }}
          >
            {exhibitionBoots.map((item) => (
              <option value={[item.id, item.price]} key={item.id}>
                {item.name} =&gt; {formatMoney(item.price)}
              </option>
            ))}
          </select>
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

        <div>
          <b>Total:{formatMoney(sumTotal)}</b>
        </div>
        <br />
        <br />

        <div className="card">
          <button>Proceed To Pay</button>
        </div>
      </form>
    </>
  );
};

export default ExhibitorModal;
