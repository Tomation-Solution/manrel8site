import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React from 'react'
import Appbar from '../../Component'
import Banner from '../../Component/About/Banner/Index'
import { UIProvider } from '../../Ui'
import Article from '../../Component/About/Article'
import theme from '../../Styles/theme/Theme'
import Section from '../../Component/About/Section/Index'
import Wall from '../../Component/About/Wall/Index'
import Footer from '../../Component/About/Footer/Index'



function App() {
  return (
    <ThemeProvider theme={theme}>

    <div>
      <UIProvider>
        
      <Appbar/>
      <Banner/>
      <Section/>
      <Article/>
      <Wall/>
      <Footer/>
      </UIProvider>
    </div>
    </ThemeProvider>
  )
}

export default App