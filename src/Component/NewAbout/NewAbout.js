import React from "react";

import "./NewAbout.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { UIProvider } from "../../Ui";
import NewNavBar from "../NewNavBar/NewNavBar";
import { ServiceHelper } from "./NewAboubtHelpers";

import Subscribe from "../Subscribe/Subscribe";
import { useQuery } from "react-query";
import { getAboutHistoryPVC } from "../../utils/csm-api-calls";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";

const NewAbout = () => {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-about-history",
    getAboutHistoryPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="new-about">
      <UIProvider>
        <Subscribe />
        <NewNavBar />

        {isLoading || isFetching ? (
          <Loader loading={isLoading || isFetching} />
        ) : !isError ? (
          <>
            <div
              className="topBg"
              style={{
                background: `url(${data.main_image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="new-about-content">
              <div className="history" id="history">
                <div className="left">
                  <img alt="" src={data.history_image} />
                </div>
                <div className="right">
                  <h3>Our History</h3>

                  {data.history_paragraphs.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="core-values">
                <h1>Our Core Values</h1>
                <div className="core-values-items">
                  {data.core_values.map((item, index) => (
                    <ServiceHelper
                      key={index}
                      others={item[0]}
                      details={item.slice(1)}
                      color={"#495b20"}
                    />
                  ))}
                </div>
              </div>
              <div className="missvis">
                <div className="missvis-item">
                  <div className="top">
                    <img alt="" src={data.vision_image} />
                  </div>
                  <div className="bottom">
                    <h1>Our Vision</h1>

                    {data.vision.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="missvis-item">
                  <div className="top">
                    <img alt="" src={data.mission_image} />
                  </div>
                  <div className="bottom">
                    <h1>Our Mission</h1>
                    {data.mission.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="our-obj">
                <h1>Our Objectives</h1>
                <h4>The fundamental objectives of the Association are</h4>

                <div className="our-obj-items">
                  {data.objectives.map((item, index) => (
                    <div
                      key={index}
                      className="our-obj-item"
                      style={{ backgroundColor: "#2b3513" }}
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                {data.extras.map((item, index) => (
                  <p style={{ color: "#2b3513" }} key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Current Location Image */}
            <div
              className="topBg"
              style={{
                background: `url(${data.main_image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </>
        ) : (
          <FormError>Can't Fetch About History Data</FormError>
        )}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewAbout;
