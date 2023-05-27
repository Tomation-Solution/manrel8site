import React, { useState } from "react";
import { UIProvider } from "../../Ui";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import Subscribe from "../Subscribe/Subscribe";

import {
  SingleTraining,
  RegisterTrainingModal,
} from "../Modals/TrainingModals";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import { getTrainings } from "../../utils/csm-api-calls";
import { groupTrainings } from "../../utils/groupby-value";

const Training = () => {
  const [registerTraining, setRegisterTraining] = useState(false);
  const [trainingObject, setTrainingObject] = useState(null);

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

  const trainingRegister = (data) => {
    setTrainingObject(data);
    setRegisterTraining(!registerTraining);
  };
  return (
    <div className="new-events">
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
          header={"Tranings"}
          details={[
            "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
          ]}
        />
        {trainingLoading || trainingFetching ? (
          <Loader loading={trainingLoading || trainingFetching} />
        ) : !trainingError ? (
          <div className="event-container">
            {trainingFetchData.map((item, index) => (
              <section key={index}>
                <h1 className="events-header">{item.group_name}</h1>
                <div className="event-items">
                  {item.items.map((item, index) => (
                    <SingleTraining
                      registerfn={trainingRegister}
                      data={item}
                      key={index}
                    />
                  ))}
                </div>
              </section>
            ))}
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

export default Training;
