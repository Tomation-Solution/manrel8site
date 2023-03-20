import React, { useState, useEffect, useMemo } from "react";
import "./Article.scss";

import Manufacturing from "../../images/new-images/Manufacturing.png";
import ArtNature1 from "../../images/new-images/Manoffice.png";
import ArtNature2 from "../../images/new-images/PublicationImg.png";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
import { newPubData } from "../Publications/PublicationsData";
import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
import { newReportData } from "../Reports/ReportData";
import { newsdata } from "../News/NewsData";

function Article() {
  const [imageIndex, setImageIndex] = useState(0); // Set initial index to 0
  const images = useMemo(() => {
    return [Manufacturing, ArtNature1, ArtNature2];
  }, []);
  useEffect(() => {
    // Use setInterval to change the image every 5 seconds
    const interval = setInterval(() => {
      // Calculate the index of the next image, wrapping around to the start of the array if necessary
      const nextIndex = (imageIndex + 1) % images.length;

      // Update the imageIndex state with the next index
      setImageIndex(nextIndex);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [imageIndex, images]);
  return (
    <div className="article">
      <div className="news_main">
        <div className="cover">
          <div className="left">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="right">
            {/* <div className="top">
              <h2>News</h2>
            </div> */}
            <div className="wrap">
              {gallerydata[0] && (
                <div className="card" key={gallerydata[0].id}>
                  <button>Gallery</button>
                  <div className="flex">
                    <h3>{gallerydata[0].name}</h3>
                    <Link to={`/gallery-details/${gallerydata[0].id}`}>
                      <OpenInNewIcon />
                    </Link>
                  </div>
                </div>
              )}

              {newPubData[0] && (
                <div className="card" key={pubdata[0].id}>
                  <button>Publications</button>
                  <div className="flex">
                    <h3>{pubdata[0].name}</h3>
                    <Link to={`/publications-details/${pubdata[0].id}`}>
                      <OpenInNewIcon />
                    </Link>
                  </div>
                </div>
              )}

              {newReportData[0] && (
                <div className="card" key={reportdata[0].id}>
                  <button>Report</button>
                  <div className="flex">
                    <h3>{reportdata[0].name}</h3>
                    <Link to={`/report-details/${reportdata[0].id}`}>
                      <OpenInNewIcon />
                    </Link>
                  </div>
                </div>
              )}

              {newsdata[0] && (
                <div className="card" key={newsdata[0].id}>
                  <button>News</button>
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
