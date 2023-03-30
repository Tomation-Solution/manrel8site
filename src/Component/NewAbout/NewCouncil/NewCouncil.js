import React, { useState } from "react";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Wall from "../../Wall/Wall";

import "./NewCouncil.scss";
import NewConExecutive from "./NewCouncilComp/NewConExecutive";

const NewCouncil = () => {
  const [options, setOptions] = useState("executive");
  return (
    <div className="new-council">
      <UIProvider>
        <NewNavBar />
        {options === "executive" ? (
          <div className="hero_image">
            {/* <div className="cover">
              <h1>National Council Members</h1>
            </div> */}
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
              style={{ fontSize: "50px" }}
              onClick={() => setOptions("executive")}
              className={
                options === "executive" ? "option_item_active" : "option_item"
              }
            >
              National Council Members
            </span>
          </div>

          {options === "executive" && <NewConExecutive />}
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewCouncil;
