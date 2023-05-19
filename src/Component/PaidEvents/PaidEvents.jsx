import React, { useState } from "react";
import "../PaidPublications/PaidPublications.scss";
import { RegisterModal, SingleEvent } from "../Modals/EventModals";
import { AGMRegistrationModal } from "../Modals/AGMRegistrationModals/AGMModal";

import Image3 from "../../images/new-images/InsightCardIMages (3).jpg";

export const PaidEvents = ({ data }) => {
  const [register, setRegister] = useState(false);
  const [eventObject, setEventObject] = useState(null);

  const eventRegister = (data) => {
    setEventObject(data);
    setRegister(!register);
  };

  return (
    <>
      {register && (
        <RegisterModal
          data={eventObject}
          closefn={() => setRegister(!register)}
        />
      )}

      <div className="paid-publications">
        <div className="paid-publication-items">
          {data.map((item) => (
            <SingleEvent registerfn={eventRegister} key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export const FreeEvents = ({ data }) => {
  const [register, setRegister] = useState(false);
  const [eventObject, setEventObject] = useState(null);

  const eventRegister = (data) => {
    setEventObject(data);
    setRegister(!register);
  };

  return (
    <>
      {register && (
        <RegisterModal
          data={eventObject}
          closefn={() => setRegister(!register)}
        />
      )}

      <div className="paid-publications">
        <div className="paid-publication-items">
          {data.map((item) => (
            <SingleEvent registerfn={eventRegister} key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export const SpecialEvents = ({ data }) => {
  const [register, setRegister] = useState(false);
  const [eventId, setEventId] = useState(0);

  const viewpaidHandler = () => {
    setRegister(!register);
  };

  const registerfn = (data) => {
    setEventId(data.id);
    setRegister(!register);
  };

  return (
    <>
      {register && (
        <AGMRegistrationModal closefn={viewpaidHandler} eventId={eventId} />
      )}

      <div className="paid-publications">
        <div className="paid-publication-items">
          {data.map((item) => (
            <SingleEvent
              image={Image3}
              registerfn={registerfn}
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};
