import React from "react";
import "./NewImageBanner.scss";

const NewImageBanner = ({ header, details }) => {
  return (
    <div className="new-img-banner">
      <div className="new-banner-img-con">
        <img alt="" src="" />
      </div>
      <section>
        <p className="header">{header}</p>
        {details?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
    </div>
  );
};

export default NewImageBanner;
