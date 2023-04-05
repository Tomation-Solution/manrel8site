import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AboutList } from "../Gallery/App";
import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
import "../Gallery/Insmore.scss";
import Wall from "../Wall/Wall";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewNavBar from "../NewNavBar/NewNavBar";
import Articleimage from "../../images/new-images/NewHomeAllimg.png";
import { UIProvider } from "../../Ui";
import { newsdata } from "../News/NewsData";
import { newPubData } from "../Publications/PublicationsData";
import { newReportData } from "../Reports/ReportData";
import Subscribe from "../Subscribe/Subscribe";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/ManInsightImg.jpg";

const Insight = () => {
  return (
    <UIProvider>
      <Subscribe />
      <NewNavBar />
      <div className="insight-more">
        <NewImageBanner
          image={backImage}
          header={"Insight"}
          details={[
            "Read our latest reports, news, publications and view our gallery.",
          ]}
        />
        <div className="news_main">
          <div className="cover">
            <div className="right">
              <div className="top">
                <h2>Insight</h2>
              </div>
              <div className="wrap">
                {gallerydata[0] && (
                  <div className="card" key={gallerydata[0].id}>
                    <Link to={"/gallery"}>
                      <button style={{ color: "#2b3513", cursor: "pointer" }}>
                        <b>Gallery</b>
                      </button>
                    </Link>

                    <div className="flex">
                      <h3>{gallerydata[0].name}</h3>
                      <Link to={`/gallery-details/${gallerydata[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newPubData[0] && (
                  <div className="card" key={newPubData[0].id}>
                    <Link to={"/publications"}>
                      <button style={{ color: "#2b3513", cursor: "pointer" }}>
                        <b>Publications</b>
                      </button>
                    </Link>

                    <div className="flex">
                      <h3>{newPubData[0].name}</h3>
                      <Link to={`/publications-details/${newPubData[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newReportData[0] && (
                  <div className="card" key={newReportData[0].id}>
                    <Link to={"/reports"}>
                      <button style={{ color: "#2b3513", cursor: "pointer" }}>
                        <b>Report</b>
                      </button>
                    </Link>

                    <div className="flex">
                      <h3>{newReportData[0].name}</h3>
                      <Link to={`/report-details/${newReportData[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newsdata[0] && (
                  <div className="card" key={newsdata[0].id}>
                    <Link to="/news">
                      <button style={{ color: "#2b3513", cursor: "pointer" }}>
                        <b>News</b>
                      </button>
                    </Link>

                    <div className="flex">
                      <h3>{newsdata[0].name}</h3>
                      <Link to={`/news-details/${newsdata[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
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
