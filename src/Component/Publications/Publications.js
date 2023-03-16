import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";
import NavBar from "../NavBar/NavBar";

import "./Publications.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import Image1 from "../../images/div-7.png";
import Image2 from "../../images/div-8.png";
import Image3 from "../../images/div-9.png";
import Image4 from "../../images/div-10.png";
import Image5 from "../../images/div-11.png";

import Articleimage from "../../images/div8.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Publications = () => {
  const AboutList = [
    {
      image: Image1,
      title: "Publications",
      description:
        "Find reports and data from ABAs research, as well as analysis of banking industry trends.",
      linkHead: "Proccee to see Pubications",
      location: "news",
    },

    {
      image: Image2,
      title: "Information Bank",
      description:
        "Keep current on trends in banking and the issues affecting our industry, with email bulletins for ABA members tailored to your interests.",
      linkHead: "Proceed to see Information Bank",
      location: "Insight-more",
    },
    {
      image: Image3,
      title: "Events",
      description:
        "Materials to support you in your daily work, including reference materials and ABA custom guides for a variety of issues.​​​​​​​​​​​",
      linkHead: "See more",
      location: "events",
    },
    {
      image: Image4,
      title: "Reports",
      description:
        "MAN promotes the interest of manufacturers by deepening its advocacy and partnership with national and international economic actors in Government, Organized Private Sector,",
      linkHead: "Proceed to see Reports",
      location: "Insight-more",
    },
    {
      image: Image5,
      title: "Gallery",
      description: "ABAs flagship magazine.",
      linkHead: "Proceed to see Gallery",
      location: "Gallery",
    },
    {
      image: Image1,
      title: "PublicationX",
      description:
        "Find reports and data from ABAs research, as well as analysis of banking industry trends.",
      linkHead: "Procceed to see Pubications",
      location: "Insight-more",
    },
  ];
  const [showPremiummodal, setShowPremiummodal] = useState(false);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications">
            <Subscribe />
            <NavBar location="about" />

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
                    {[...Array(4)].map((item, i) => (
                      <div className="card" key={1 + i}>
                        <button onClick={() => setShowPremiummodal(true)}>
                          Publication
                        </button>
                        <div className="flex">
                          <h3>Manufacturing Outlook Q4 2022</h3>
                          <OpenInNewIcon />
                        </div>
                        <p>January 03, 2023</p>
                      </div>
                    ))}
                  </div>
                  <div className="bto">
                    <Link
                      to={"/insight-more"}
                      style={{ textDecoration: "none", color: "#2b3513" }}
                    >
                      <h3>View all {">"}</h3>
                    </Link>
                  </div>
                </div>
                <div className="left">
                  <img src={Articleimage} alt="" />
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
