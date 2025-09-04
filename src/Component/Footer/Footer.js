import React from "react";
import { useQuery } from "react-query";
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
import { getFooterContentPublic } from "../../utils/csm-api-calls";

// Default footer data - accurate current values
const defaultFooterData = {
  logo: logoICon,
  company_name: "MAN House",
  address: "77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria",
  email: "info@manufacturersnigeria.org",
  phone: "01-4542700, 01-4542701",
  webmail_url: "https://manufacturersnigeria.awsapps.com/mail",
  branch_network_url: "/operate",
  services_url: "/Services",
  facebook_url: "https://facebook.com/ManufacturersNigeria",
  linkedin_url: "https://ng.linkedin.com/company/manufacturersnigeria",
  twitter_url: "https://twitter.com/MAN_NGR?ref_src=twsrc%5Etfw",
  instagram_url: "https://www.instagram.com/manufacturersnigeria",
  youtube_url: "https://www.youtube.com/channel/UCGNEbq1LsuB9s4F4227zuUg",
};

function Footer() {
  const { data: footerData } = useQuery(
    "getFooterContentPublic",
    getFooterContentPublic,
    {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  // Use backend data if available, otherwise use defaults
  const currentFooterData = footerData || defaultFooterData;

  return (
    <FooterContainer>
      <FooterItemsContainer
        sx={{ width: "40%", [theme.breakpoints.down("md")]: { width: "100%" } }}
      >
        <FooterImg src={currentFooterData.logo} />
        <FooterDescription>{currentFooterData.company_name}</FooterDescription>
        <FooterDescription>{currentFooterData.address}</FooterDescription>
        <FooterDescription>{currentFooterData.email}</FooterDescription>
        <FooterDescription>{currentFooterData.phone}</FooterDescription>
      </FooterItemsContainer>

      <FooterItemsContainer style={{ textAlign: "center" }}>
        <FooterDescription>
          {/* Privacy Policy can be added later if needed */}
        </FooterDescription>

        {currentFooterData.webmail_url && (
          <FooterDescription>
            <a
              href={currentFooterData.webmail_url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#2b3513" }}
            >
              Webmail Login
            </a>
          </FooterDescription>
        )}

        {currentFooterData.branch_network_url && (
          <FooterDescription>
            <Link
              to={currentFooterData.branch_network_url}
              style={{ textDecoration: "none", color: "#2b3513" }}
            >
              Our Branch Network
            </Link>
          </FooterDescription>
        )}

        {currentFooterData.services_url && (
          <FooterDescription>
            <Link
              style={{ textDecoration: "none", color: "#2b3513" }}
              to={currentFooterData.services_url}
            >
              Our Services
            </Link>
          </FooterDescription>
        )}

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {currentFooterData.facebook_url && (
            <a
              href={currentFooterData.facebook_url}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon style={{ color: "blue", cursor: "pointer" }} />
            </a>
          )}

          {currentFooterData.linkedin_url && (
            <a
              href={currentFooterData.linkedin_url}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ color: "skyblue", cursor: "pointer" }} />
            </a>
          )}

          {currentFooterData.twitter_url && (
            <a
              href={currentFooterData.twitter_url}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon style={{ color: "skyblue", cursor: "pointer" }} />
            </a>
          )}

          {currentFooterData.instagram_url && (
            <a
              href={currentFooterData.instagram_url}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram style={{ color: "purple", cursor: "pointer" }} />
            </a>
          )}

          {currentFooterData.youtube_url && (
            <a
              href={currentFooterData.youtube_url}
              target="_blank"
              rel="noreferrer"
            >
              <YouTube style={{ color: "red", cursor: "pointer" }} />
            </a>
          )}
        </div>
      </FooterItemsContainer>
    </FooterContainer>
  );
}

export default Footer;
