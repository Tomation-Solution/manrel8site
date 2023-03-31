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
  fontSize: "50px",
  marginBottom: "50px",
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
  gap: "30px",
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
  width: "200px",
  height: "100px",
  objectFit: "contain",
  overFlow: "hidden",
}));

export const InfoItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  margin: "10px 0px",

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
