import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector3.png";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/SectoralBackGroundImage.jpeg";
import { useQuery } from "react-query";
import { getMPDCLApi, getMPDCLPageApi } from "../../utils/api-calls2";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function Mpdcl() {
  const { isLoading, data } = useQuery("getMPDCLApi", getMPDCLApi);
  const { data: landingpageContent } = useQuery(
    "getMPDCLPageApi",
    getMPDCLPageApi
  );
  console.log({data, landingpageContent})
  const boardMembers = [
    {
      name: "Engr. Ibrahim Usman",
      position: "Board Chairman",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Alhaji Ali Madugu (mni)",
      position: "",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Chief John Aluya",
      position: "",
      imgSrc: "https://via.placeholder.com/150"
    },
    {
      name: "Engr. Chukwuemeka Nzewi",
      position: "",
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      name: "Engr. Reginald Odiah",
      position: "",
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      name: "Otunba Francis Meshioye",
      position: "",
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      name: "Mr Segun Ajayi-Kadir (mni)",
      position: "Director General MAN",
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      name: "Mr. Ambrose Oruche",
      position: "Board Secretary",
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      name: "Mr. Oweh O. Mba-Sam",
      position: "Ag. Managing Director",
      imgSrc: "https://via.placeholder.com/100"
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <Loader loading={isLoading} />
          <div className="sectoral">
            <Subscribe />
            <NewNavBar />
            <NewImageBanner
              image={backImage}
              header={
                "Manufacturers Power Development Company Limited (MPDCL)."
              }
            />
            <div className="sect-body">
              <div className="cover">
                <div className="about">
                  <h1 style={{color: "#2b3513", fontWeight: "bold"}}>About MPDCL</h1>
                  {landingpageContent?.who_we_are?.map((content, index) => (
                      <p style={{color: "#2b3513"}} key={index}>
                        {content}
                      </p>
                  ))}
                </div>

                <div className="objectives">
                  <h1>Our Objectives</h1>
                  <p className="obj-left-text">
                    To achieve this mandates, MPDCL provides various power supply interventions to cushion the unabated
                    power supply challenges which has been perennial and some of them are;
                  </p>
                  <div className="obj-items centered">
                    {landingpageContent?.our_objectives_items?.map(
                        (objective, index) => (
                          <div className="flex" key={index}>
                          <img src={Vector} alt="" />
                          <p>{objective}</p>
                        </div>
  
                        )
                    )}
                  </div>
                </div>
                <div className="corporate-thrust">
                  <h1>Corporate Thrust</h1>

                  <section className="vision">
                    <h2>Vision</h2>
                    <p>
                      To be manufacturers channel for energy adequacy advocacy and continuously promote initiatives
                      that would guarantee energy adequacy for manufacturing at all times through energy good
                      energy housekeeping, energy management and energy efficiency practices.
                    </p>
                  </section>

                  <section className="mission">
                    <h2>Mission</h2>
                    <p>
                      Engage with strategic partners that are leading energy service providers to facilitate
                      uninterrupted 24/7 power supply and energy management service, and collaborate with
                      experienced professional training institutions for resource availability for capacity building
                      for member industries.
                    </p>
                  </section>

                  <section className="core-values">
                    <h2>Core Values</h2>
                    <p>
                      Integrity and Courtesy in providing services to MAN member industries
                    </p>
                  </section>
                </div>
                <div className="board">
                  <h1>The Board</h1>
                  <div className="board-members">
                    {boardMembers.map((member, index) => (
                        <div key={index} className="board-member">
                          <div className="board-member__image">
                            {member.imgSrc ? (
                                <img src={member.imgSrc} alt={member.name}/>
                            ) : (
                                <div className="board-member__placeholder"></div>
                            )}
                          </div>
                          <div className="board-member__info">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                  <div className="objectives_link">
                  <h1 className="header">
                    To View Services
                    <span className="link-wrapper">
                      <Link to="/mpdcl-services" className="service-link">
                        Click Here
                      </Link>
                    </span>
                  </h1>
                </div>
                </div>

                <div className="contact-info">
                  <h1 className="" style={{color: "#2b3513"}}>
                    Contact Us
                  </h1>
                  <p style={{color: "#2b3513", fontSize: "18px"}}>
                    Manufacturers Power Development Company Limited (MPDCL)
                  </p>
                  <p
                      style={{
                        color: "#2b3513",
                        fontSize: "18px",
                        margin: "5px 0px",
                      }}
                  >
                    <span style={{fontWeight: 500, marginRight: "10px"}}>
                      Address:
                    </span>
                    Manufacturers Power Development Company Limited (MPDCL)
                  </p>
                  <p
                      style={{
                        color: "#2b3513",
                        fontSize: "18px",
                        margin: "5px 0px",
                      }}
                  >
                    <span style={{fontWeight: 500, marginRight: "10px"}}>
                      Phone:
                    </span>
                    0802 307 6531, 01-4542700, 01-4542701, 01-4542702
                  </p>
                  <p
                      style={{
                        color: "#2b3513",
                        fontSize: "18px",
                        margin: "5px 0px",
                      }}
                  >
                    <span style={{fontWeight: 500, marginRight: "10px"}}>
                      Email:
                    </span>
                    co-ordinator.mpdcl@manufacturersnigeria.org
                  </p>
                </div>
              </div>
            </div>
            <Wall/>
            <Footer/>
          </div>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default Mpdcl;
