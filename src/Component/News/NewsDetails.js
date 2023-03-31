import { ThemeProvider } from "@emotion/react";
import React from "react";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import theme from "../../Styles/theme/Theme";

import "./NewsDetails.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Link, useParams } from "react-router-dom";
import { newsdata } from "./NewsData";
import NewNavBar from "../NewNavBar/NewNavBar";

const NewsDetails = () => {
  const { id } = useParams();

  const renderdata = newsdata.find((item) => item.id === id);

  const otherPub = newsdata.filter((item) => item.id !== id);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications-details">
            <Subscribe />
            <NewNavBar />

            <div className="hero_image">
              <div className="cover">
                <h1>News Details</h1>
                <h5>{renderdata.title}</h5>
              </div>
            </div>

            <div className="news_main">
              <div className="cover">
                {renderdata && (
                  <div className="left">
                    <h2>{renderdata.title}</h2>
                    <p className="pub-paragraph">Date: {renderdata?.date}</p>
                    {renderdata?.paragraphs.map((item, index) => (
                      <p className="pub-paragraph" key={index}>
                        {item}
                      </p>
                    ))}

                    <div className="botom">
                      <FacebookIcon />
                      <LinkedInIcon />
                      <TwitterIcon />
                      <EmailIcon />
                    </div>
                  </div>
                )}

                <div className="right">
                  <h2>Other News</h2>
                  <div className="wrap">
                    {otherPub.map((item, index) => (
                      <div className="card" key={index}>
                        <Link to={"/news"}>
                          <button
                            style={{ color: "#2b3513", cursor: "pointer" }}
                          >
                            <b>News</b>
                          </button>
                        </Link>
                        <div className="flex">
                          <h3>{item.name}</h3>
                          <Link to={`/publications-details/${item.id}`}>
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

export default NewsDetails;
