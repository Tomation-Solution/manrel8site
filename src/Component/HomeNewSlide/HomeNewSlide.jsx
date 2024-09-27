import React, { useState, useEffect } from "react";
import "./HomeNewSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useQuery } from 'react-query';
import { getSlidersApi } from "../../utils/csm-api-calls";

const HomeNewSlide = () => {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    // Fetching images using react-query
    const { data } = useQuery('getSlidersApi', getSlidersApi, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setImages(data.map((d) => d.banner)); // Extracting banners from the fetched data
        }
    });

    // Effect to change the image every second
    useEffect(() => {
        if (images.length === 0) return; // Prevent error if images are not yet loaded
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
        }, 3000); // Change image every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images]);

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
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{ backgroundImage: `url(${images[index]})` }} // Set dynamic background image
                ></div>

                {data?.map((d, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="narration-con">
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
    );
};

export default HomeNewSlide;
