import { ThemeProvider } from "@mui/system";
import React from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Articleimage from "../../images/new-images/AnnualReportImage.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Reports.scss";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
// import { newReportData } from "./ReportData";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (2).jpg";
import { useQuery } from "react-query";
import { eventAndMediaGet, getReports } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import { useState } from "react";

function App() {
  const { isLoading, isFetching, isError, data } = useQuery(
    "all-reports",
    getReports,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  const eventAndMediaResult = useQuery("event-and-media", eventAndMediaGet, {
    // select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
    pages.push(i);
  }

  const paginatedData = data?.slice(firstPostIndex, lastPostIndex);

  return (
    <ThemeProvider theme={theme}>
      <div className="insight">
        <UIProvider>
          <Subscribe />
          <NewNavBar />

          <NewImageBanner
            image={eventAndMediaResult?.data?.report_image || backImage}
            header={"Annual Reports"}
            details={["Read our latest reports."]}
          />

          <div className="news_main">
            <div className="cover">
              <div className="right">
                <div className="top">
                  <h2>Annual Reports</h2>
                </div>

                {isLoading || isFetching ? (
                  <Loader loading={isLoading || isFetching} />
                ) : !isError ? (
                  <div className="wrap">
                    {paginatedData.map((item, index) => (
                      <>
                        <div className="card" key={index}>
                          {/* <Link to={"/reports"}>
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>Reports</b>
                            </button>
                          </Link> */}
                          <div className="flex">
                            <h3>{item.name}</h3>
                            <Link to={`/report-details/${item.id}`}>
                              <OpenInNewIcon />
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                      className="bto"
                    >
                      <button
                        style={{ minWidth: "85px" }}
                        disabled={currentPage <= 1}
                        onClick={() => {
                          if (currentPage <= 1) return;

                          setCurrentPage((oldState) => oldState - 1);
                        }}
                      >
                        Previous
                      </button>
                      <button
                        style={{ minWidth: "85px" }}
                        disabled={currentPage >= pages?.length}
                        onClick={() => {
                          if (currentPage >= pages?.length) return;
                          setCurrentPage((oldState) => oldState + 1);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <FormError>Can't Fetch Reports Data</FormError>
                )}

                <div className="bto"></div>
              </div>
              <div className="left">
                <img
                  src={eventAndMediaResult?.data?.main_image || Articleimage}
                  alt=""
                />
                <InsightQuickNavigation />
              </div>
            </div>
          </div>

          <Wall />
          <Footer />
        </UIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
