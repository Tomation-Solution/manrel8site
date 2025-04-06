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
function Mpdcl() {
  const { isLoading, data } = useQuery("getMPDCLApi", getMPDCLApi);
  const { data: landingpageContent } = useQuery(
    "getMPDCLPageApi",
    getMPDCLPageApi
  );

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
                  <h1 style={{ color: "#2b3513" }}>Who We Are</h1>
                  {landingpageContent?.who_we_are?.map((d, index) => (
                    <p style={{ color: "#2b3513" }} key={index}>
                      {d}
                    </p>
                  ))}

                  {/* <p style={{ color: "#2b3513" }}>
                    MPDCL also assist power project developers’ to access
                    members for engagement in various power supply services
                    while also supporting members’ to transit from fossil fuel
                    power supply sources to environmental friendly sources like
                    renewable energy which would reduce their carbon foot print
                    to embrace the new world order of smart and green
                    manufacturing by deploying environmental friendly
                    technology.
                  </p> */}
                </div>
                <div className="objectives">
                  <h1>Our Objectives</h1>
                  <p className="obj-left-text">
                    {landingpageContent?.our_objectives_header}
                  </p>
                  <div className="obj-items centered">
                    {landingpageContent?.our_objectives_items?.map(
                      (d, index) => (
                        <div className="flex" key={index}>
                          <img src={Vector} alt="" />
                          <p>
                            {/* Initiatives and programmes that encourages members to
                        improve on good energy housekeeping and energy
                        management practices through energy efficiency as a way
                        of conserving power and be more cost effective. */}
                            {d}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <h1 className="service-header">
                  The services below are offered by Manufacturers Power
                  Development Company Limited (MPDCL).
                </h1>
                <h2
                  style={{
                    width: "100%",
                    margin: "10px 0px",
                    textAlign: "center",
                    color: "#2b3513",
                  }}
                >
                  Power Facilitation Activities
                </h2>
                <div className="wrap-g">
                  {data
                    ?.sort((a, b) => a.id - b.id)
                    ?.filter((d) => d.type === "POWER_FACILITATION")
                    .map((item) => (
                      <div className="card" key={item.id}>
                        <div className="flex">
                          <img src={Vector} alt="" />
                          <h2 style={{ color: "#2b3513" }}>{item.header}</h2>
                        </div>
                        <p>{item.description}</p>
                        <img className="main-img" src={item.image} alt="" />
                      </div>
                    ))}
                </div>
                <h1 className="service-header" style={{ color: "#2b3513" }}>
                  Renewable Energy Service and Members Decarbonization
                  Initiatives
                </h1>
                <img
                  alt=""
                  src={landingpageContent?.renewable_image}
                  style={{
                    marginBottom: "30px",
                    width: "100%",
                    height: "50vh",
                    objectFit: "cover",
                  }}
                />
                {landingpageContent?.renewable_desc?.map((d, index) => (
                  <p style={{ color: "#2b3513" }} key={index}>
                    {d}{" "}
                  </p>
                ))}

                <div className="thrust" style={{ color: "#2b3513" }}>
                  {/* {landingpageContent?.renewable_items?.map((d, index) => (
                    <>
                      <h3>{d.header}</h3>

                      <p style={{ color: "#2b3513" }}>{d.description}</p>
                    </>
                  ))} */}

                  {/* <h3 style={{ color: "#2b3513" }}>
                    Human Capacity Building Programmes
                  </h3>

                  <p style={{ color: "#2b3513" }}>
                    Good energy and electricity housekeeping leads to energy
                    efficiency. To be up to speed with the latest technologies,
                    the need to close the gaps that is creating poor energy
                    management has become imperative especially now that energy
                    cost is hitting the roof. MPDCL is therefore supporting
                    member industries with training programmes in partnership
                    with leading training institutions and private entities.
                  </p>

                  <p style={{ color: "#2b3513" }}>
                    The trainings are structured to attain in-house quality
                    service delivery in relevant engineering, manufacturing or
                    production. The programmes will be supported with annual
                    training calendars with provision for in-plant training with
                    the following partners;
                  </p> */}
                </div>
                <div className="wrap-g">
                  {data
                    ?.filter(
                      (d) =>
                        d.type === "RENEWABLE_ENERGY" || d.type === "OTHERS"
                    )
                    .map((item) => (
                      <div className="card" key={item.id}>
                        <div className="flex">
                          <img src={Vector} alt="" />
                          <h2>{item.header}</h2>
                        </div>
                        <p>{item.description}</p>
                        <img className="main-img" src={item.image} alt="" />
                      </div>
                    ))}
                </div>
                <div className="contact-info">
                  <h1 className="" style={{ color: "#2b3513" }}>
                    Contact Us
                  </h1>
                  <p style={{ color: "#2b3513", fontSize: "18px" }}>
                    Manufacturers Power Development Company Limited (MPDCL)
                  </p>
                  <p
                    style={{
                      color: "#2b3513",
                      fontSize: "18px",
                      margin: "5px 0px",
                    }}
                  >
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
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
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
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
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
                      Email:
                    </span>
                    co-ordinator.mpdcl@manufacturersnigeria.org
                  </p>
                </div>
              </div>
            </div>
            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default Mpdcl;
