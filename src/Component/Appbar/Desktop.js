import { Button, ListItem, Badge, Box , ListItemIcon, Divider} from '@mui/material'
import React from 'react'
import { AppbarContainer, Appbarheader, MyLink, MyList, MyListItemText, MyButton, MyListItemButton, MyBadge } from '../../Styles/Appbar';

import { ShoppingCart, Search } from '@mui/icons-material'
import logo from '../../images/manlogo2.png'
import { Colors } from '../../Styles/theme/Theme'

import { Link } from "react-router-dom";



function AppbarDesktop ({matches}) {
  return (
    <AppbarContainer>
      <Appbarheader>

      <MyLink to ='/'>
      <img src={logo} alt="logo" className='logo' width={90} height='60' style={{marginLeft:'80px', marginTop:'34px'}} />
      </MyLink>
      </Appbarheader>
      <MyList type ='row'>
     <MyLink  to = '/About' underline='none' color = {Colors.black}>
     <MyListItemText primary='About' ></MyListItemText>
    
      </MyLink>
      <MyLink to= '/Services' underline='none' color={Colors.black}>
      <MyListItemText primary='Services' ></MyListItemText>
      </MyLink>
      <MyLink to= '/Insight' underline='none' color={Colors.black}>
      <MyListItemText primary='Insights' ></MyListItemText>
      </MyLink>
      <MyLink to= '/shop' underline='none' color={Colors.black}>
      <MyListItemText primary='Membership' ></MyListItemText>
      </MyLink>
      <MyLink to= '/shop' underline='none' color={Colors.black}>
      <MyListItemText primary='Sectot' ></MyListItemText>
      </MyLink>
     
      <MyLink to= '/shop' underline='none' color={Colors.black}>
      <MyListItemText primary='Sign In' ></MyListItemText>
      </MyLink>
      </MyList>
      <Box sx={{justifyContent: 'center', marginLeft: '40px', paddingRight: 10,}}>
      <MyList type='row'>
    <MyListItemButton size>
     <MyButton variant='Outlined'>
        Become a member
     </MyButton>
    </MyListItemButton>
    </MyList>
    </Box>

    </AppbarContainer>
       
        
  )
}

export default AppbarDesktop