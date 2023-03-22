import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { PayModal, RegisterModal, SingleEvent } from "../NewEvents/Modals";
import { eventData } from "./EventData";

const Events = () => {
  // const [options , setOptions] = useState("free")
  const [register, setRegister] = useState(false);
  const [pay, setPay] = useState(false);
  return (
    <div className="new-events">
      {register && <RegisterModal closefn={() => setRegister(!register)} />}
      {pay && <PayModal closefn={() => setPay(!pay)} />}
      <UIProvider>
        <NewNavBar />
        <div className="topBg">
          <h1>Events</h1>
          <p>
            Conferences, seminars, workshops, certified courses and more for
            manufacturers at all levels in every role.
          </p>
        </div>

        <div className="event-options">
          <span className="span-active">Free Events</span>
          <span className="span-inactive" onClick={() => setPay(!pay)}>
            Paid Events
          </span>
          <span className="span-inactive" onClick={() => setPay(!pay)}>
            Special Events
          </span>
        </div>

        <div className="event-container">
          <div className="event-items">
            {eventData
              .filter((event) => event.type === "free")
              .map((item) => (
                <SingleEvent
                  image={Image}
                  registerfn={() => setRegister(!register)}
                  key={item}
                  data={item}
                />
              ))}
          </div>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default Events;
