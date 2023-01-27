import { styled } from "@mui/material/styles"
import { Colors } from "../theme/Theme"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const SectionItemContainer = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection:'column',
    
 
    
    width:'373px',
    height:'429px',
    
   
}))

export const SectionImg = styled('img')(({src, theme})=>({
    src: `url(${src})`,
    width: '273px',
    height:'220px',
   
    
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


    export const SectionTitle = styled(Typography)(({theme})=>({
        lineHeight: '71px',
        fontSize: '27px',
        marginBottom: '4px',
        marginTop:'18px',
        marginLeft:'40px',
        width:'192px',
        height:42,
        color: Colors.black,
        textAlign:'left',
        [theme.breakpoints.down('sm')]: {
         fontSize:'1.5rem',
         marginBottom: '20px'
        },
        
     }))

     export const SectionDescription = styled(Typography)(({theme})=>({
        lineHeight: '15px',
        fontSize: '12px',
        textAlign:'left',
        marginLeft:'40px',
        marginTop: '16px',
        
        width:'283px',
        height:150,
        color: Colors.black,
        [theme.breakpoints.down('sm')]: {
         fontSize:'1.5rem',
         marginBottom: '20px'
        },
        
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
    
     
     
   