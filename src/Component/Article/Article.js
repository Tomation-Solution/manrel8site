import React, { useEffect, useState } from "react";
import "./Article.scss";
// import Manufacturing from "../../images/new-images/NewHomeInsightImg.jpeg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

import {
  getFreePublication,
  getNews,
  getReports,
  getGallery,
} from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";

function Article({ data }) {
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
    <div className="article">
      <div className="news_main">
        <div className="cover">
          <div className="left">
            <img src={data.slider_image3} alt="" />
          </div>
          <div className="right">
            <h1 style={{ color: "#2b3513", marginBottom: "20px" }}>
              Latest Updates
            </h1>
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
                            <Link to={`/publications-details/${item?.data.id}`}>
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
        </div>
      </div>
    </div>
  );
}

export default Article;
