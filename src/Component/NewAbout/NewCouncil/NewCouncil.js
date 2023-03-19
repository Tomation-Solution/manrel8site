import React, { useState } from "react";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Wall from "../../Wall/Wall";

import "./NewCouncil.scss";
import NewConExecutive from "./NewCouncilComp/NewConExecutive";
import PastPresident from "./NewCouncilComp/PastPresident";
import Branch from "../../ExecutiveCommitee/ExecCom-Components/Secetary";

const NewCouncil = () => {
  const [options, setOptions] = useState("executive");
  return (
    <div className="new-council">
      <UIProvider>
        <NewNavBar />
        {options === "executive" ? (
          <div className="hero_image">
            <div className="cover">
              <h1>National Council Members</h1>
            </div>
          </div>
        ) : (
          <div className="hero_image2">
            <div className="cover">
              <h1>Life Members</h1>
              <p>See our esteemed across the country</p>
            </div>
          </div>
        )}

        <div className="members">
          <div className="options">
            <span
              onClick={() => setOptions("executive")}
              className={
                options === "executive" ? "option_item_active" : "option_item"
              }
            >
              Executive Commitee Members
            </span>
            <span
              onClick={() => setOptions("past-presidents")}
              className={
                options === "past-presidents"
                  ? "option_item_active"
                  : "option_item"
              }
            >
              Past Presidents
            </span>
            <span
              onClick={() => setOptions("branch")}
              className={
                options === "branch" ? "option_item_active" : "option_item"
              }
            >
              Branch Secetary
            </span>
          </div>

          {options === "executive" && <NewConExecutive />}

          {options === "past-presidents" && <PastPresident />}

          {options === "branch" && <Branch />}
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewCouncil;
