// import React, { useState, useEffect } from "react";
// import "./HomeNewSlide.scss";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper";
// import { useQuery } from "react-query";
// import { getSlidersApi } from "../../utils/csm-api-calls";

// const HomeNewSlide = () => {
//     const [images, setImages] = useState([]);
//     const [narrations, setNarrations] = useState([]);
//     const [index, setIndex] = useState(0);


//     useQuery("getSlidersApi", getSlidersApi, {
//         refetchOnWindowFocus: false,
//         onSuccess: (data) => {
//             setImages(data.map((d) => d.banner));
//             setNarrations(data.map((d) => ({ title: d.title, content: d.content })));
//         },
//     });

//     // Effect to change the image and narration every 3 seconds
//     useEffect(() => {
//         if (images.length === 0 || narrations.length === 0) return;
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [images, narrations]);

//     return (
//         <div className="home-new-slide">
//             <Swiper
//                 style={{
//                     "--swiper-navigation-color": "#fff",
//                     "--swiper-pagination-color": "#fff",
//                 }}
//                 speed={600}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"
//             >
//                 {/* Dynamic Background Image */}
//                 <div
//                     slot="container-start"
//                     className="parallax-bg"
//                     style={{ backgroundImage: `url(${images[index]})` }}
//                 ></div>

//                 {/* Loop through Swiper slides for each image */}
//                 {images.map((_, idx) => (
//                     <SwiperSlide key={idx}>
//                         {/* Dynamic Narration */}
//                         <div className="narration-con">
//                             <div className="narration-banner">
//                                 <p>{narrations[index]?.title}</p>
//                             </div>
//                             <div className="narration-text">
//                                 <p>{narrations[index]?.content}</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default HomeNewSlide;

import React, { useState } from "react";
import "./HomeNewSlide.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// import { Link } from "react-router-dom";
import { getSlidersApi } from "../../utils/csm-api-calls";
import {useQuery} from 'react-query'

const HomeNewSlide = () => {


  const [image,setImage] = useState([])
  
  const [index,setIndex] = useState(0)
  
  
  const {data} = useQuery('getSlidersApi',getSlidersApi,{
    refetchOnWindowFocus: false,
    'onSuccess':(data)=>{
      setImage(data.map((d)=>d.banner))
    }
  })
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
          Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(e) => {
          console.log(e?.activeIndex)
          setIndex(e?.activeIndex)
        }}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          // style={{ background: `url(${data.slider_image1})` }}
          style={{ background: `url(${image[index]})` }}
        ></div>

        {
          data?.map((d,index)=>(
            <SwiperSlide>
            <div className="narration-con">
              <div className="narration-banner">
                <p>{d.title}</p>
              </div>
              <div className="narration-text">
                <p>{d.content}</p>
              </div>
            </div>
          </SwiperSlide>
          ))
        }


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