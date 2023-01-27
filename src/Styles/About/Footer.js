import { styled } from "@mui/material/styles"
import { Colors } from "../theme/Theme"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";



export const FooterContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    marginLeft:79,
    
    height: "100%",
    padding: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
     
     textAlign: 'left'
  }));

  export const FooterItemsContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'left',
    width:'152px',
    height: "100%",
    padding: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
     
     textAlign: 'left'
  }));
  export const FooterImg = styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: '83px',
    marginTop: '30px',
    overFlow: 'hidden',
    
    [theme.breakpoints.down('md')]: {
     width: '350px'
    },
     
    [theme.breakpoints.down('sm')]: {
     width: '320px',
     height:'500px',
 
    }
  }));

  export const MyButton = styled (Button)(() => ({
    width: '246px',
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

 export const FooterDescription = styled(Typography)(({theme})=>({
    lineHeight: '25px',
    fontSize: '14px',
   
    width:'400px',
    height:30,
    color: Colors.black,
    [theme.breakpoints.down('sm')]: {
     fontSize:'2.5rem',
     marginBottom: '20px'
    },
    
 }))
 
