import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";
import NavBar from "../NavBar/NavBar";

import "./ExecutiveCommitee.scss";
import Executive from "./ExecCom-Components/Executive";
import Sectoral from "./ExecCom-Components/Sectoral";
import Branch from "./ExecCom-Components/Branch";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Secetary from "./ExecCom-Components/Secetary";

const ExecutiveCommitee = () => {
  const [options, setOptions] = useState("executive");
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="executivecommittee">
            <Subscribe />
            <NavBar location="about" />

            <div className="hero_image">
              <div className="cover">
                <h1>NATIONAL COUNCIL MEMBERS</h1>
                <p>Read our latest reports, blogs and publications</p>
              </div>
            </div>

            <div className="members">
              <div className="options">
                <span
                  onClick={() => setOptions("executive")}
                  className={
                    options === "executive"
                      ? "option_item_active"
                      : "option_item"
                  }
                >
                  Executive Commitee Members
                </span>
                <span
                  onClick={() => setOptions("branch")}
                  className={
                    options === "branch" ? "option_item_active" : "option_item"
                  }
                >
                  Branch Chairmen
                </span>
                <span
                  onClick={() => setOptions("secretary")}
                  className={
                    options === "secretary"
                      ? "option_item_active"
                      : "option_item"
                  }
                >
                  Branch Secretary
                </span>
                <span
                  onClick={() => setOptions("sectoral")}
                  className={
                    options === "sectoral"
                      ? "option_item_active"
                      : "option_item"
                  }
                >
                  Sectoral Chairmen
                </span>
              </div>

              {options === "executive" && <Executive />}

              {options === "branch" && <Branch />}

              {options === "secretary" && <Secetary />}

              {options === "sectoral" && <Sectoral />}
            </div>
            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </ThemeProvider>
    </div>
  );
};

export default ExecutiveCommitee;
