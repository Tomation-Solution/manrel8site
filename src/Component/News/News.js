import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import './News.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Footer from '../About/Footer/Index'
import Wall from '../About/Wall/Index'

function News() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='news'>
          <NavBar location='news' />
          <div className='hero_Image'>
            <div className='cover'>
              <h1>Insight</h1>
              <p>DISCLAIMER ON NME/mPAD</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className='news_main'>
            <div className='cover'>
              <div className='left'>
                <h2>DISCLAIMER ON NME/mPAD</h2>
                <p>
                  The Manufacturers Association of Nigeria (MAN) wishes to
                  inform the general public that it is no longer a partner in
                  the organization of the Annual Nigeria Manufacturing
                  Expo/Manufacturing Partnership for African Development
                  (NME/mPAD) events organized by Clarion Events West Africa, a
                  South African Company.
                </p>
                <p>
                  This decision is sequel to the closure of our partner’s
                  (Clarion Events West Africa) business interest in Nigeria
                  which led to laying off its staff operating in Lagos.
                </p>
                <p>
                  Consequently, MAN ceases to be part of any Expo being
                  organized by Clarion Events West Africa, and as such the
                  general public is hereby advised to be wary of any individual
                  or group of persons parading themselves as organizers of
                  Nigeria Manufacturing Equipment Expo in partnership with MAN.
                  MAN members are particularly put on notice to be aware.
                </p>
                <p>
                  We wish to express our deep appreciation to the exhibitors
                  (both Local and International), the general public and our
                  media partners who have supported the Association in the
                  organization of the previous four editions of NME/mPAD.
                </p>
                <p>
                  Please be informed that MAN is planning its sole International
                  Equipment Manufacturing Expo and the details will be
                  communicated in due course.
                </p>
                <p> Thank you.</p>
                <br />
                <p>
                  Segun Ajayi-Kadir <br /> Director General
                </p>
                <br />
                <p>15th August 2019</p>
                <div className='botom'>
                  <FacebookIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                  <EmailIcon />
                </div>
              </div>
              <div className='right'>
                <h2>Other News</h2>
                <div className='wrap'>
                  {[...Array(10)].map((item, i) => (
                    <div className='card' key={1 + i}>
                      <button>Publication</button>
                      <div className='flex'>
                        <h3>Manufacturing Outlook Q4 2022</h3>
                        <OpenInNewIcon />
                      </div>
                      <p>January 03, 2023</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  )
}

export default News
