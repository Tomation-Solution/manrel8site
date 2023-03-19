import { ThemeProvider } from "@emotion/react";
import React from "react";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import theme from "../../Styles/theme/Theme";

import "./ReportsDetails.scss";

import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Link, useParams } from "react-router-dom";
import { reportdata } from "./ReportData";
import NewNavBar from "../NewNavBar/NewNavBar";

const ReportsDetails = () => {
  const { id } = useParams();

  const renderdata = reportdata.find((item) => item.id === id);

  const otherPub = reportdata.filter((item) => item.id !== id);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications-details">
            <Subscribe />
            <NewNavBar />

            <div className="hero_image">
              <div className="cover">
                <h1>Report Details</h1>
                <h5>{renderdata.title}</h5>
              </div>
            </div>

            <div className="news_main">
              <div className="cover">
                {renderdata && (
                  <div className="left">
                    <h2>{renderdata.title}</h2>
                    <p className="pub-paragraph">Date: {renderdata?.date}</p>
                    {renderdata?.freetext.map((item) => (
                      <p className="pub-paragraph">{item}</p>
                    ))}
                    <a
                      className="readmore-link"
                      href={renderdata.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read More...
                    </a>

                    <div className="botom">
                      <FacebookIcon />
                      <LinkedInIcon />
                      <TwitterIcon />
                      <EmailIcon />
                    </div>
                  </div>
                )}

                <div className="right">
                  <h2>Other Report</h2>
                  <div className="wrap">
                    {otherPub.map((item) => (
                      <div className="card" key={item.id}>
                        <button>Report</button>
                        <div className="flex">
                          <h3>{item.name}</h3>
                          <Link to={`/report-details/${item.id}`}>
                            <OpenInNewIcon />
                          </Link>
                        </div>
                        <p>{item.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Wall />
          <Footer />
        </UIProvider>
      </ThemeProvider>
    </div>
  );
};

export default ReportsDetails;
