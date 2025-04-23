import React, { useEffect, useRef, useState } from "react";
import "./HomeNewSlide.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { getSlidersApi } from "../../utils/csm-api-calls";
import { useQuery } from "react-query";

const HomeNewSlide = () => {
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const { data } = useQuery("getSlidersApi", getSlidersApi, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setImage(data.map((d) => d.banner));
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev <= image.length - 2 ? prev + 1 : 0));
    }, 7500);

    return () => clearInterval(interval);
  }, [image.length]);

  // Sync Swiper with index updates
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  }, [index]);

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
        modules={[
          // Parallax,
          Pagination,
          Navigation,
        ]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        onSlideChange={(swiper) => setIndex(swiper.realIndex)} // Sync state with Swiper
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          // style={{ background: `url(${data.slider_image1})` }}
          style={{
            background: `url(${image[index]})`,
          }}
        ></div>

        {data?.map((d, index) => (
          <SwiperSlide key={index}>
            <div className="narration-con">
              <div className="narration-banner">
                <p>{d.title}</p>
              </div>
              <div className="narration-text">
                <p dangerouslySetInnerHTML={{ __html: d.content }}></p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide 

>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HomeNewSlide;
