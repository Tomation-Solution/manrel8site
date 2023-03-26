import React from "react";
import {
  FooterContainer,
  FooterDescription,
  FooterImg,
  FooterItemsContainer,
  MyButton,
} from "../../Styles/Footer";
import logoICon from "../../images/manlogo2.png";
import theme from "../../Styles/theme/Theme";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <FooterContainer>
      <FooterItemsContainer
        sx={{ width: "40%", [theme.breakpoints.down("md")]: { width: "100%" } }}
      >
        <FooterImg src={logoICon} />
        <FooterDescription>MAN House,</FooterDescription>
        <FooterDescription>
          77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria
        </FooterDescription>
        <FooterDescription>info@manufacturersnigeria.org</FooterDescription>
        <FooterDescription>01-4542700, 01-4542701</FooterDescription>
      </FooterItemsContainer>
      <FooterItemsContainer>
        {/* <FooterDescription>Sitemap</FooterDescription> */}
        <FooterDescription>Privacy Policy</FooterDescription>
        <FooterDescription>Webmail Login</FooterDescription>
        <FooterDescription>
          <Link
            to={"/operate"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            Our Branch Network
          </Link>
        </FooterDescription>
        <Link style={{ textDecoration: "none" }} to="/Services">
          <MyButton>Our Services</MyButton>
        </Link>
        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "20px ",
            color: "#2B3513",
          }}
        >
          <FacebookIcon style={{ cursor: "pointer" }} />
          <LinkedInIcon style={{ cursor: "pointer" }} />
          <TwitterIcon style={{ cursor: "pointer" }} />
        </div>
        {/* <FooterDescription>Modern Slavery Statement</FooterDescription> */}
      </FooterItemsContainer>
      <FooterItemsContainer>
        {/* <FooterDescription>Terms & Conditions</FooterDescription>
        <FooterDescription>Website help</FooterDescription> */}
      </FooterItemsContainer>
    </FooterContainer>
  );
}

export default Footer;
