import { ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import NavBar from "../../Component/NavBar/NavBar";
import "./Insmore.scss";
import Articleimage from "../../images/new-images/PublicationImg.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image1 from "../../images/new-images/GalLinkImg (1).png";
import Image2 from "../../images/new-images/GalLinkImg (2).png";
import Image4 from "../../images/new-images/GalLinkImg (3).png";
import Image5 from "../../images/new-images/GalLinkImg (4).png";
import { Link } from "react-router-dom";
import Wall from "../../Component/Wall/Wall";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import { gallerydata } from "./GalleryDetails/GalleryData";

function App() {
  const AboutList = [
    {
      image: Image1,
      title: "News",
      description:
        "Find reports and data from ABAs research, as well as analysis of banking industry trends.",
      linkHead: "Proccee to see Pubications",
      location: "publications",
    },
    {
      image: Image2,
      title: "Information Bank",
      description:
        "Keep current on trends in banking and the issues affecting our industry, with email bulletins for ABA members tailored to your interests.",
      linkHead: "Proceed to see Information Bank",
    },
    {
      image: Image4,
      title: "Reports",
      description:
        "MAN promotes the interest of manufacturers by deepening its advocacy and partnership with national and international economic actors in Government, Organized Private Sector,",
      linkHead: "Proceed to see Reports",
      location: "reports",
    },
    {
      image: Image5,
      title: "Gallery",
      description: "ABAs flagship magazine.",
      linkHead: "Proceed to see Gallery",
      location: "gallery",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="insight-more">
        <UIProvider>
          <Subscribe />
          <NavBar location="insight" />
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
                      <button>Gallery</button>
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
                <div className="sect_wrap">
                  <div className="coverr">
                    {AboutList.map((item) => (
                      <div className="card" key={item.title}>
                        <img src={item.image} alt="" />
                        <div className="text">
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                          {Object.keys(item).includes("location") ? (
                            <Link to={`/${item.location}`}>
                              <h3 style={{ fontWeight: 400 }}>
                                {item.linkHead} {">"}
                              </h3>
                            </Link>
                          ) : (
                            <h3 style={{ fontWeight: 400 }}>
                              {item.linkHead} {">"}
                            </h3>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
