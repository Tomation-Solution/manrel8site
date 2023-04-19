import React from "react";
import { Link } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import backImage from "../../images/Group 61.png";

import "./NewMRC.scss";

const NewMRC = () => {
  return (
    <div className="new-mrc">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <NewImageBanner
          image={backImage}
          header={"Manufacturers Resource Centre (MRC)"}
        />
        <div className="who-are">
          <h1 className="header">
            This is <span>Who We Are</span>
          </h1>
          <p style={{ color: "#2b3513" }}>
            The Manufacturers Resource Centre is the Business Solution Arm of
            Manufacturers Association of Nigeria (MAN). The Manufacturers
            Resource Centre prides herself as an entity dedicated to proffering
            Business Solutions to MAN Members thus develop their Businesses,
            increase Market share and Production Excellence.
          </p>
          <div className="text-btn">
            <span style={{ color: "#2b3513" }}>
              "Our Success is measured by the benefits of our clients"
            </span>
            <Link to={"/mrc-contact"}>
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            Our <span>Objectives</span>
          </h1>
          <div className="obj-item">
            <div></div>
            <span style={{ color: "#2b3513" }}>
              Aid our Manufacturers expand their market reach beyond our shores.
            </span>
          </div>
          <div className="obj-item">
            <div></div>
            <span style={{ color: "#2b3513" }}>
              Proffer current manufacturing solutions to manufacturers in the
              areas of Information Technology, Technology, Research &
              Development etc.
            </span>
          </div>
          <div className="obj-item">
            <div></div>
            <span style={{ color: "#2b3513" }}>
              Using Training, Business Support and Business Advisory as tools in
              achieving our purpose of aiding Manufacturers devise Solutions for
              Growth and Development.
            </span>
          </div>
          <div className="obj-item">
            <div></div>
            <span style={{ color: "#2b3513" }}>
              Build and increase Professional Capacity and Skills.
            </span>
          </div>
        </div>
        <div className="cards">
          <div className="card" style={{ borderTop: "2px solid aqua" }}>
            <div style={{ backgroundColor: "aqua" }}></div>
            <h1 style={{ color: "aqua" }}>Business Development Services</h1>
            <p style={{ color: "#2b3513" }}>
              Identify possible problems affecting SME‘s by preparing a detailed
              technical due diligence report through review of their operations
            </p>
          </div>

          <div className="card" style={{ borderTop: "2px solid #E36159" }}>
            <div style={{ backgroundColor: "#E36159" }}></div>
            <h1 style={{ color: "#E36159" }}>Business Information Services</h1>
            <p style={{ color: "#2b3513" }}>
              Sourcing of raw materials, Machinery and equipment, Markets, Model
              business profiles etc
            </p>
          </div>

          <div className="card" style={{ borderTop: "2px solid #2BAAB1" }}>
            <div style={{ backgroundColor: "#2BAAB1" }}></div>
            <h1 style={{ color: "#2BAAB1" }}>Economic Research and Analysis</h1>
            <p style={{ color: "#2b3513" }}>
              Provision of Economic research and analysis for manufacturers,
              government and the organized private sector
            </p>
          </div>
          <div className="card" style={{ borderTop: "2px solid #383F48" }}>
            <div style={{ backgroundColor: "#383F48" }}></div>
            <h1 style={{ color: "#383F48" }}>Business Consultancy</h1>
            <p style={{ color: "#2b3513" }}>
              Investment and financial advisory services, Local and
              international business linkages
            </p>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            To View Services{" "}
            <span style={{ cursor: "pointer" }}>
              <Link
                to={"/mrc-services"}
                style={{ color: "#2b3513", textDecoration: "underline" }}
              >
                Click Here
              </Link>
            </span>
          </h1>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewMRC;
