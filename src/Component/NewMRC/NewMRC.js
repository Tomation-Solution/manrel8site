import React from "react";
import { Link } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";

import "./NewMRC.scss";
import { useQuery } from "react-query";
import { getMrcPageApi } from "../../utils/api-calls2";
import Loader from "../Loader/Loader";

const services = [
  {
    title: "BUSINESS DEVELOPMENT SERVICES",
    description: "Identify possible problems affecting SMEs by preparing a detailed technical due diligence report through review of their operations.",
    color: "#3B4424"
  },
  {
    title: "BUSINESS INFORMATION SERVICES",
    description: "Sourcing of raw materials, Machinery and equipment, Markets, Model business profiles etc.",
    color: "#D3483C"
  },
  {
    title: "ECONOMIC RESEARCH AND ANALYSIS",
    description: "Provision of Economic research and analysis for manufacturers, government and the organized private sector.",
    color: "#5AC2C0"
  },
  {
    title: "BUSINESS CONSULTANCY",
    description: "Investment and financial advisory services, Local and international business linkages.",
    color: "#333333" 
  }
];

const NewMRC = () => {
  const  {isLoading,data} = useQuery('getMrcPageApi',getMrcPageApi)
  const color ={
    0:"#2c3613",
    1:"#E36159",
    2:"#2BAAB1" ,
    3: "#383F48",
    4:"#2b3513"
  }
  return (
      <div className="new-mrc">
        <UIProvider>
          <Loader loading={isLoading}/>
          <Subscribe/>
          <NewNavBar/>

          <div className="mrc-container">
            <header className="mrc-header">
              <div className="breadcrumb">Home &gt; Membership</div>
              <h1>Manufacturers Resource Centre (MRC)</h1>
              <p className="subtitle">
                The only professional service organization structured to render business solutions for the Manufacturing
                sector and affiliated.
              </p>
            </header>
          </div>

          <div className="who-are">
            <h1 className="header">
              This is <span>Who We Are</span>
            </h1>
            {
              data?.who_we_are.map((d, index) => (
                  <p style={{color: "#2b3513"}} key={index}>
                    {d}
                  </p>
              ))
            }
            <div className="text-btn">
            <span style={{color: "#2b3513"}}>
              "Our Success is measured by the benefits of our clients"
            </span>
              {/* <Link to={"/mrc-contact"}>
              <button>Contact Us</button>
            </Link> */}
            </div>
          </div>
          <div className="objectives">
            <h1 className="header">
              Our <span>Objectives</span>
            </h1>
            <div className="obj-item">
              <div></div>
              <span style={{color: "#2b3513"}}>
              Aid our Manufacturers expand their market reach beyond our shores.
            </span>
            </div>

            {
              data?.objectives.map((d, index) => (
                  <div className="obj-item">
                    <div></div>
                    <span style={{color: "#2b3513"}}>
                {d}
              </span>
                  </div>
              ))
            }
            {/* <div className="obj-item">
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
          </div> */}
          </div>
          <div className="cards">

            {
              data?.objectives_card.map((d, index) => (
                  <div className="card"
                       key={index}
                      // style={{borderTop: "20px solid red" + color[index] ? color[index] : 'aqua'}}>
                       style={{borderTop: `3px solid ${color[index] ? color[index] : 'aqua'}`}}>
                    <div style={{backgroundColor: color[index] ? color[index] : 'aqua'}}></div>
                    <h1 style={{color: color[index] ? color[index] : 'aqua'}}>{d.header}</h1>
                    <p style={{color: "#2b3513"}}>
                      {d.description}
                    </p>
                  </div>
              ))
            }
            {/* <div className="card" style={{ borderTop: "2px solid #E36159" }}>
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
          </div> */}
          </div>

          <div className="objectives_link">
            <h1 className="header">
              To View Services
              <span className="link-wrapper">
      <Link to="/mrc-services" className="service-link">
        Click Here
      </Link>
      </span>
            </h1>
          </div>


          <div className="objectives">
            <h1 className="header">
              MAN <span>Resource Center</span>
            </h1>

            <div className="obj-item">
              <div></div>
              <span>
                  Address:77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
                </span>
            </div>
            <div className="obj-item">
              <div></div>
              <span>
                  Phone: 081 666 75412, 01-4542700, 01-4542701, 01-4542702
                </span>
            </div>
            <div className="obj-item">
              <div></div>
              <span>Email: mrc@manufacturersnigeria.org</span>
            </div>
            <div className="obj-item">
              <div></div>
              <span className="span-bold">
                  MAN House, 1st Floor, Left Wing.
                </span>
            </div>
          </div>
          <Wall/>
          <Footer/>
        </UIProvider>
      </div>
  );
};

export default NewMRC;
