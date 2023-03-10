import React from 'react'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import Subscribe from '../Subscribe/Subscribe'
import Image from '../../images/logor.png'

function ExistingMembers() {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='members'>
          <Subscribe />
          <NavBar location='membership' />
          <div className='hero_image exist'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Membership</h2>
              </div>
              <h1>Membership</h1>
              <p>See our esteemed members across the country</p>
            </div>
          </div>
        
          <div className='wrapper'>
            <div className='cover'>
              <h1>Our Members</h1>
              <div className='top_search'>
                <div className='search'>
                  <input type='text' placeholder='Search Here' />
                  <SearchIcon />
                </div>
              </div>
              <div className='main_body'>
                <div className='left'>
                  <div className='flex'>
                    {[...Array(24)].map((item) => (
                      <div className='card'>
                        <img src={Image} alt='' />
                        <p>African Paints Nigeria Plc</p>
                        <p>MAN/GML/00002</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='right'>
                  <ul>
                    {alphabet.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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

export default ExistingMembers
