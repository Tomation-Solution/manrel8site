import React from "react";
import { Link } from "react-router-dom";
import {
  BannerButtonContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  MyButton,
} from "../../Styles/Banner";
import { Colors } from "../../Styles/theme/Theme";
import "./Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="active1">
            <BannerContent>
              <BannerTitle sx={{ color: "#fff" }}>
                MAN was established to promote and protect manufacturers’
                collective interest.
              </BannerTitle>
              <BannerDescription>
                On behalf of members, the association leverages on established
                relationship with all tiers of government and relevant
                stakeholders to ensure that the demands of manufacturers are met
                as it relates to ease of doing business. With experienced
                captains of industry championing our advocacy; a vibrant
                membership constantly voicing out their challenges; government
                actively seeking our input when legislative or policy decisions
                are about to be made; we are driven by the issues that matter to
                manufacturers. If there is something holding you back as a
                manufacturer, MAN is here to help.
              </BannerDescription>
              <BannerButtonContainer>
                <Link to="/join-now-page" style={{ textDecoration: "none" }}>
                  <MyButton
                    sx={{
                      backgroundColor: Colors.primary,
                      color: Colors.white,
                      padding: "10px 20px",
                      borderRadius: "20px",
                    }}
                    style={{ border: "none" }}
                  >
                    Join Now
                  </MyButton>
                </Link>
              </BannerButtonContainer>
            </BannerContent>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="active2">
            <BannerContent>
              <BannerTitle sx={{ color: "#fff" }}>Our Mission</BannerTitle>
              <BannerDescription>
                MAN promotes the interest of manufacturers by deepening its
                advocacy and partnership with national and international
                economic actors in Government, Organized Private Sector, host
                communities and other stakeholders to foster its proactive role
                in policy formulation and implementation.
              </BannerDescription>
              <BannerDescription>
                MAN promotes manufacturing sector competitiveness, contribution
                to job creation and Gross Domestic Product through commitment to
                research and development, new technologies and environmental
                sustainability.
              </BannerDescription>
              <BannerButtonContainer>
                <Link to="/join-now-form" style={{ textDecoration: "none" }}>
                  <MyButton
                    sx={{
                      backgroundColor: Colors.primary,
                      color: Colors.white,
                      padding: "10px 20px",
                      borderRadius: "20px",
                    }}
                    style={{ border: "none" }}
                  >
                    Join Now
                  </MyButton>
                </Link>
              </BannerButtonContainer>
            </BannerContent>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="active3">
            <BannerContent>
              <BannerTitle sx={{ color: "#fff" }}>Our Vision</BannerTitle>
              <BannerDescription>
                To be the key driver for industrialization, sustainable economic
                growth and development in Nigeria
              </BannerDescription>
              <BannerButtonContainer>
                <Link to="/join-now-form" style={{ textDecoration: "none" }}>
                  <MyButton
                    sx={{
                      backgroundColor: Colors.primary,
                      color: Colors.white,
                      padding: "10px 20px",
                      borderRadius: "20px",
                    }}
                    style={{ border: "none" }}
                  >
                    Join Now
                  </MyButton>
                </Link>
              </BannerButtonContainer>
            </BannerContent>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
