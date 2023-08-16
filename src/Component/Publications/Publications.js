import React from "react";
import { ThemeProvider } from "@emotion/react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";

import "./Publications.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import Articleimage from "../../images/new-images/InsightCardIMages (4).jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { newPubData } from "./PublicationsData";
import { Link } from "react-router-dom";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (4).jpg";
import { useQuery } from "react-query";
import {
  getFreePublication,
  getPublicationType,
} from "../../utils/csm-api-calls";
import { getGroupedBy } from "../../utils/groupby-value";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";
import { dateformatter } from "../../utils/date-formatter";

const Publications = () => {
  const {
    isLoading: typeLoading,
    isFetching: typeFetching,
    isError: typeError,
    data: typeData,
  } = useQuery("all-publication-types", getPublicationType, {
    refetchOnWindowFocus: false,
    select: (data) => {
      const publicationtypes = {};
      data.data.forEach((item) => {
        publicationtypes[item.id] = item.name;
      });
      return publicationtypes;
    },
  });

  const { isLoading, isFetching, isError, data } = useQuery(
    "all-free-publications",
    getFreePublication,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  let renderdata;
  if (data) {
    renderdata = getGroupedBy(data, "type");
  }
  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <UIProvider>
            <div className="publications">
              <Subscribe />
              <NewNavBar />

              <NewImageBanner
                image={backImage}
                header={"Publications"}
                details={["Read our latest publications."]}
              />

              <div className="news_main">
                <div className="cover">
                  <div className="right">
                    <p className="view-paid">
                      <Link
                        to={"/paid-publications"}
                        style={{ color: "#2b3513", textDecoration: "none" }}
                      >
                        Click to view paid publications
                      </Link>
                    </p>
                    <div className="top">
                      <h2>Publications</h2>
                    </div>

                    {isLoading || isFetching || typeLoading || typeFetching ? (
                      <Loader
                        loading={
                          isLoading || isFetching || typeLoading || typeFetching
                        }
                      />
                    ) : !isError || typeError ? (
                      <>
                        {renderdata.map((item, index) => (
                          <div key={index}>
                            <div className="wrap">
                              {item.map((innerItem, innerIndex) => {
                                return (
                                  <div key={innerIndex}>
                                    {innerIndex === 0 ? (
                                      <div className="top">
                                        <h4>{typeData[innerItem.type]}</h4>
                                      </div>
                                    ) : null}
                                    <div className="card">
                                      {/* <Link to={"/publications"}>
                                        <button
                                          style={{
                                            color: "#2b3513",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <b>Publications</b>
                                        </button>
                                      </Link> */}
                                      <div className="flex">
                                        <h3>{innerItem.name}</h3>
                                        <Link
                                          to={`/publications-details/${innerItem.id}`}
                                        >
                                          <OpenInNewIcon />
                                        </Link>
                                      </div>
                                      <p>
                                        {dateformatter(
                                          new Date(innerItem.created_at)
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <FormError>Can't Fetch Free Publications</FormError>
                    )}

                    <br />
                    <button>Next</button>
                    <br />

                    {/* <div className="top">
                      <h4>Manufacturers CEO Confidence Index (MCCI)</h4>
                    </div>
                    <div className="wrap">
                      {newPubData.map((item, index) => {
                        return (
                          <div className="card" key={index}>
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
                        );
                      })}
                    </div> */}

                    {/* <br />
                    <br />
                    <br />
                    <div>
                      <div className="top">
                        <h4>MAN News Magazine</h4>
                      </div>
                    </div> */}
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
    </>
  );
};

export default Publications;
