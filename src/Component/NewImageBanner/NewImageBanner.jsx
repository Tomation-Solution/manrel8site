import React from "react";
import "./NewImageBanner.scss";
import DefaultImg from "../../images/new-images/ManHouseMainImg.jpeg";

const NewImageBanner = ({ image, header, details }) => {
  return (
    <div className="new-img-banner">
      {/* <div style={{ height: "100vh" }} className="new-banner-img-con">
        <img alt="" src={image || DefaultImg} />
      </div> */}
      <div
        className="topBg"
        style={{
          backgroundImage: `url(${image || DefaultImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "16/7",
          width: "100%",
        }}
      ></div>
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
