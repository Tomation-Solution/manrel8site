import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ApplicationNavBar = ({
  isStatusPage,
  isMembershipAdmission,
  isFormPage,
}) => {
  const deleteUseData = () => {
    toast.info("User logged out", { icon: false });
    localStorage.removeItem("userdata");
  };
  return (
    <div className="side-navigation">
      <Link to={"/app-portal"} style={{ textDecoration: "none" }}>
        <div className={`side-navigation-btn ${isFormPage ? "green" : ""}`}>
          Application
        </div>
      </Link>
      <Link to={"/application-status"} style={{ textDecoration: "none" }}>
        <div className={`side-navigation-btn ${isStatusPage ? "green" : ""}`}>
          Application Status
        </div>
      </Link>
      <Link to={"/membership-admission"} style={{ textDecoration: "none" }}>
        <div
          className={`side-navigation-btn ${
            isMembershipAdmission ? "green" : ""
          }`}
        >
          Membership Admission
        </div>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="side-navigation-btn" onClick={deleteUseData}>
          Log Out
        </div>
      </Link>
    </div>
  );
};

export default ApplicationNavBar;
