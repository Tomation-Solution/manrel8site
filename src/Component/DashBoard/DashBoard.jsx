import React from "react";
import "./DashBoard.scss";
import DashBoardNav from "./DashBoardNav/DashBoardNav";
import DashSideBar from "./DashSideBar/DashSideBar";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <DashSideBar />
      <div className="content">
        <DashBoardNav />
      </div>
    </div>
  );
};
