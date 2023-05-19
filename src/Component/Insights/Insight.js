import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AboutList } from "../Gallery/App";
// import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
// import { newsdata } from "../News/NewsData";
// import { newPubData } from "../Publications/PublicationsData";
// import { newReportData } from "../Reports/ReportData";
import "../Gallery/Insmore.scss";
import Wall from "../Wall/Wall";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewNavBar from "../NewNavBar/NewNavBar";
import Articleimage from "../../images/new-images/NewHomeAllimg.png";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/ManInsightImg.jpg";
import { useEffect } from "react";
import {
  getFreePublication,
  getNews,
  getReports,
  getGallery,
} from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";

const Insight = () => {
  const [insightData, setInsightData] = useState(null);
  useEffect(() => {
    Promise.all([
      getGallery(),
      getNews(),
      getReports(),
      getFreePublication(),
    ]).then((res) => {
      const alldata = res.map((item) => {
        return { type: item?.message, data: item?.data[0] };
      });
      setInsightData(alldata);
    });
  }, []);

  return (
    <UIProvider>
      <Subscribe />
      <NewNavBar />
      <div className="insight-more">
        <NewImageBanner
          image={backImage}
          header={"Insight"}
          details={["Read our latest news, reports and publications."]}
        />
        <div className="news_main">
          <div className="cover">
            <div className="right">
              <div className="top">
                <h2>Insight</h2>
              </div>
              <div className="wrap">
                {!insightData ? (
                  <Loader loading={true} />
                ) : (
                  <>
                    {insightData.map((item, index) => {
                      return (
                        <div className="card" key={index}>
                          <Link
                            to={`/${
                              item.type === "free publications"
                                ? "publications"
                                : item.type
                            }`}
                          >
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>
                                {item.type === "free publications"
                                  ? "publications"
                                  : item.type}
                              </b>
                            </button>
                          </Link>

                          <div className="flex">
                            <h3>{item?.data.name}</h3>
                            {item.type === "free publications" ? (
                              <Link
                                to={`/publications-details/${item?.data.id}`}
                              >
                                <OpenInNewIcon />
                              </Link>
                            ) : (
                              <Link
                                to={`/${
                                  item.type === "reports" ? "report" : item.type
                                }-details/${item?.data.id}`}
                              >
                                <OpenInNewIcon />
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>

            <div className="left">
              <img
                className="img"
                src={Articleimage}
                alt=""
                height={"500px"}
                style={{ objectFit: "contain" }}
              />

              {/* <InsightQuickNavigation /> */}
            </div>
          </div>
        </div>

        <div className="insight-below">
          {AboutList.map((item) => (
            <div className="insight-below-item" key={item.title}>
              <img src={item.image} alt="" />
              <div className="text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {Object.keys(item).includes("location") ? (
                  <Link to={`/${item.location}`}>
                    <h3 style={{ fontWeight: 500 }}>
                      {item.linkHead} {">"}
                    </h3>
                  </Link>
                ) : (
                  <h3 style={{ fontWeight: 500 }}>
                    {item.linkHead} {">"}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default Insight;
