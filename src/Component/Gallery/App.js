import { ThemeProvider } from "@mui/system";
import React from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import "./Insmore.scss";
// import Articleimage from "../../images/new-images/InsightCardIMages (3).jpg";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image1 from "../../images/new-images/InsightCardIMages (1).jpg";
import Image2 from "../../images/new-images/InsightCardIMages (5).jpg";
import Image3 from "../../images/new-images/InsightCardIMages (4).jpg";
import Image4 from "../../images/new-images/InsightCardIMages (2).jpg";
import Image5 from "../../images/new-images/InsightCardIMages (3).jpg";
import { Link, useLocation } from "react-router-dom";
import Wall from "../../Component/Wall/Wall";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
// import { gallerydata } from "./GalleryDetails/GalleryData";
import NewNavBar from "../NewNavBar/NewNavBar";
import backImage from "../../images/new-images/InsightCardIMages (3).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import { useQuery } from "react-query";
import { getGallery } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import { useState } from "react";

/**
 * THIS IS BEING USED IN THE PUBLICATIONS, REPORTS, NEWS PAGES
 */
export const AboutList = [
  {
    image: Image1,
    title: "News",
    description:
      "Catch up on details of latest activities of the Association, press releases and position documents shared for your information purposes.",
    linkHead: "Proceed to News",
    location: "news",
  },
  {
    image: Image2,
    title: "Events & Trainings",
    description:
      "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels.",
    linkHead: "Proceed to Events & Trainings",
    location: "event-training",
  },
  {
    image: Image4,
    title: "Reports",
    description: "For all reports of our Annual General Meetings, Click here ",
    linkHead: "Proceed to Reports",
    location: "reports",
  },
  {
    image: Image5,
    title: "Gallery",
    description: "Explore photos of our events and various activities",
    linkHead: "Proceed to Gallery",
    location: "gallery",
  },
  {
    image: Image3,
    title: "Publication",
    description:
      "Gain access to our publications such as the Quarterly Manufacturers CEOs Confidence Index, MANNEWS Magazine and the Half Yearly Economic Review.",
    linkHead: "Proceed to Publication",
    location: "publications",
  },
];
export const InsightQuickNavigation = () => {
  const pageLocation = useLocation();
  return (
    <div className="sect_wrap">
      <div className="coverr">
        {AboutList.filter(
          (itemx) => itemx.location !== pageLocation.pathname.replace("/", "")
        ).map((item) => (
          <div className="card" key={item.title}>
            <img src={item.image} alt="" />
            <div className="text">
              <h2 style={{ color: "#2b3513" }}>{item.title}</h2>
              <p style={{ color: "#2b3513" }}>{item.description}</p>
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

  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
    pages.push(i);
  }

  const paginatedData = data?.slice(firstPostIndex, lastPostIndex);
  console.log({paginatedData, data})
  const handleAlbumClick = (id) => {
    window.location.href = `/gallery-details/${id}`;
  };
  // const albums = [
  //   { id: 1, title: 'Summer Vacation', imageUrl: '/images/summer-vacation.jpg' },
  //   { id: 2, title: 'Family Reunion', imageUrl: '/images/family-reunion.jpg' },
  //   { id: 3, title: 'Nature Walks', imageUrl: '/images/nature-walks.jpg' },
  //   { id: 4, title: 'City Lights', imageUrl: '/images/city-lights.jpg' },
  //   { id: 5, title: 'Beach Memories', imageUrl: '/images/beach-memories.jpg' },
  //   { id: 6, title: 'Winter Wonderland', imageUrl: '/images/winter-wonderland.jpg' },
  // ];
  return (
    <ThemeProvider theme={theme}>
      <div className="insight-more">
        <UIProvider>
          <Subscribe/>
          <NewNavBar/>

          <NewImageBanner
              image={backImage}
              header={"Gallery"}
              details={["View images of past events at MAN"]}
          />
          <div className="news_main">
            <div className="cover">
              {isLoading || isFetching ? (
                  <Loader loading={isLoading || isFetching}/>
              ) : !isError ? (
                  <>
                    <div className="album-gallery">
                      {paginatedData.map((album) => {
                        // Select a random image from the gallery_images array
                        const randomImage = album.gallery_images[Math.floor(Math.random() * album.gallery_images.length)].image;
                        return (
                            <div
                                key={album.id}
                                className="album"
                                onClick={() => handleAlbumClick(album.id)}
                            >
                              <div
                                  className="album-image"
                                  style={{backgroundImage: `url(${randomImage})`}}
                              >
                                <div className="image-stack"></div>
                              </div>
                              <div className="album-title">{album.name}</div>
                            </div>
                        );
                      })}
                    </div>
                    <div className="pagination-container">
                      <button
                          className="pagination-button"
                          onClick={() => {
                            if (currentPage <= 1) return;
                            setCurrentPage((oldState) => oldState - 1);
                          }}
                      >
                        Previous
                      </button>
                      <button
                          className="pagination-button"
                          onClick={() => {
                            if (currentPage >= pages?.length) return;
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

              <div className="left">
                <h2 className="gallery-title">Others</h2>
                <InsightQuickNavigation/>
              </div>
            </div>
          </div>
          <Wall/>
          <Footer/>
        </UIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
