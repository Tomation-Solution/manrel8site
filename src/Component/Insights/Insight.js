import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
// import { newsdata } from "../News/NewsData";
// import { newPubData } from "../Publications/PublicationsData";
// import { newReportData } from "../Reports/ReportData";
import "../Gallery/Insmore.scss";
import Wall from "../Wall/Wall";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewNavBar from "../NewNavBar/NewNavBar";
import Articleimage from "../../images/new-images/NewHomeAllimg.png";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/ManInsightImg.jpg";
import { useEffect } from "react";
import {
  getFreePublication,
  getNews,
  getReports,
  getGallery,
  eventAndMediaGet,
} from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";

// Now Media/Event
const Insight = () => {
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
    <UIProvider>
      <Subscribe />
      <NewNavBar />
      <div className="insight-more">
        <NewImageBanner
          image={eventAndMediaResult?.data?.banner_image || backImage}
          header={"Media/Event"}
          details={["Read our latest news, reports and publications."]}
        />
        <div className="news_main">
          <div className="cover">
            <div className="right">
              <div className="top">
                <h2>Media/Event</h2>
              </div>
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
                              item?.type === "free publications"
                                ? "publications"
                                : item?.type
                            }`}
                          >
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>
                                {item?.type === "free publications"
                                  ? "publications"
                                  : item?.type}
                              </b>
                            </button>
                          </Link>

                          <div className="flex">
                            <h3>{item?.data?.name}</h3>
                            {item.type === "free publications" ? (
                              <Link
                                to={`/publications-details/${item?.data?.id}`}
                              >
                                <OpenInNewIcon />
                              </Link>
                            ) : (
                              <Link
                                to={`/${
                                  item.type === "reports"
                                    ? "report"
                                    : item?.type
                                }-details/${item?.data?.id}`}
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

            <div className="left">
              <img
                className="img"
                src={eventAndMediaResult?.data?.main_image || Articleimage}
                alt=""
                height={"500px"}
                style={{ objectFit: "cover", aspectRatio: "20/5" }}
              />

              {/* <InsightQuickNavigation /> */}
            </div>
          </div>
        </div>

        <div className="insight-below">
          {AboutList.map((item) => (
            <div className="insight-below-item" key={item.title}>
              <img src={item.image} alt="" />
              <div className="text">
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                {Object.keys(item).includes("location") ? (
                  <Link to={`/${item.location}`}>
                    <h3 style={{ fontWeight: 500 }}>
                      {item.linkHead} {">"}
                    </h3>
                  </Link>
                ) : (
                  <h3 style={{ fontWeight: 500 }}>
                    {item.linkHead} {">"}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default Insight;
