import { styled } from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import bannerimg from "../images/Rectangle.png";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  minHeight: "90vh",
  padding: "30px 72px",
  marginBottom: "91px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
    textAlign: "center",
  },
  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${bannerimg})`,
  backgroundSize: `cover`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  textAlign: "left",
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: "71px",
  fontSize: "50px",
  marginBottom: "32px",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    marginTop: "12vh",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: "40px",
    lineHeight: "51px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    lineHeight: "31px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: "30px",
  fontSize: "24px",
  width: "988px",
  textAlign: "center",
  color: Colors.white,
  display: "block",
  paddingBottom: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const BannerImageContainer = styled(Box)(({ src, theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  src: `url(${src})`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "140px",
  overflow: "hidden",
  background: Colors.black,
  height: "450px",
  [theme.breakpoints.down("md")]: {
    height: "350px",
    backgroundColor: Colors.secondary,
    marginTop: 40,
  },
}));
export const BannerImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  marginTop: "30px",
  overFlow: "hidden",
  backgroundColor: Colors.primary,
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "500px",
  },
}));

export const BannerButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  paddingTop: "30px",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const MyButton = styled(Button)(({ theme }) => ({
  color: Colors.black,
  textDecoration: "none",
  padding: "12px 20px",
  margin: 0,
  borderRadius: 500,
  fontSize: "14px",
  border: "1px solid #000",
  marginRight: "30px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));
