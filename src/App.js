import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Appbar from './Component'
import Banner from './Component/Banner'
import { UIProvider } from './Ui'
import './App.scss'

import theme from './Styles/theme/Theme'
import { BrushTwoTone } from '@mui/icons-material'
import Section from './Component/Section'
import InfoBoard from './Component/InfoBoard/InfoBorad'
import Article from './Component/Article/Article'
import Wall from './Component/Wall/Wall'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import Image from './images/div-sub.png'
import Subscribe from './Component/Subscribe/Subscribe'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
          <div className='home'>
            <Subscribe />
            <NavBar location='home' />
            <Banner />
            <Section />
            <InfoBoard />
            <Article />
            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
