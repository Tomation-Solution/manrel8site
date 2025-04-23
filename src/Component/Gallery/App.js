import { ThemeProvider } from "@mui/system";
import React, { useEffect, useMemo } from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import "./Insmore.scss";
import Articleimage from "../../images/new-images/InsightCardIMages (3).jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link, useLocation } from "react-router-dom";
import Wall from "../../Component/Wall/Wall";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
// import { gallerydata } from "./GalleryDetails/GalleryData";
import NewNavBar from "../NewNavBar/NewNavBar";
import backImage from "../../images/new-images/InsightCardIMages (3).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import { useQuery } from "react-query";
import { eventAndMediaGet, getGallery } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import { useState } from "react";

/**
 * THIS IS BEING USED IN THE PUBLICATIONS, REPORTS, NEWS PAGES
 */

export const InsightQuickNavigation = () => {
  const pageLocation = useLocation();
  const eventAndMediaResult = useQuery("event-and-media", eventAndMediaGet, {
    // select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  const AboutList = useMemo(() => {
    const data = eventAndMediaResult.data;

    if (!data) return [];

    return [
      {
        image: data?.news_image,
        title: data?.news_title,
        description: data?.news_description,
        linkHead: data?.news_link_text,
        location: "news",
      },
      {
        image: data?.event_image,
        title: data?.event_title,
        description: data?.event_description,
        linkHead: data?.event_link_text,
        location: "event-training",
      },
      {
        image: data?.report_image,
        title: data?.report_title,
        description: data?.report_description,
        linkHead: data?.report_link_text,
        location: "reports",
      },
      {
        image: data?.gallery_image,
        title: data?.gallery_title,
        description: data?.gallery_description,
        linkHead: data?.gallery_link_text,
        location: "gallery",
      },
      {
        image: data?.publication_image,
        title: data?.publication_title,
        description: data?.publication_description,
        linkHead: data?.publication_link_text,
        location: "publications",
      },
    ];
  }, [eventAndMediaResult.data]);
  return (
    <div className="sect_wrap">
      <div className="coverr">
        {AboutList.filter(
          (itemx) => itemx.location !== pageLocation.pathname.replace("/", "")
        )?.map((item) => (
          <div className="card" key={item.title}>
            <img src={item.image} alt="" />
            <div className="text">
              <h2 style={{ color: "#2b3513" }}>{item.title}</h2>
              <p
                style={{ color: "#2b3513" }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
              {Object.keys(item).includes("location") ? (
                <Link to={`/${item.location}`} style={{ color: "#63c1cf" }}>
                  <h3 style={{ fontWeight: 400, color: "#63c1cf" }}>
                    {item.linkHead} {">"}
                  </h3>
                </Link>
              ) : (
                <h3 style={{ fontWeight: 400, color: "#63c1cf" }}>
                  {item.linkHead} {">"}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-gallery",
    getGallery,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  const eventAndMediaResult = useQuery("event-and-media", eventAndMediaGet, {
    // select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [pages, setPages] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
      temp.push(i);
    }

    setPages(temp);
  }, [data?.length, postsPerPage]);

  useEffect(() => {
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    setPaginatedData(data?.slice(firstPostIndex, lastPostIndex));
  }, [currentPage, data, postsPerPage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="insight-more">
        <UIProvider>
          <Subscribe />
          <NewNavBar />

          <NewImageBanner
            image={eventAndMediaResult?.data?.gallery_image || backImage}
            header={"Gallery"}
            details={["View images of past events at MAN"]}
          />
          <div className="news_main">
            <div className="cover">
              <div className="right">
                <div className="top">
                  <h2>Gallery</h2>
                </div>

                {isLoading || isFetching ? (
                  <Loader loading={isLoading || isFetching} />
                ) : !isError ? (
                  <>
                    <div className="wrap">
                      {paginatedData?.map((item) => (
                        <div className="card" key={item.id}>
                          {/* <Link to={"/gallery"}>
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>Gallery</b>
                            </button>
                          </Link> */}
                          <div className="flex">
                            <h3>{item.name}</h3>
                            <Link to={`/gallery-details/${item.id}`}>
                              <OpenInNewIcon />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                      className="bto"
                    >
                      <button
                        style={{ minWidth: "85px" }}
                        disabled={currentPage <= 1}
                        onClick={() => {
                          setCurrentPage((oldState) => oldState - 1);
                        }}
                      >
                        Previous
                      </button>
                      <button
                        style={{ minWidth: "85px" }}
                        disabled={currentPage >= pages?.length}
                        onClick={() => {
                          setCurrentPage((oldState) => oldState + 1);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </>
                ) : (
                  <FormError>Can't Fetch Gallery Data</FormError>
                )}
              </div>

              <div className="left">
                <img
                  src={eventAndMediaResult?.data?.main_image || Articleimage}
                  alt=""
                />
                <InsightQuickNavigation />
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </UIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
