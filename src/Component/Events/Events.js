import React, { useState } from "react";
import { UIProvider } from "../../Ui";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import backImage from "../../images/new-images/InsightCardIMages (5).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import { FreeEvents, PaidEvents } from "../PaidEvents/PaidEvents";
import { getEvents } from "../../utils/csm-api-calls";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";

const Events = () => {
  const [options, setOptions] = useState("free");

  const {
    isLoading: eventLoading,
    isError: eventError,
    isFetching: eventFetching,
    data: eventFetchData,
  } = useQuery("all-events", getEvents, {
    refetchOnWindowFocus: false,
    select: (data) => data.data,
  });

  return (
    <div className="new-events">
      <UIProvider>
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Events"}
          details={[
            "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
          ]}
        />

        <div className="event-options">
          <span
            className={options === "free" ? "span-active" : "span-inactive"}
            onClick={() => setOptions("free")}
          >
            Free Events
          </span>
          <span
            className={options === "paid" ? "span-active" : "span-inactive"}
            onClick={() => setOptions("paid")}
          >
            Paid Events
          </span>
          {/* <span
            className={options === "special" ? "span-active" : "span-inactive"}
            onClick={() => setOptions("special")}
          >
            Annual General Meeting
          </span> */}
        </div>

        {eventFetching || eventLoading ? (
          <Loader loading={eventFetching || eventLoading} />
        ) : !eventError ? (
          <>
            {options === "free" ? (
              <FreeEvents
                data={eventFetchData.filter(
                  (item) => item.is_paid === false && item.is_agm === false
                )}
              />
            ) : null}
            {options === "paid" ? (
              <PaidEvents
                data={eventFetchData.filter(
                  (item) => item.is_paid === true && item.is_agm === false
                )}
              />
            ) : null}
            {/* {options === "special" ? (
              <SpecialEvents
                data={eventFetchData.filter(
                  (item) => item.is_agm === true && item.is_paid === false
                )}
              />
            ) : null} */}
          </>
        ) : (
          <FormError>Can't Fetch Event Data</FormError>
        )}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default Events;
