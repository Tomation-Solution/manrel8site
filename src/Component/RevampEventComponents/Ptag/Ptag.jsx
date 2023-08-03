import React from "react";
import "./Ptag.css";

const Ptag = ({ content, variant }) => {
  return (
    <>
      <p className={`sharedptag  ${variant}`}>{content}</p>
    </>
  );
};

export default Ptag;
