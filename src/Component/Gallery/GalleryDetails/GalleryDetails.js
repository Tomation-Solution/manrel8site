import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";
import theme from "../../../Styles/theme/Theme";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Subscribe from "../../Subscribe/Subscribe";
import Wall from "../../Wall/Wall";
import { gallerydata } from "./GalleryData";

import "./GalleryDetails.scss";

const GalleryDetails = () => {
  const { id } = useParams();

  const renderdata = gallerydata.find((item) => item.id === id);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="gallery-details">
            <Subscribe />
            <NewNavBar />

            <div className="hero_Image">
              <div className="cover">
                <h1>{renderdata.name}</h1>
              </div>
            </div>

            <div className="gallery-con">
              {/* <p className="gallery-header">{renderdata.name}</p> */}

              <div className="gallery-items">
                {renderdata.image.map((item, index) => {
                  return (
                    <div className="gallery-item" key={index}>
                      <div className="top">
                        <img alt="" src={item.image} />
                      </div>

                      <div className="bottom">
                        <p>{item.caption}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Wall />
          <Footer />
        </UIProvider>
      </ThemeProvider>
    </div>
  );
};

export default GalleryDetails;
