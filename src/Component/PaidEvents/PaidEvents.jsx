import React, { useState } from "react";
import "../PaidPublications/PaidPublications.scss";
import {
  AnnualGeneralMeeting,
  PayModal,
  RegisterModal,
} from "../NewEvents/Modals";

import { SingleEvent } from "../NewEvents/Modals";
import Image from "../../images/new-images/EventBgImg.png";
import Image2 from "../../images/new-images/GalLinkImg (3).png";
import Image3 from "../../images/new-images/InsightCardIMages (3).jpg";
import { eventData } from "../Events/EventData";

export const PaidEvents = () => {
  const [register, setRegister] = useState(false);

  const viewpaidHandler = () => {
    setRegister(!register);
  };

  return (
    <>
      {register && <PayModal price={70000} closefn={viewpaidHandler} />}

      <div className="paid-publications">
        {/* <h1 className="header">Paid Event</h1> */}
        <div className="paid-publication-items">
          {eventData
            .filter((item) => item.type === "paid")
            .map((item) => (
              <SingleEvent
                image={Image}
                registerfn={() => setRegister(!register)}
                key={item.id}
                data={item}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export const FreeEvents = () => {
  const [register, setRegister] = useState(false);

  const viewpaidHandler = () => {
    setRegister(!register);
  };

  return (
    <>
      {register && <RegisterModal closefn={viewpaidHandler} />}

      <div className="paid-publications">
        <div className="paid-publication-items">
          {eventData
            .filter((item) => item.type === "free")
            .map((item) => (
              <SingleEvent
                image={Image2}
                registerfn={() => setRegister(!register)}
                key={item.id}
                data={item}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export const SpecialEvents = () => {
  const [register, setRegister] = useState(false);

  const viewpaidHandler = () => {
    setRegister(!register);
  };

  return (
    <>
      {register && (
        <AnnualGeneralMeeting price={70000} closefn={viewpaidHandler} />
      )}

      <div className="paid-publications">
        <div className="paid-publication-items">
          {eventData
            .filter((item) => item.type === "special")
            .map((item) => (
              <SingleEvent
                image={Image3}
                registerfn={() => setRegister(!register)}
                key={item.id}
                data={item}
              />
            ))}
        </div>
      </div>
    </>
  );
};
