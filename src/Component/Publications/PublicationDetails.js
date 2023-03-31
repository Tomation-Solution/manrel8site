import { ThemeProvider } from "@emotion/react";
import React from "react";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import theme from "../../Styles/theme/Theme";

import "./PublicationDetails.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { newPubData } from "./PublicationsData";
import { Link, useParams } from "react-router-dom";
import NewNavBar from "../NewNavBar/NewNavBar";
import backImage from "../../images/new-images/InsightBgImg.png";
import NewImageBanner from "../NewImageBanner/NewImageBanner";

const PublicationDetails = () => {
  const { id } = useParams();

  const renderdata = newPubData.find((item) => item.id === id);

  const otherPub = newPubData.filter((item) => item.id !== id);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications-details">
            <Subscribe />
            <NewNavBar />

            <NewImageBanner
              image={backImage}
              header={"Publications Details"}
              details={[`${renderdata.title}`]}
            />

            <div className="news_main">
              <div className="cover">
                {renderdata && (
                  <div className="left">
                    <h2>{renderdata.title}</h2>
                    <p className="pub-paragraph">Date: {renderdata?.date}</p>
                    {renderdata?.freetext.map((item, index) => (
                      <p className="pub-paragraph" key={index}>
                        {item}
                      </p>
                    ))}
                    <a
                      className="readmore-link"
                      href={renderdata.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read More or Download
                    </a>
                  </div>
                )}

                <div className="right">
                  <h2>Other Publication</h2>
                  <div className="wrap">
                    {otherPub.map((item) => (
                      <div className="card" key={item.id}>
                        <Link to={"/publications"}>
                          <button
                            style={{ color: "#2b3513", cursor: "pointer" }}
                          >
                            <b>Publications</b>
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

export default PublicationDetails;
