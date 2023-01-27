import React from 'react'
import {createTheme, lighten} from "@mui/material/styles"
import { purple } from '@mui/material/colors';

export const Colors ={
    primary: '#2B3513',
    black: '#000',
    white: '#fff',
    neautral: '#3d3c3c',
};

const theme = createTheme({
    palette: {
        primary: purple,
        custom:{
            main: '#ff23da'
        }
      },
    components:{
        
        MuiDrawer:{
                styleOverrides:{
                        paper: {
                            width: 250,
                            background: Colors.black,
                            color: Colors.white,
                            borderRadius: '0px 100px 0px 0px',
                            borderRight: `1px light ${Colors.primary}`
                        }
                }
        },

        MuiDivider:{
            styleOverrides:{
                root: {
                        borderColor: (0.2, Colors.neautral)
                }
            }
        },
        MuiBadge:{
            styleOverrides:{
                root: {
                    color: Colors.primary
                }
            }
        }
    }
})


export default theme;