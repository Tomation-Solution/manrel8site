import { styled } from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const FooterContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  fontFamily: "Poppins",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "50px",
  [theme.breakpoints.down("md")]: {
    padding: "50px 20px",
  },
}));

export const FooterItemsContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "left",
  height: "100%",
  padding: "0px 0px",
  // width: "23%",
  fontFamily: "Poppins",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20px",
    textAlign: "center",
  },
}));
export const FooterImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100px",
  overFlow: "hidden",
  paddingBottom: "20px",
}));

export const MyButton = styled(Button)(() => ({
  width: "246px",
  color: Colors.black,
  textDecoration: "none",
  padding: "8px 16px 8px 16px",
  margin: 0,
  height: 34,
  borderRadius: 500,
  border: "1px solid #000",
  fontSize: "14px",
  fontFamily: "Poppins",
  // padding: '16px 20px',
}));

export const FooterDescription = styled(Typography)(({ theme }) => ({
  lineHeight: "25px",
  fontSize: "16px",
  color: "#2b3513",
  paddingBottom: "10px",
  fontFamily: "Poppins",
}));
