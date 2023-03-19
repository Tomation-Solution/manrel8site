import React from "react";
import { ThemeProvider } from "@emotion/react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";

import "./Publications.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import Articleimage from "../../images/new-images/PublicationImg.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { pubdata } from "./PublicationsData";
import { Link } from "react-router-dom";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";

const Publications = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications">
            <Subscribe />
            <NewNavBar />

            <div className="hero_image">
              <div className="cover">
                <h1>Publications</h1>
                <p>Read our latest reports, blogs and publications</p>
              </div>
            </div>

            <div className="news_main">
              <div className="cover">
                <div className="right">
                  <div className="top">
                    <h2>Publications</h2>
                  </div>
                  <div className="wrap">
                    {pubdata.map((item) => {
                      return (
                        <div className="card">
                          <button>Publication</button>
                          <div className="flex">
                            <h3>{item.name}</h3>
                            <Link to={`/publications-details/${item.id}`}>
                              <OpenInNewIcon />
                            </Link>
                          </div>
                          <p>{item.date}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bto">
                    {/* <Link
                      to={"/insight-more"}
                      style={{ textDecoration: "none", color: "#2b3513" }}
                    >
                      <h3>View all {">"}</h3>
                    </Link> */}
                  </div>
                </div>
                <div className="left">
                  <img src={Articleimage} alt="" />
                  <InsightQuickNavigation />
                </div>
              </div>
            </div>

            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </ThemeProvider>
    </div>
  );
};

export default Publications;
