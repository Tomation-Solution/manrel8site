import React from "react";
import "./HomeNewSlide.scss";
import Marquee from "react-fast-marquee";
import MaHouse from "../../images/new-images/ManHouseMainImg.jpeg";

const HomeNewSlide = () => {
  return (
    <div className="home-new-slide">
      <div className="img-con">
        <img alt="MAN HOUSE" src={MaHouse} />
      </div>
      <div className="under-text">
        <Marquee gradient={false}>
          <span>Welcome to MAN</span>
          <p className="caption">
            MAN was established to promote and protect manufacturers’ collective
            interest.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default HomeNewSlide;
