import React from "react";
import "./HomeNewSlide.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const HomeNewSlide = ({ data }) => {
  return (
    <div className="home-new-slide">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{ background: `url(${data.slider_image1})` }}
        ></div>
        <SwiperSlide>
          <div className="narration-con">
            <div className="narration-banner">
              <p>Welcome To MAN</p>
            </div>
            <div className="narration-text">
              <p>{data.slider_welcome_message}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="narration-con">
            <div className="narration-banner">
              <p>Our Vision</p>
            </div>
            <div className="narration-text">
              <p>{data.slider_vision_message}</p>
            </div>
            <div className="centered-button">
              <Link to={"/about"}>
                <button>LEARN MORE</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="narration-con">
            <div className="narration-banner">
              <p>Our Mission</p>
            </div>
            <div className="narration-text">
              <p>{data.slider_mission_message}</p>
            </div>
            <div className="centered-button">
              <Link to={"/about"}>
                <button>LEARN MORE</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeNewSlide;
