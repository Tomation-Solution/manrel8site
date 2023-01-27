import { styled } from "@mui/material/styles"
import { Colors } from "../theme/Theme"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import bannerimg from '../../images/Rectanglefing.png';

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    height: "424px",
    padding: "0px 72px",
    background: Colors.black,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
     backgroundImage: `url(${bannerimg})`,
     backgroundRepeat: "no-repeat",
     backgroundPosition: "center",
     textAlign: 'left'
  }));
  

export const BannerContent = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    
      
   
}))

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight: '71px',
    fontSize: '60px',
    marginBottom: '32px',
    marginTop:'105px',
    width:'883px',
    height:213,
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))


 export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight: '25px',
    fontSize: '20px',
    marginBottom: '32px',
    width:'988px',
    height:125,
    color: Colors.white,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))
 

export const BannerImageContainer = styled(Box)(({ src, theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "40px 0px 40px 0px",
    },
    src: `url(${src})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '140px',
    overflow: "hidden",
    background: Colors.black,
    height: '450px',
    [theme.breakpoints.down("md")]: {
        height: '350px',
        backgroundColor: Colors.secondary,
        marginTop:40,
      },
  }));
  export const BannerImg = styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: '100%',
    marginTop: '30px',
    overFlow: 'hidden',
    backgroundColor: Colors.primary,
    [theme.breakpoints.down('md')]: {
     width: '350px'
    },
     
    [theme.breakpoints.down('sm')]: {
     width: '320px',
     height:'500px',
 
    }
  }))

  export const BannerButtonContainer = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems:'center',
    justifyContent: 'left',
    gap:'30px',
    marginBottom:'126px',
   
}))

export const MyButton = styled (Button)(() => ({
    width: '174px',
    color: Colors.black,
    textDecoration: 'none',
    padding: '8px 16px 8px 16px',
    margin:0,
    height: 34,
    borderRadius: 500,
    fontSize: 16,
    border: '1px solid #000',
    fontSize:'14px',
    padding: '16px 20px',
    

 }));

