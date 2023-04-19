import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "./NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import {
  MpdclTrainings,
  RegisterModal,
  RegisterTrainingModal,
  SingleEvent,
  SingleTraining,
} from "./Modals";
import { Link } from "react-router-dom";
import { mpdclTrainings, trainingData } from "../Training/TrainingData";
import { eventData } from "../Events/EventData";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import Subscribe from "../Subscribe/Subscribe";

const NewEvents = () => {
  const [register, setRegister] = useState(false);
  const [registerTraining, setRegisterTraining] = useState(false);
  return (
    <div className="new-events">
      {register && <RegisterModal closefn={() => setRegister(!register)} />}
      {registerTraining && (
        <RegisterTrainingModal
          closefn={() => setRegisterTraining(!registerTraining)}
        />
      )}
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Consultancy,Events & Trainings"}
          details={[
            "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
          ]}
        />

        <div className="event-container">
          <h1 className="events-header">Events</h1>
          <div className="event-items">
            {eventData
              .filter((item) => item.type === "free")
              .map((item) => (
                <SingleEvent
                  image={Image}
                  registerfn={() => setRegister(!register)}
                  key={item.id}
                  data={item}
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
          <h1 className="events-header">MRC Trainings</h1>
          <div className="event-items">
            {trainingData.slice(0, 4).map((item, index) => (
              <SingleTraining
                image={Image}
                registerfn={() => setRegisterTraining(!registerTraining)}
                data={item}
                key={index}
              />
            ))}
          </div>

          <h1 className="events-header">MPDCL Trainings</h1>
          <div className="event-items">
            {mpdclTrainings.slice(0, 4).map((item, index) => (
              <MpdclTrainings
                image={Image}
                registerfn={() => setRegisterTraining(!registerTraining)}
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
