import React, { useState, useEffect } from "react";
import "./Article.scss";
// import Articleimage1 from '../../images/div8.png'
// import Articleimage2 from '../../images/art (1).png'
// import Articleimage3 from '../../images/art (2).png'
// import Articleimage4 from '../../images/art (3).png'

import Manufacturing from "../../images/new-images/Manufacturing.png";
import ArtNature1 from "../../images/new-images/ArtNature1.png";
import ArtNature2 from "../../images/new-images/ArtNature2.png";
import ArtNature3 from "../../images/new-images/ArtNature3.png";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Article() {
  const [imageIndex, setImageIndex] = useState(0); // Set initial index to 0
  const images = [Manufacturing, ArtNature1, ArtNature2, ArtNature3];
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
              {[...Array(4)].map((item, i) => (
                <div className="card" key={1 + i}>
                  <button>Publication</button>
                  <div className="flex">
                    <h3>Manufacturing Outlook Q4 2022</h3>
                    <OpenInNewIcon />
                  </div>
                  <p>January 03, 2023</p>
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
