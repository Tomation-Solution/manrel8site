import React from "react";
import "./Article.scss";

import Manufacturing from "../../images/new-images/NewHomeInsightImg.jpeg";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
import { newPubData } from "../Publications/PublicationsData";
import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
import { newReportData } from "../Reports/ReportData";
import { newsdata } from "../News/NewsData";

function Article() {
  return (
    <div className="article">
      <div className="news_main">
        <div className="cover">
          <div className="left">
            <img src={Manufacturing} alt="" />
          </div>
          <div className="right">
            <h1 style={{ color: "#2b3513", marginBottom: "20px" }}>
              Latest Updates
            </h1>
            <div className="wrap">
              {gallerydata[0] && (
                <div className="card">
                  <Link to={"/gallery"}>
                    <button>Gallery</button>
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
                <div className="card">
                  <Link to={"/publications"}>
                    <button>Publications</button>
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
                <div className="card">
                  <Link to={"/reports"}>
                    <button>Report</button>
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
                <div className="card">
                  <Link to={"/news"}>
                    <button>News</button>
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
        </div>
      </div>
    </div>
  );
}

export default Article;
