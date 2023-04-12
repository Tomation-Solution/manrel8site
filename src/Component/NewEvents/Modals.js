import BackDrop from "../BackDrop/BackDrop";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useFieldArray, useForm } from "react-hook-form";
import "./Modals.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormError } from "./FormComponents";
import PlusIcon from "../../images/new-images/PlusIcon.png";

export const RegisterModal = ({ closefn }) => {
  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Register for Events</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form action="">
          <div className="card">
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="card">
            <h4>Company Name</h4>
            <input type="text" />
          </div>
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

export const RegisterTrainingModal = ({ closefn }) => {
  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Register for Training</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form action="">
          <div className="card">
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="card">
            <h4>Company Name</h4>
            <input type="text" />
          </div>
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

export const PayTrainingModal = ({ closefn }) => {
  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Pay for Training</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form action="">
          <div className="card">
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="card">
            <h4>Company Name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <button>Proceed To Pay</button>
          </div>
        </form>
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};

export const PayModal = ({ closefn, price }) => {
  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Pay for Events</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form action="">
          <div className="card">
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="card">
            <h4>Company Name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Amount</h4>
            <input type="text" value={price} disabled />
          </div>
          <div className="card">
            <button>Proceed To Pay</button>
          </div>
        </form>
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};

export const SingleEvent = ({ data, image, registerfn }) => {
  return (
    <div className="event-card">
      <img src={image} alt="" />
      <div style={{ margin: "10px" }}>
        <h2>{data.name}</h2>
        <div className="icons">
          <CalendarMonthIcon />
          <p>{data.date}</p>
        </div>
        <div className="icons">
          <LocationOnIcon />
          <p>{data.location}</p>
        </div>
        <div className="icons">
          <PaymentsIcon />
          <p>{data.amount}</p>
        </div>
        <div className="buttons">
          <button onClick={registerfn}>Register</button>
        </div>
      </div>
    </div>
  );
};

export const SingleTraining = ({ image, registerfn, data }) => {
  return (
    <div className="event-card">
      <img src={image} alt="" />
      <div style={{ margin: "10px" }}>
        <h2>{data.name}</h2>
        <div className="icons">
          <CalendarMonthIcon />
          <p>{data.date}</p>
        </div>
        <div className="icons">
          <LocationOnIcon />
          {data.location ? <p>{data.location}</p> : <p>MAN HOUSE IKEJA</p>}
        </div>
        <div className="icons">
          <PaymentsIcon />
          {data.amount ? <p>{data.amount}</p> : <p>NGN 70,000</p>}
        </div>
        <div className="buttons">
          <button onClick={registerfn}>Register</button>
        </div>
      </div>
    </div>
  );
};

export const PublicationPayModal = ({ closefn }) => {
  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Pay for Publication</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form action="">
          <div className="card">
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Phone Number</h4>
            <input type={"text"} />
          </div>
          <div className="card">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="card">
            <h4>Company Name</h4>
            <input type="text" />
          </div>
          <div className="card">
            <h4>Amount</h4>
            <input type="text" />
          </div>
          <div className="card">
            <button>Proceed To Pay</button>
          </div>
        </form>
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};

export const SinglePublication = ({ image, registerfn, data }) => {
  return (
    <div className="event-card">
      <img src={image} alt="" />
      <div style={{ margin: "10px" }}>
        <h2>{data.name}</h2>
        <div className="icons">
          <CalendarMonthIcon />
          <p>{data.date}</p>
        </div>
        <div className="icons">
          <LocationOnIcon />
          {data.location ? <p>{data.location}</p> : <p>MAN HOUSE IKEJA</p>}
        </div>
        <div className="icons">
          <PaymentsIcon />
          {data.amount ? <p>{data.amount}</p> : <p>NGN 70,000</p>}
        </div>
        <div className="buttons">
          <button onClick={registerfn}>Pay For Publication</button>
        </div>
      </div>
    </div>
  );
};

const schema = yup.object({
  company_name: yup.string().required(),
  company_address: yup.string().required(),
  participant: yup
    .array(
      yup.object({
        name: yup.string().required(),
        designation: yup.string().required(),
        email: yup.string().email().required(),
        phone_no: yup.string().required(),
      })
    )
    .min(1, "Please add atleast one participant"),
});
export const AnnualGeneralMeeting = ({ closefn, price }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      company_name: "",
      company_address: "",
      participant: [
        {
          name: "participant name",
          designation: "participant designation",
          email: "participant email",
          phone_no: "participant phone number",
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

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <BackDrop>
      <div className="modal-cover">
        <div className="top">
          <h2>Annual General Meeting Registration</h2>
          <p>Let's start by entering your information</p>
          <p>All fields are required unless otherwise indicated.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="card">
            <h4>Amount</h4>
            <input type="text" value={price} disabled />
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

          {fields.map((item, index) => (
            <section key={item.id} className="participant-section">
              <div className="card">
                <h4>Participant Name</h4>
                <FormError>
                  {errors.participant?.[index]?.name?.message
                    ? "invalid input"
                    : null}
                </FormError>
                <input type="text" {...register(`participant.${index}.name`)} />
              </div>

              <div className="card">
                <FormError>
                  {errors.participant?.[index]?.designation?.message
                    ? "invalid input"
                    : null}
                </FormError>
                <h4>Participant Designation</h4>
                <select
                  defaultValue={""}
                  {...register(`participant.${index}.designation`)}
                >
                  <option value={""} disabled>
                    select an option
                  </option>
                  <option value={"memeber"}>Member</option>
                  <option value={"exhibitor"}>Exhibitor</option>
                  <option value={"exhibitor-participant"}>
                    Exhibition Participant
                  </option>
                  <option value={"guest"}>Guest</option>
                  <option value={"media"}>Media</option>
                  <option value={"staff"}>Staff</option>
                </select>
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
                  name: "participant name",
                  designation: "Member",
                  email: "participant email",
                  phone_no: "participant phone number",
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
        <div className="closebtn" onClick={closefn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};
