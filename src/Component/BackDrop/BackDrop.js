import React from "react";
import "./BackDrop.scss";

const BackDrop = ({ children }) => {
  return <div className="backdrop">{children}</div>;
};

export default BackDrop;
