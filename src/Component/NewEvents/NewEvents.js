import React, { useState } from "react";
import { UIProvider } from "../../Ui";

import NewNavBar from "../NewNavBar/NewNavBar";
import "./NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";
// import { mpdclTrainings, trainingData } from "../Training/TrainingData";
// import { eventData } from "../Events/EventData";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import Subscribe from "../Subscribe/Subscribe";

import { useQuery } from "react-query";
import { getEvents, getTrainings } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";

import { SingleEvent, RegisterModal } from "../Modals/EventModals";
import {
  SingleTraining,
  RegisterTrainingModal,
} from "../Modals/TrainingModals";
import { FormError } from "./FormComponents";
import { groupTrainings } from "../../utils/groupby-value";

const NewEvents = () => {
  const [register, setRegister] = useState(false);
  const [eventObject, setEventObject] = useState(null);
  const [registerTraining, setRegisterTraining] = useState(false);
  const [trainingObject, setTrainingObject] = useState(null);

  const {
    isLoading: eventLoading,
    isError: eventError,
    isFetching: eventFetching,
    data: eventFetchData,
  } = useQuery("all-events", getEvents, {
    refetchOnWindowFocus: false,
    select: (data) => data.data,
  });

  const {
    isLoading: trainingLoading,
    isError: trainingError,
    isFetching: trainingFetching,
    data: trainingFetchData,
  } = useQuery("all-trainings", getTrainings, {
    refetchOnWindowFocus: false,
    select: (data) => {
      return groupTrainings(data.data);
    },
  });

  const eventRegister = (data) => {
    setEventObject(data);
    setRegister(!register);
  };

  const trainingRegister = (data) => {
    setTrainingObject(data);
    setRegisterTraining(!registerTraining);
  };

  return (
    <div className="new-events">
      {register && (
        <RegisterModal
          data={eventObject}
          closefn={() => setRegister(!register)}
        />
      )}

      {registerTraining && (
        <RegisterTrainingModal
          data={trainingObject}
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

        {eventFetching || eventLoading ? (
          <Loader loading={eventFetching || eventLoading} />
        ) : !eventError ? (
          <div className="event-container">
            <h1 className="events-header">Events</h1>
            <div className="event-items">
              <>
                {eventFetchData
                  .filter((item) => item.is_agm === false)
                  .slice(0, 3)
                  .map((item) => (
                    <SingleEvent
                      registerfn={eventRegister}
                      key={item.id}
                      data={item}
                    />
                  ))}
              </>
            </div>

            <div className="btn-center">
              <Link to="/events">
                <button>See More Events</button>
              </Link>
            </div>
          </div>
        ) : (
          <FormError>Can't Fetch Events</FormError>
        )}

        {trainingLoading || trainingFetching ? (
          <Loader loading={trainingLoading || trainingFetching} />
        ) : !trainingError ? (
          <div className="event-container">
            {trainingFetchData.map((item, index) => (
              <section key={index}>
                <h1 className="events-header">{item.group_name}</h1>
                <div className="event-items">
                  {item.items.slice(0, 3).map((item, index) => (
                    <SingleTraining
                      registerfn={trainingRegister}
                      data={item}
                      key={index}
                    />
                  ))}
                </div>
              </section>
            ))}

            <div className="btn-center">
              <Link to="/training">
                <button>See More Trainings</button>
              </Link>
            </div>
          </div>
        ) : (
          <FormError>Can't Fetch Trainings</FormError>
        )}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewEvents;
