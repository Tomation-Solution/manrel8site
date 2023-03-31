import { styled } from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const SectionItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "2px",
  width: "48%",
  marginBottom: "40px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "fit-content",
  },
}));

export const SectionImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "200px",
  overFlow: "hidden",
  backgroundColor: Colors.primary,
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    height: "unset",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "27px",
  marginBottom: "4px",
  fontWeight: 700,
  marginTop: "18px",
  color: Colors.black,
  textAlign: "left",
  padding: "0 30px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  lineHeight: "20px",
  fontSize: "14px",
  textAlign: "left",
  color: Colors.black,
  padding: "5px 30px",
  [theme.breakpoints.down("sm")]: {
    padding: "5px 10px",
  },
}));
export const SectionMember = styled(Typography)(({ theme }) => ({
  lineHeight: "20px",
  fontSize: "16px",
  color: "#2B3513",
  padding: "10px 30px",
  fontWeight: "600",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 10px",
  },
}));

export const MyButton = styled(Button)(({ theme }) => ({
  color: Colors.black,
  textDecoration: "none",
  borderRadius: 500,
  border: "1px solid #fff",
  fontSize: "14px",
  padding: "12px 30px",
  height: "fit-content",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));
