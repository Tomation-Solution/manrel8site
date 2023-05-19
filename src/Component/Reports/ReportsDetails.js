import { ThemeProvider } from "@emotion/react";
import React from "react";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import theme from "../../Styles/theme/Theme";

import "./ReportsDetails.scss";

import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Link, useParams } from "react-router-dom";
// import { newReportData } from "./ReportData";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (2).jpg";
import ReportsPreview from "./ReportsPreview/ReportsPreview";
import { useQuery } from "react-query";
import { getReports } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";

const ReportsDetails = () => {
  const { id } = useParams();

  const { isLoading, isFetching, isError, data } = useQuery(
    "all-reports",
    getReports,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  let renderdata = null;
  let otherPub = null;

  if (data) {
    renderdata = data.find((item) => item.id === Number(id));

    otherPub = data.filter((item) => item.id !== Number(id));
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications-details">
            <Subscribe />
            <NewNavBar />

            {renderdata ? (
              <NewImageBanner
                image={backImage}
                header={"Report Details"}
                details={[`${renderdata.title}`]}
              />
            ) : null}

            <div className="news_main">
              <div className="cover">
                {isLoading || isFetching ? (
                  <Loader loading={isLoading || isFetching} />
                ) : !isError ? (
                  <>
                    {renderdata ? (
                      <div className="left">
                        <ReportsPreview
                          isImage={true}
                          no_title={false}
                          render_data={renderdata}
                        />
                      </div>
                    ) : (
                      <FormError>Can't Fetch Reports Details</FormError>
                    )}
                  </>
                ) : (
                  <FormError>Can't Fetch Reports Details</FormError>
                )}

                {otherPub ? (
                  <div className="right">
                    <h2>Other Annual Reports</h2>
                    <div className="wrap">
                      {otherPub.map((item) => (
                        <div className="card" key={item.id}>
                          <Link to={"/reports"}>
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>Report</b>
                            </button>
                          </Link>
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
                ) : null}
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
