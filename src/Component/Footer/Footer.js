import React from "react";
import {
  FooterContainer,
  FooterDescription,
  FooterImg,
  FooterItemsContainer,
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
        <FooterDescription>
          {/* <Link to={"/"} style={{ textDecoration: "none", color: "#2b3513" }}>
            Privacy Policy
          </Link> */}
        </FooterDescription>
        <FooterDescription>
          <a
            href="https://manufacturersnigeria.awsapps.com/mail"
            target={"_blank"}
            rel={"noreferrer"}
            style={{ textDecoration: "none", color: "#2b3513" }}
          >
            Webmail Login
          </a>
        </FooterDescription>
        <FooterDescription>
          <Link
            to={"/operate"}
            style={{ textDecoration: "none", color: "#2b3513" }}
          >
            Our Branch Network
          </Link>
        </FooterDescription>

        <FooterDescription>
          <Link
            style={{ textDecoration: "none", color: "#2b3513" }}
            to="/Services"
          >
            Our Services
          </Link>
        </FooterDescription>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <a
            href="https://facebook.com/ManufacturersNigeria"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <FacebookIcon style={{ color: "blue", cursor: "pointer" }} />
          </a>
          <a
            href="https://ng.linkedin.com/company/manufacturersnigeria"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <LinkedInIcon style={{ color: "skyblue", cursor: "pointer" }} />
          </a>
          <a
            href="https://twitter.com/MAN_NGR?ref_src=twsrc%5Etfw"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <TwitterIcon style={{ color: "skyblue", cursor: "pointer" }} />
          </a>
          <a
            href="https://www.instagram.com/manufacturersnigeria"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Instagram style={{ color: "purple", cursor: "pointer" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCGNEbq1LsuB9s4F4227zuUg"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <YouTube style={{ color: "red", cursor: "pointer" }} />
          </a>
        </div>
      </FooterItemsContainer>
    </FooterContainer>
  );
}

export default Footer;
