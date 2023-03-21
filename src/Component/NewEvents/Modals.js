import BackDrop from "../BackDrop/BackDrop";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import "./Modals.scss";

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

export const PayModal = ({ closefn }) => {
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

export const SingleEvent = ({ image, registerfn }) => {
  return (
    <div className="event-card">
      <img src={image} alt="" />
      <h2>
        Identifying Capable Importers & Registering Manufactured Products in the
        ECOWAS, AfCFTA &Global Markets, for Sustainable Export.
      </h2>
      <div className="icons">
        <CalendarMonthIcon />
        <p>25th - 26th January</p>
      </div>
      <div className="icons">
        <LocationOnIcon />
        <p>MAN HOUSE IKEJA</p>
      </div>
      <div className="icons">
        <PaymentsIcon />
        <p>NGN 70,000</p>
      </div>
      <div className="buttons">
        <button onClick={registerfn}>Register</button>
      </div>
    </div>
  );
};

export const SingleTraining = ({ image, registerfn, data }) => {
  return (
    <div className="event-card">
      <img src={image} alt="" />
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
