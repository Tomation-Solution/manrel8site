import { ThemeProvider } from "@mui/system";
import React from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import "./Insmore.scss";
import Articleimage from "../../images/new-images/GalLinkImg (4).png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image1 from "../../images/new-images/GalLinkImg (1).png";
import Image2 from "../../images/new-images/GalLinkImg (2).png";
import Image3 from "../../images/new-images/PublicationsDropImg.png";
import Image4 from "../../images/new-images/GalLinkImg (3).png";
import Image5 from "../../images/new-images/GalLinkImg (4).png";
import { Link, useLocation } from "react-router-dom";
import Wall from "../../Component/Wall/Wall";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import { gallerydata } from "./GalleryDetails/GalleryData";
import NewNavBar from "../NewNavBar/NewNavBar";

/**
 * THIS IS BEING USED IN THE PUBLICATIONS, REPORTS, NEWS PAGES
 */
export const AboutList = [
  {
    image: Image1,
    title: "News",
    description:
      "Catch up on details of latest activities of the association, press releases and position documents shared for your information purposes.",
    linkHead: "Proccee to see News",
    location: "news",
  },
  {
    image: Image2,
    title: "Events & Trainings",
    description:
      "Conferences, seminars, workshops, certified courses and more for manufacturers at all levels in every role.",
    linkHead: "Proceed to see Events & Trainings",
    location: "event-training",
  },
  {
    image: Image4,
    title: "Reports",
    description: "For all reports of our Annual General Meetings, Click here ",
    linkHead: "Proceed to see Reports",
    location: "reports",
  },
  {
    image: Image5,
    title: "Gallery",
    description: "Explore photos of our events and various activities",
    linkHead: "Proceed to see Gallery",
    location: "gallery",
  },
  {
    image: Image3,
    title: "Publication",
    description:
      "Gain access to our publications such as the Quarterly Manufacturers CEOs Confidence Index, MANNEWS Magazine and the Half Yearly Economic Review.",
    linkHead: "Proceed to see Publication",
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
  return (
    <ThemeProvider theme={theme}>
      <div className="insight-more">
        <UIProvider>
          <Subscribe />
          <NewNavBar />
          <div className="hero_Image">
            <div className="cover">
              <h1>Gallery</h1>
              <p>view images of past events at MAN</p>
            </div>
          </div>
          <div className="news_main">
            <div className="cover">
              <div className="right">
                <div className="top">
                  <h2>Gallery</h2>
                </div>
                <div className="wrap">
                  {gallerydata.map((item) => (
                    <div className="card" key={item.id}>
                      <Link to={"/gallery"}>
                        <button style={{ color: "#2b3513", cursor: "pointer" }}>
                          <b>Gallery</b>
                        </button>
                      </Link>
                      <div className="flex">
                        <h3>{item.name}</h3>
                        <Link to={`/gallery-details/${item.id}`}>
                          <OpenInNewIcon />
                        </Link>
                      </div>
                      {/* <p>January 03, 2023</p> */}
                    </div>
                  ))}
                </div>
              </div>

              <div className="left">
                <img className="img" src={Articleimage} alt="" />
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
