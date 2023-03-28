import { styled } from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const InfoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  textAlign: "center",
  color: Colors.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "10px",
  },
}));

export const InfoHeader = styled(Typography)(({ theme }) => ({
  lineHeight: "71px",
  fontSize: "55px",
  marginBottom: "32px",
  textAlign: "center",
  color: Colors.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const InfoContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px",
  },
}));

export const InfoItemContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  width: "375px",
  height: "100%",
  padding: "0px 0px",
  textAlign: "left",
  alignItems: "center",
}));

export const InfoItemImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "82px",
  marginTop: "30px",
  overFlow: "hidden",
}));

export const InfoItemTitle = styled(Typography)(({ theme }) => ({
  lineHeight: "71px",
  fontSize: "22px",
  marginBottom: "10px",

  textAlign: "center",
  color: Colors.white,
}));

export const InfoItemDescription = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "18px",
  marginBottom: "32px",
  width: "363px",
  hieght: "74px",
  textAlign: "center",
  color: Colors.white,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
