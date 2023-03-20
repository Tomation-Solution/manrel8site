import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "./NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { RegisterModal, SingleEvent, SingleTraining } from "./Modals";
import { Link } from "react-router-dom";
import { trainingData } from "../Training/TrainingData";

const NewEvents = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="new-events">
      {register && <RegisterModal closefn={() => setRegister(!register)} />}
      <UIProvider>
        <NewNavBar />
        <div className="topBg">
          <h1>Events & Tranings</h1>
          <p>
            Conferences, seminars, workshops, certified courses and more for
            manufacturers at all levels in every role.
          </p>
        </div>

        <div className="event-container">
          <h1 className="events-header">Events</h1>
          <div className="event-items">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <SingleEvent
                image={Image}
                registerfn={() => setRegister(!register)}
                key={item}
              />
            ))}
          </div>

          <div className="btn-center">
            <Link to="/events">
              <button>See More Events</button>
            </Link>
          </div>
        </div>

        <div className="event-container">
          <h1 className="events-header">Trainings</h1>
          <div className="event-items">
            {trainingData.map((item, index) => (
              <SingleTraining
                image={Image}
                registerfn={() => setRegister(!register)}
                data={item}
                key={index}
              />
            ))}
          </div>
          <div className="btn-center">
            <Link to="/training">
              <button>See More Trainings</button>
            </Link>
          </div>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewEvents;
