import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import "./NewAbout.scss";
import { getAboutHowWeWorkPVC } from "../../utils/csm-api-calls";
import { useQuery } from "react-query";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";

const HowWeWork = () => {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-about-sector",
    getAboutHowWeWorkPVC,
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
              <div className="how-work">
                <h1>How We Work</h1>
                <div className="how-work-con">
                  {data.how_we_work.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="nat-council">
                {data.how_we_work_details.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <h3
                  style={{
                    color: "#2b3513",
                    fontWeight: "500",
                    textAlign: "left",
                    fontSize: "25px",
                  }}
                >
                  The Standing Committees Of The National Council
                </h3>
                <div className="core-values-items">
                  {data.committees.map((item, index) => (
                    <div
                      key={index}
                      className="core-values-item"
                      style={{ backgroundColor: "#596d27" }}
                    >
                      <h3>{index + 1}</h3>
                      <div className="right">
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {data.committee_details.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="ad-hoc">
                <h1>AD-HOC Committees</h1>
                {data.adhoc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="other-groups">
                <h1>Special Purpose Vehicles Of MAN</h1>
                {data.spvehicles.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="other-groups">
                <h1>Special Purpose Groups Of MAN</h1>
                {data.spgroups.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="other-groups">
                <h1>Code Of Conduct</h1>
                {data.conduct.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <h2 style={{ color: "#2b3513" }}>Members Shall:</h2>
              <div className="endeavour-items">
                {data.conduct_listing.map((item, index) => (
                  <div className="endeavour-item" key={index}>
                    <h1>{index + 1}</h1>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <FormError>Can't Fetch Data</FormError>
        )}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default HowWeWork;
