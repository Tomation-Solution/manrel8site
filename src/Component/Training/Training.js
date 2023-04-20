import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Image from "../../images/Rectangle 224.png";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import {
  MpdclTrainings,
  PayTrainingModal,
  RegisterTrainingModal,
  SingleTraining,
} from "../NewEvents/Modals";
import { mpdclTrainings, trainingData } from "./TrainingData";
import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import Subscribe from "../Subscribe/Subscribe";

import MpdclTrainingImage from "../../images/new-images/MpdclTraining.jpeg";

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
        <Subscribe />
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Tranings"}
          details={[
            "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
          ]}
        />
        <div className="event-options">
          <span className="span-active">MRC Trainings</span>
        </div>

        <div className="event-container">
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
        </div>

        <div className="event-options">
          <span className="span-active">MPDCL Trainings</span>
        </div>

        <div className="event-container">
          <div className="event-items">
            {mpdclTrainings.map((item, index) => (
              <MpdclTrainings
                image={MpdclTrainingImage}
                registerfn={() => setRegister(!register)}
                data={item}
                key={index}
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
