import React from 'react'
import {useTheme} from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import AppbarMobile from './Appbar/Mobile';
import AppbarDesktop from './Appbar/Desktop';

function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
       {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/>}
    </div>
  )
}

export default Appbar