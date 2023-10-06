import React from "react";
import { Link } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import "./MRCServices.scss";
import backImage from "../../images/Group 61.png";
import { useQuery } from "react-query";
import { getMrcApi } from "../../utils/api-calls2";

const MRCServices = () => {
  const { data } = useQuery("getMrcApi", getMrcApi);
  return (
    <div className="mrc-services">
      <UIProvider>
        <Subscribe />
        <NewNavBar />

        <NewImageBanner
          image={backImage}
          header={"Manufacturers Resource Centre (MRC)"}
          details={[
            "The Manufacturers Resource Centre is the Business Solution Arm of Manufacturers Association of Nigeria (MAN). The Manufacturers Resource Centre prides herself as an entity dedicated to proffering Business Solutions to MAN Members thus develop their Businesses, increase Market share and Production Excellence.",
          ]}
        />

        <div className="who-are">
          <h1 className="header">
            Our <span>Services</span>
          </h1>
          <p style={{ color: "#2b3513" }}>
            Manufacturers Resource Centre is the only professional service
            organization structured to render business solutions for the
            Manufacturing sector and affiliates. With us is a pool of
            well-seasoned consultants and added service outfits, geared at
            delivering solutions with high level of expertise and at very
            subsidized rates.
          </p>
          <div className="text-btn">
            <span>We are "... the Manufacturers’ Solution Hub"</span>
            {/* <Link to={"/mrc-contact"}>
              <button>Contact Us</button>
            </Link> */}
          </div>
        </div>

        {data?.map((d, index) => (
          <div className="objectives" key={index}>
            <h1 className="header">
              <span>{d.name}</span>
            </h1>

            <p style={{ color: "#2b3513" }}>
              {d.description}
              {/* With our brand, expertise and business leverages, valuable in
                growing turnover volume, company customer base and production
                capacity, companies engage us as their Business Consultant to aid
                them better their business strategizes and attain targeted business
                growth. In addition, micro manufacturers enjoy discounted fee. */}
            </p>
            <p> {d.small_text}</p>
            {d.items.map((item, i) => (
              <div className="obj-item" key={i}>
                <div></div>
                <span>{item}</span>
              </div>
            ))}
            {/* <div className="who-are">
              <div className="text-btn">
                <span style={{ color: "#2b3513" }}>
                  {d.small_text}
                </span>
              </div>
          </div> */}
          </div>
        ))}

        <div className="who-are">
          <h1 className="header">
            We <span>Transform Businesses</span>
          </h1>
          <p style={{ color: "#2b3513" }}>
            Through our services we advice and aid manufacturers in the growth
            and development of their businesses. We are constantly on the look
            out for rewarding opportunities to ensure their enterprise thrives
            and is sustainable.
          </p>
          <div className="text-btn">
            <span style={{ color: "#2b3513" }}>
              Let us help you "...become a major Industry Player"
            </span>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MRCServices;
