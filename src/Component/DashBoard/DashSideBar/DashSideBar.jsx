import { Dashboard, Logout, Upload } from "@mui/icons-material";
import React from "react";
import "./DashSideBar.scss";

const DashSideBar = () => {
  return (
    <div className="dash-sidebar">
      <div className="logo">
        <img src="" alt="" />
      </div>

      <div className="sideItems">
        <div className="sideItem active">
          <Dashboard />
          <span>Dashboard</span>
        </div>
        <div className="sideItem">
          <Upload />
          <span>Certificate Issuing</span>
        </div>
        <div className="sideItem">
          <Logout />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default DashSideBar;
