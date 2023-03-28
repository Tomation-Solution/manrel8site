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
import { Instagram, YouTube } from "@mui/icons-material";
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
      <FooterItemsContainer style={{ textAlign: "center" }}>
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
            margin: "40px ",
          }}
        >
          <FacebookIcon style={{ color: "blue", cursor: "pointer" }} />
          <LinkedInIcon style={{ color: "skyblue", cursor: "pointer" }} />
          <TwitterIcon style={{ color: "skyblue", cursor: "pointer" }} />
          <Instagram style={{ color: "purple", cursor: "pointer" }} />
          <YouTube style={{ color: "red", cursor: "pointer" }} />
        </div>
      </FooterItemsContainer>
    </FooterContainer>
  );
}

export default Footer;
