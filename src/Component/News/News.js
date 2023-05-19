import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Styles/theme/Theme";
import { UIProvider } from "../../Ui";
import "./News.scss";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import Subscribe from "../Subscribe/Subscribe";
// import { newsdata } from "./NewsData";
import { Link } from "react-router-dom";

import Articleimage from "../../images/new-images/InsightCardIMages (1).jpg";
import { InsightQuickNavigation } from "../Gallery/App";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (1).jpg";
import { useQuery } from "react-query";
import { getNews } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import { dateformatter } from "../../utils/date-formatter";

function News() {
  const { isLoading, isFetching, isError, data } = useQuery(
    "all-news",
    getNews,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="news">
          <Subscribe />
          <NewNavBar />

          <NewImageBanner
            image={backImage}
            header={"News"}
            details={["Read our latest news."]}
          />

          <div className="news_main">
            <div className="cover">
              <div className="right">
                <div className="top">
                  <h2>News</h2>
                </div>
                <div className="wrap">
                  {isLoading || isFetching ? (
                    <Loader loading={isLoading || isFetching} />
                  ) : !isError ? (
                    <>
                      {data.map((item) => {
                        return (
                          <div className="card" key={item.id}>
                            <Link to={"/news"}>
                              <button
                                style={{ color: "#2b3513", cursor: "pointer" }}
                              >
                                <b>News</b>
                              </button>
                            </Link>
                            <div className="flex">
                              <h3>{item.name}</h3>
                              <Link to={`/news-details/${item.id}`}>
                                <OpenInNewIcon />
                              </Link>
                            </div>
                            <p>{dateformatter(new Date(item.created_at))}</p>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <FormError>Can't Fetch News Data</FormError>
                  )}

                  {/* {newsdata.map((item) => {
                    return (
                      <div className="card" key={item.id}>
                        <Link to={"/news"}>
                          <button
                            style={{ color: "#2b3513", cursor: "pointer" }}
                          >
                            <b>News</b>
                          </button>
                        </Link>
                        <div className="flex">
                          <h3>{item.name}</h3>
                          <Link to={`/news-details/${item.id}`}>
                            <OpenInNewIcon />
                          </Link>
                        </div>
                        <p>{item.date}</p>
                      </div>
                    );
                  })} */}
                </div>
                <div className="bto"></div>
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
  );
}

export default News;
