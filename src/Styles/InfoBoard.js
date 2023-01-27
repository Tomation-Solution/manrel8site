import { styled } from "@mui/material/styles"
import { Colors } from "./theme/Theme"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";


export const InfoTitle = styled(Typography)(({theme})=>({
    lineHeight: '71px',
    fontSize: '24px',
    marginBottom: '32px',
   
   
    textAlign:'center',
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))

 export const InfoHeader = styled(Typography)(({theme})=>({
    lineHeight: '71px',
    fontSize: '55px',
    marginBottom: '32px',
    textAlign:'center',
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))


 export const InfoContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent:'center',
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
     
     textAlign: 'left'
  }));

  export const InfoItemContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    width: "375px",
    height: "100%",
    padding: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
     
     textAlign: 'left'
  }));

  export const InfoItemImg = styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: '82px',
    marginTop: '30px',
    marginLeft:'144px',
    overFlow: 'hidden',

    
    [theme.breakpoints.down('md')]: {
     width: '350px'
    },
     
    [theme.breakpoints.down('sm')]: {
     width: '320px',
     height:'500px',
 
    }
  }))


  
export const InfoItemTitle = styled(Typography)(({theme})=>({
    lineHeight: '71px',
    fontSize: '22px',
    marginBottom: '32px',
   
   
    textAlign:'center',
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))

 export const InfoItemDescription = styled(Typography)(({theme})=>({
    lineHeight: '26px',
    fontSize: '18px',
    marginBottom: '32px',
    width:'363px',
    hieght:'74px',
    textAlign:'center',
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))