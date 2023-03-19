import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import {
  PayTrainingModal,
  RegisterTrainingModal,
  SingleEvent,
} from "../NewEvents/Modals";

const Training = () => {
  // const [options , setOptions] = useState("free")
  const [register, setRegister] = useState(false);
  const [pay, setPay] = useState(false);
  return (
    <div className="new-events">
      {register && (
        <RegisterTrainingModal closefn={() => setRegister(!register)} />
      )}
      {pay && <PayTrainingModal closefn={() => setPay(!pay)} />}
      <UIProvider>
        <NewNavBar />
        <div className="topBg">
          <h1>Training</h1>
          <p>
            Conferences, seminars, workshops, certified courses and more for
            manufacturers at all levels in every role.
          </p>
        </div>

        <div className="event-options">
          <span className="span-active">Free Trainings</span>
          <span className="span-inactive" onClick={() => setPay(!pay)}>
            Paid Trainings
          </span>
          <span className="span-inactive" onClick={() => setPay(!pay)}>
            Special Trainings
          </span>
        </div>

        <div className="event-container">
          <div className="event-items">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <SingleEvent
                image={Image}
                registerfn={() => setRegister(!register)}
                key={item}
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

export default Training;
