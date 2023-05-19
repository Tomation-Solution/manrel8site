import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";
import theme from "../../../Styles/theme/Theme";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewImageBanner from "../../NewImageBanner/NewImageBanner";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Subscribe from "../../Subscribe/Subscribe";
import Wall from "../../Wall/Wall";
// import { gallerydata } from "./GalleryData";
import backImage from "../../../images/new-images/InsightCardIMages (3).jpg";

import "./GalleryDetails.scss";
import { useQuery } from "react-query";
import { getGallery } from "../../../utils/csm-api-calls";
import Loader from "../../Loader/Loader";
import { FormError } from "../../NewEvents/FormComponents";

const GalleryDetails = () => {
  const { id } = useParams();

  const { isLoading, isError, isFetching, data } = useQuery(
    "all-gallery",
    getGallery,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  let renderdata = null;
  if (data) {
    renderdata = data.find((item) => item.id === Number(id));
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="gallery-details">
            <Subscribe />
            <NewNavBar />

            {renderdata ? (
              <NewImageBanner
                image={backImage}
                header={"Gallery"}
                details={[`${renderdata.name}`]}
              />
            ) : null}

            <div className="gallery-con">
              {isLoading || isFetching ? (
                <Loader loading={isLoading || isFetching} />
              ) : !isError ? (
                <div className="gallery-items">
                  {renderdata ? (
                    <>
                      {renderdata.gallery_images.map((item, index) => {
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
                    </>
                  ) : (
                    <FormError>Can't Fetch Gallery Data</FormError>
                  )}
                </div>
              ) : (
                <FormError>Can't Fetch Gallery Data</FormError>
              )}
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
