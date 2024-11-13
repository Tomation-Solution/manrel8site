import React, { useState } from "react";
import "./HomeNewSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { getSlidersApi } from "../../utils/csm-api-calls";
import { useQuery } from 'react-query';

const HomeNewSlide = () => {

  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  
  const { data } = useQuery('getSlidersApi', getSlidersApi, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setImage(data.map((d) => d.banner));
    }
  });
  
  return (
    <>
      <div className="home-new-slide">
        <Swiper
          direction="horizontal"
          autoplay={{
            delay: 3000, // Slide delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSlideChange={(e) => setIndex(e?.activeIndex)}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
            style={{ background: `url(${image[index] || ''})` }}
          ></div>

          {data?.map((d, idx) => (
            <SwiperSlide key={idx}>
              <div className="narration-con" data-swiper-parallax="-200">
                <div className="narration-banner">
                  <p>{d.title}</p>
                </div>
                <div className="narration-text">
                  <p>{d.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeNewSlide;
