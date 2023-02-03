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

function App() {
  const [subscribe, setSubscribe] = useState(false)
  console.log(subscribe)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
          <div className='home'>
            {subscribe && (
              <div className='modal'>
                <div className='cover'>
                  <div className='left'>
                    <img src={Image} alt='' />
                  </div>
                  <div className='right'>
                    <div className='huo'>
                      <h1>Subscribe to our Newsletter</h1>
                      <div>
                        <input type='email' placeholder='Email Address' />
                      </div>
                      <button onClick={() => setSubscribe(false)}>
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <NavBar location='home' />
            <Banner />
            <Section />
            <InfoBoard />
            <Article />
            <Wall setSubscribe={setSubscribe} />
            <Footer />
          </div>
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
