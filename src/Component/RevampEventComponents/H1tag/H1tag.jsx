import React from "react";
import "./H1tag.css";

const H1tag = ({ content, variant }) => {
  return <h1 className={`sharedH1tag ${variant}`}>{content}</h1>;
};

export default H1tag;
