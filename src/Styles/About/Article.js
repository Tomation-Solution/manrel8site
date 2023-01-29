import { styled } from "@mui/material/styles"
import { Colors } from "../theme/Theme"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export const ArticleImg = styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: '776px',
    height:'549px',
    marginTop: '30px',
    overFlow: 'hidden',
    
    [theme.breakpoints.down('md')]: {
     width: '350px'
    },
     
    [theme.breakpoints.down('sm')]: {
     width: '320px',
     height:'500px',
 
    }
  }))

  export const MyLink = styled (Link) (()=>({
    width:100,
    color: Colors.black,
    textDecoration: 'none',

}))

  export const ArticleContainer = styled(Box)(({ src, theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "40px 0px 40px 0px",
    },
   
    marginBottom: '70px',
    overflow: "hidden",
   
    
    [theme.breakpoints.down("md")]: {
        height: '350px',
        backgroundColor: Colors.secondary,
        marginTop:40,
      },
  })); 


  export const ArticleItemContainer = styled(Box)(({ src, theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "40px 0px 40px 0px",
    },
    src: `url(${src})`,
    display: "flex",
    flexDirection: 'column',
    justifyContent:'center',
    alignContent:'center',
    padding:0,
    margin:0,
    width:'373px',
    height:'64px',
    marginBottom: '0px',
    overflow: "hidden",
    
    [theme.breakpoints.down("md")]: {
        height: '350px',
        backgroundColor: Colors.secondary,
        marginTop:40,
      },
  }));

  export const MyButton = styled (Button)(() => ({
    width: '85px',
    color: Colors.black,
    textDecoration: 'none',
    
    margin:0,
    height: 26,
    borderRadius: 500,
    fontSize: 10,
    border: '1px solid #000',
    
    padding: '4px 18px',
    

 }));


 export const ArticleTitle = styled(Typography)(({theme})=>({
  lineHeight: '71px',
  fontSize: '1p6x',
  marginBottom: '20px',
  marginTop:'5px',
  width:'254px',
  height:22,
  color: Colors.black,
  [theme.breakpoints.down('sm')]: {
   fontSize:'2.5rem',
   marginBottom: '20px'
  },
  
}));
export const ArticleDescription = styled(Typography)(({theme})=>({
  lineHeight: '26px',
  fontSize: '14px',
  marginBottom: '32px',
  width:'129px',
  hieght:'74px',
  color: Colors.black,
  [theme.breakpoints.down('sm')]: {
   fontSize:'2.5rem',
   marginBottom: '20px'
  },
}));