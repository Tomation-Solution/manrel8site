import React, { useState, useEffect } from "react";
import "./HomeNewSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useQuery } from "react-query";
import { getSlidersApi } from "../../utils/csm-api-calls";

const HomeNewSlide = () => {
    const [images, setImages] = useState([]);
    const [narrations, setNarrations] = useState([]);
    const [index, setIndex] = useState(0);


    useQuery("getSlidersApi", getSlidersApi, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setImages(data.map((d) => d.banner));
            setNarrations(data.map((d) => ({ title: d.title, content: d.content })));
        },
    });

    // Effect to change the image and narration every 3 seconds
    useEffect(() => {
        if (images.length === 0 || narrations.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images, narrations]);

    return (
        <div className="home-new-slide">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Dynamic Background Image */}
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{ backgroundImage: `url(${images[index]})` }}
                ></div>

                {/* Loop through Swiper slides for each image */}
                {images.map((_, idx) => (
                    <SwiperSlide key={idx}>
                        {/* Dynamic Narration */}
                        <div className="narration-con">
                            <div className="narration-banner">
                                <p>{narrations[index]?.title}</p>
                            </div>
                            <div className="narration-text">
                                <p>{narrations[index]?.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeNewSlide;
