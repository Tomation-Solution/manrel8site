import React from "react";
// import "./SingleNews.scss";
import "../Reports/ReportsDetails.scss";

import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import { Link, useParams } from "react-router-dom";
import { strategicNews } from "./SingleNewsData";
import ReportsPreview from "../Reports/ReportsPreview/ReportsPreview";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/InsightCardIMages (1).jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SingleNews = () => {
  const { id } = useParams();

  const renderdata = strategicNews.find((item) => item.id === id);

  const otherPub = strategicNews.filter((item) => item.id !== id);

  return (
    <UIProvider>
      <div className="publications-details">
        <Subscribe />
        <NewNavBar />

        <NewImageBanner
          image={backImage}
          header={"Special Strategic Unit News Details"}
          details={[`${renderdata.title}`]}
        />

        <div className="news_main">
          <div className="cover">
            {renderdata && (
              <div className="left">
                <ReportsPreview isImage={false} render_data={renderdata} />
              </div>
            )}

            <div className="right">
              <h2>Other Special Strategic Units News</h2>
              <div className="wrap">
                {otherPub.map((item) => (
                  <div className="card" key={item.id}>
                    <div className="flex">
                      <h3>{item.name}</h3>
                      <Link to={`/single-news/${item.id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                    <p>{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Wall />
        <Footer />
      </div>
    </UIProvider>
  );
};

export default SingleNews;
