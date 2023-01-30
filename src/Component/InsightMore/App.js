import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React from 'react'
import Appbar from '../../Component'
// import Banner from '../../Component/Insights/Banner/Banner'
import { UIProvider } from '../../Ui'
// import Article from '../../Component/InsightMore/Index'
import theme from '../../Styles/theme/Theme'
// import Section from '../../Component/Insights/Section/Index'
// import Wall from '../../Component/About/Wall/Index'
// import Footer from '../../Component/About/Footer/Index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
          <Appbar />
          {/* <Banner />
          <Article /> */}
          {/* <Wall/>
      <Footer/> */}
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
