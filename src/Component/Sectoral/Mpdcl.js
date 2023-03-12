import React from 'react'
import { ThemeProvider } from '@mui/system'
import { UIProvider } from '../../Ui'
import theme from '../../Styles/theme/Theme'
import Wall from '../Wall/Wall'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import './Sectoral.scss'
import Vector from '../../images/Vector.png'
import One from '../../images/mrc1.png'
import Two from '../../images/mrc2.png'
import Three from '../../images/mrc3.png'
import Four from '../../images/mrc4.png'

function Mpdcl() {
  const sectoralList = [
    {
      image: One,
      content: 'MAN INDEPENDENT POWER PROJECT (IPP)',
    },
    {
      image: Two,
      content: 'FACILITATION OF THE MAN-SUNREF FUNDS',
    },
    {
      image: Three,
      content: 'ELIGIBLE CUSTOMER (EC) APPLICATION TO NERC',
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='sectoral'>
          <Subscribe />
          <NavBar location='mpdcl' />
          <div className='hero_image'>
            <div className='cover'>
              <h1>MAN Power Development Company Limited (MPDCL).</h1>
              <p>
                The services below are offered by MAN Power Development Company
                Limited (MPDCL).
              </p>
            </div>
          </div>
          <div className='sect-body'>
            <div className='cover'>
              <div className='head'>
                The services below are offered by MAN Power Development Company
                Limited (MPDCL).
              </div>
              <div className='wrap-g'>
                {sectoralList.map((item) => (
                  <div className='card' key={item.content}>
                    <div className='flex'>
                      <img src={Vector} alt='' />
                      <h2>{item.content}</h2>
                    </div>
                    <img className='main-img' src={item.image} alt='' />
                    <button>View More</button>
                  </div>
                ))}
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

export default Mpdcl
