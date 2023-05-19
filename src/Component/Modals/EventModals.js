import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import PaymentsIcon from "@mui/icons-material/Payments";
import BackDrop from "../BackDrop/BackDrop";
import "../NewEvents/Modals.scss";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { formatMoney } from "../../utils/money-formatter";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormError } from "../NewEvents/FormComponents";
import * as yup from "yup";
import { eventTrainingRegister } from "../../utils/csm-api-calls";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

export const SingleEvent = ({ data, registerfn }) => {
  return (
    <div className="event-card">
      <img src={data.image} alt="" />
      <div style={{ margin: "10px" }}>
        <h2>{data.name}</h2>
        <div className="icons">
          <CalendarMonthIcon />
          <small style={{ marginLeft: "5px" }}>Start date:</small>
          <p>{data.start_date}</p>
        </div>

        <div className="icons">
          <CalendarMonthIcon />
          <small style={{ marginLeft: "5px" }}>End date:</small>
          <p>{data.end_date}</p>
        </div>

        <div className="icons">
          <SupervisedUserCircleIcon />
          <p>{data.group_type}</p>
        </div>

        <div className="icons">
          <LocationOnIcon />
          <p>{data.location}</p>
        </div>

        <div className="icons">
          <PaymentsIcon />
          <p>{formatMoney(data.price)}</p>
        </div>
        <div className="buttons">
          <button onClick={() => registerfn(data)}>Register</button>
        </div>
      </div>
    </div>
  );
};

export const RegisterModal = ({ closefn, data }) => {
  const [renderData, setRenderData] = useState(null);

  useEffect(() => {
    setRenderData(data);
  }, [data, renderData]);

  const schema = yup.object({
    fullname: yup.string().required("fullname is required"),
    email: yup.string().email().required("email is required"),
    phone_number: yup
      .string("phone no is required")
      .required("phone no is required"),
    company_name: yup.string().required("company name is required"),
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
      company_name: "",
    },
  });

  const { mutate, isLoading } = useMutation(
    (data) => eventTrainingRegister(data),
    {
      onMutate: () => {
        toast.info("processing registration");
      },
      onError: () => {
        toast.error("registration failed");
      },
      onSuccess: (data) => {
        toast.success("registration successful");
        if (data?.data?.data?.authorization_url) {
          const redirectUrl = data?.data?.data?.authorization_url;
          window.open(redirectUrl, "_blank");
        }
        closefn();
      },
    }
  );

  const onSubmitHandler = (dataInput) => {
    mutate({ type: "EVENT", event: renderData.id, ...dataInput });
  };

  return (
    <BackDrop>
      <Loader loading={isLoading} />
      <div className="modal-cover">
        <div className="top">
          <h2>Register for Events</h2>
          <p>Let's start by entering your information.</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="card">
            <FormError>{errors?.fullname?.message}</FormError>
            <h4>Full name</h4>
            <input type="text" {...register("fullname")} />
          </div>
          <div className="card">
            <FormError>{errors?.phone_number?.message}</FormError>
            <h4>Phone Number</h4>
            <input type={"text"} {...register("phone_number")} />
          </div>
          <div className="card">
            <FormError>{errors?.email?.message}</FormError>
            <h4>Email Address</h4>
            <input type="email" {...register("email")} />
          </div>
          <div className="card">
            <FormError>{errors?.company_name?.message}</FormError>
            <h4>Company Name</h4>
            <input type="text" {...register("company_name")} />
          </div>

          {renderData?.is_paid ? (
            <div className="card">
              <h4>Amount</h4>
              <input
                type="text"
                value={formatMoney(renderData?.price)}
                disabled
              />
            </div>
          ) : null}

          <div className="card">
            <button>Register</button>
          </div>
        </form>
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};
