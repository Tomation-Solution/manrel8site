import { styled } from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const WallContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  margin: "20px 0px",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: Colors.primary,
  padding: "50px 106px",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    padding: "30px",
  },
}));

export const WallItemContainer = styled(Box)(({ theme }) => ({}));

export const WallTitle = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: Colors.white,
}));

export const WallDescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: Colors.white,
  marginBottom: "20px",
  fontFamily: "Poppins",
}));

export const MyButton = styled(Button)(({ theme }) => ({
  width: "250px",
  color: Colors.white,
  textDecoration: "none",
  padding: "15px 30px",
  borderRadius: 500,
  border: "1px solid #fff",
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
}));
