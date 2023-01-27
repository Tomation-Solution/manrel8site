import { Badge, Box, Button, IconButton,  List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled} from "@mui/material/styles";
import { Colors } from "./theme/Theme";
import { Link } from "react-router-dom";

export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: 'center',
    alighnItems: 'center',
    padding: '2px 8px',
   
    
}));

export const Appbarheader = styled (Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontFamily: "Sans",
    fontSize: 33,
    color: Colors.black,
    
}));

export const MyBadge = styled (Badge)(() => ({
   

    
}));

export const CustomButton = styled (Button)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontFamily: "Roboto",
    color: Colors.primary
}));

export const MyList = styled (List)(({type}) => ({
    display: type === 'row'? 'flex' : 'block',
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',    
    fontFamily: "Roboto",
    color: Colors.black,
    gap:25,
    marginTop: 54,
    
}));
export const MyListItemText = styled (ListItemText)(({type}) => ({
    
    width: 90,
    marginRight: '100px',
    marginTop: '5px',
   
    "&:hover":{
        
        color: Colors.primary,

   }
}));

export const DrawerClosedButton = styled (IconButton)(() => ({
   position: 'absolute',
   top: 10,
   left: '250px',
   zIndex: 1999,
}));

export const MyButton = styled (IconButton)(() => ({
    width: '174px',
    color: Colors.black,
    textDecoration: 'none',
    padding: '8px 16px 8px 16px',
    margin:0,
    height: 34,
    borderRadius: 8,
    fontSize: 16,
    border: '1px solid #000'
 }));


export const MyLink = styled (Link) (()=>({
    width:100,
    color: Colors.black,
    textDecoration: 'none',

}))

export const MyListItemButton = styled (ListItemButton) (()=>({
    
    color: Colors.black,
    textDecoration: 'none',
    padding: 0,
    margin:0,
    height: 40,

}))