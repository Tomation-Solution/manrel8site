import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BannerButtonContainer,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImageContainer,
  BannerImg,
  BannerTitle,
  MyButton,
} from "../../Styles/Banner";
import Image from "../../images/Rectangle.png";
import Image1 from "../../images/bg(1).png";
import Image2 from "../../images/bg(2).png";
import Image3 from "../../images/bg(3).png";
import { Colors } from "../../Styles/theme/Theme";
import "./Banner.scss";
function Banner() {
  const [activeClass, setActiveClass] = useState("active1");
  useEffect(() => {
    // Define an array with your classes
    const classes = ["active1", "active2", "active3", "active4"];

    // Use setInterval to change the activeClass every 2 seconds
    const interval = setInterval(() => {
      // Find the index of the current activeClass in the classes array
      const currentIndex = classes.indexOf(activeClass);

      // Calculate the index of the next class, wrapping around to the start of the array if necessary
      const nextIndex = (currentIndex + 1) % classes.length;

      // Update the activeClass state with the next class
      setActiveClass(classes[nextIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeClass]);

  return (
    <div className={activeClass}>
      <BannerContent>
        <BannerTitle sx={{ color: "#fff" }}>
          MAN was established to promote and protect manufacturers’ collective
          interest.
        </BannerTitle>
        <BannerDescription>
          On behalf of members, the association leverages on established
          relationship with all tiers of government and relevant stakeholders to
          ensure that the demands of manufacturers are met as it relates to ease
          of doing business. With experienced captains of industry championing
          our advocacy; a vibrant membership constantly voicing out their
          challenges; government actively seeking our input when legislative or
          policy decisions are about to be made; we are driven by the issues
          that matter to manufacturers. If there is something holding you back
          as a manufacturer, MAN is here to help.
        </BannerDescription>
        <BannerButtonContainer>
          <Link to="/become-membership" style={{ textDecoration: "none" }}>
            <MyButton
              sx={{
                backgroundColor: Colors.primary,
                color: Colors.white,
              }}
              style={{ border: "none" }}
            >
              Join Now
            </MyButton>
          </Link>
        </BannerButtonContainer>
      </BannerContent>
    </div>
  );
}

export default Banner;
