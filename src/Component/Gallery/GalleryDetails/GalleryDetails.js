import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import theme from "../../../Styles/theme/Theme";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewImageBanner from "../../NewImageBanner/NewImageBanner";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Subscribe from "../../Subscribe/Subscribe";
import Wall from "../../Wall/Wall";
import backImage from "../../../images/new-images/InsightCardIMages (3).jpg";

import "./GalleryDetails.scss";
import { useQuery } from "react-query";
import { getGallery } from "../../../utils/csm-api-calls";
import Loader from "../../Loader/Loader";
import { FormError } from "../../NewEvents/FormComponents";

const GalleryDetails = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const totalImages = renderdata?.gallery_images.length || 0;
  const totalPages = Math.ceil(totalImages / itemsPerPage);

  const paginatedImages = renderdata?.gallery_images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="gallery-details">
            <Subscribe />
            <NewNavBar />

            {renderdata && (
              <NewImageBanner
                image={backImage}
                header={"Gallery"}
                details={[`${renderdata.name}`]}
              />
            )}

            <div className="gallery-con">
              {isLoading || isFetching ? (
                <Loader loading={isLoading || isFetching} />
              ) : !isError ? (
                renderdata ? (
                  <>
                    <div className="gallery-items">
                      {paginatedImages.map((item, index) => (
                        <div className="gallery-item" key={index}>
                          <div className="top">
                            <img alt="" src={item.image} />
                          </div>
                          <div className="bottom">
                            <p>{item.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <div className="pagination">
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={i + 1 === currentPage ? "active" : ""}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <FormError>Can't Fetch Gallery Data</FormError>
                )
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
