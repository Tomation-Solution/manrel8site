import React, { useState, useEffect, useMemo } from "react";
import "./Article.scss";

import Manufacturing from "../../images/new-images/Manufacturing.png";
import ArtNature1 from "../../images/new-images/ArtNature1.png";
import ArtNature2 from "../../images/new-images/ArtNature2.png";
import ArtNature3 from "../../images/new-images/ArtNature3.png";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { newsdata } from "../News/NewsData";
import { Link } from "react-router-dom";

function Article() {
  const [imageIndex, setImageIndex] = useState(0); // Set initial index to 0
  const images = useMemo(() => {
    return [Manufacturing, ArtNature1, ArtNature2, ArtNature3];
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
            <div className="top">
              <h2>News</h2>
            </div>
            <div className="wrap">
              {newsdata.map((item) => (
                <div className="card" key={item.id}>
                  <button>News</button>
                  <div className="flex">
                    <h3>{item.name}</h3>
                    <Link to={`/news-details/${item.id}`}>
                      <OpenInNewIcon />
                    </Link>
                  </div>
                  <p>{item?.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
