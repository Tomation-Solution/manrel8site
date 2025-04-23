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
import { extractListItems } from "../../utils/extractListItes";

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
                height: "100vh",
              }}
            ></div>
            <div className="new-about-content">
              {data.how_we_work_header && (
                <div className="how-work">
                  <h1>{data.how_we_work_header}</h1>
                  <div className="how-work-con">
                    <p
                      dangerouslySetInnerHTML={{ __html: data.how_we_work }}
                    ></p>
                  </div>
                </div>
              )}
              <div className="nat-council">
                {data.how_we_work_header && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.how_we_work_details,
                    }}
                  ></p>
                )}

                {data.committees_header && (
                  <>
                    <h3
                      style={{
                        color: "#2b3513",
                        fontWeight: "500",
                        textAlign: "left",
                        fontSize: "25px",
                      }}
                    >
                      {data.committees_header}
                    </h3>
                    <div className="core-values-items">
                      {extractListItems(data.committees).map((item, index) => (
                        <div
                          key={index}
                          className="core-values-item"
                          style={{ backgroundColor: "#596d27" }}
                        >
                          <h3>{index + 1}</h3>
                          <div className="right">
                            <p dangerouslySetInnerHTML={{ __html: item }}></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {data.committees_header && (
                  <p
                    dangerouslySetInnerHTML={{ __html: data.committee_details }}
                  ></p>
                )}
              </div>

              {data.adhoc_header && (
                <div className="ad-hoc">
                  <h1>{data.adhoc_header}</h1>
                  <p dangerouslySetInnerHTML={{ __html: data.adhoc }}></p>
                </div>
              )}

              {data.spvehicles_header && (
                <div className="other-groups">
                  <h1>{data.spvehicles_header}</h1>
                  <p dangerouslySetInnerHTML={{ __html: data.spvehicles }}></p>
                </div>
              )}

              {data.spgroups_header && (
                <div className="other-groups">
                  <h1>{data.spgroups_header}</h1>
                  <p dangerouslySetInnerHTML={{ __html: data.spgroups }}></p>
                </div>
              )}

              {data.conduct_header && (
                <div className="other-groups">
                  <h1>{data.conduct_header}</h1>
                  <p dangerouslySetInnerHTML={{ __html: data.conduct }}></p>
                </div>
              )}

              {data.conduct_listing_header && (
                <>
                  <h2 style={{ color: "#2b3513" }}>
                    {data.conduct_listing_header}
                  </h2>
                  <div className="endeavour-items">
                    {extractListItems(data.conduct_listing).map(
                      (item, index) => (
                        <div className="endeavour-item" key={index}>
                          <h1>{index + 1}</h1>
                          <p dangerouslySetInnerHTML={{ __html: item }}></p>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
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
