import React, { useEffect } from "react";
import "./ApplicationPortal.scss";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Logo from "../../images/manlogo2.png";
import Wall from "../Wall/Wall";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const ApplicationStatus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="applicationPortal">
      <UIProvider>
        <Subscribe />
        <div className="logo">
          <Link to={"/"}>
            <img alt="" src={Logo} />
          </Link>
        </div>
        <h1 className="header">Application Status</h1>
        <div className="application-container">
          <div className="side-navigation">
            <Link to={"/app-portal"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn">Application</div>
            </Link>
            <Link to={"/application-status"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn green">
                Application Status
              </div>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className="side-navigation-btn">Log Out</div>
            </Link>
          </div>
          <form>
            <div className="status-track">
              <div className="status-text-con">
                <div className="status-item">1</div>
                <p>Approval in Progress</p>
              </div>
              <div className="status-separator"></div>
              <div className="status-text-con">
                <div className="status-item dotted">2</div>
                <p>Approval in Principle Granted</p>
              </div>
              <div className="status-separator"></div>
              <div className="status-text-con">
                <div className="status-item dotted">3</div>
                <p>Final Approval</p>
              </div>
            </div>
          </form>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default ApplicationStatus;
