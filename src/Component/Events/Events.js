import React, { useState } from "react";
import { UIProvider } from "../../Ui";

import NewNavBar from "../NewNavBar/NewNavBar";
import "../NewEvents/NewEvents.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import backImage from "../../images/new-images/EventBgImg.png";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import {
  FreeEvents,
  PaidEvents,
  SpecialEvents,
} from "../PaidEvents/PaidEvents";

const Events = () => {
  const [options, setOptions] = useState("free");

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
          <span
            className={options === "special" ? "span-active" : "span-inactive"}
            onClick={() => setOptions("special")}
          >
            Annual General Meeting
          </span>
        </div>

        {options === "free" ? <FreeEvents /> : null}
        {options === "paid" ? <PaidEvents /> : null}
        {options === "special" ? <SpecialEvents /> : null}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default Events;
