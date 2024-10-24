import React from "react";
import "./NewImageBanner.scss";
import DefaultImg from "../../images/new-images/ManHouseMainImg.jpeg";

const NewImageBanner = ({ image, header, details }) => {
  return (
    <div className="new-img-banner">
      <div className="new-banner-img-con" style={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
      }}>
        <img alt="" src={image || DefaultImg} />
      </div>
      <section>
        <p className="header gallery-title">{header}</p>
        {details?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
    </div>
  );
};

export default NewImageBanner;
