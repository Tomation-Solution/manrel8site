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

function Mrc() {
  const sectoralList = [
    {
      image: One,
      content: 'Business Consulting Retainership Service',
    },
    {
      image: Two,
      content: 'Financial Solutions',
    },
    {
      image: Three,
      content: 'Human Capacity Building',
    },
    {
      image: Four,
      content: 'Consulting Services',
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='sectoral'>
          <Subscribe />
          <NavBar location='about' />
          <div className='hero_image'>
            <div className='cover'>
              <h1>Manufacturers Resource Centre (MRC)</h1>
              <p>
                The only professional service organization structured to render
                business solutions for the Manufacturing sector and affiliated.
              </p>
            </div>
          </div>
          <div className='sect-body'>
            <div className='cover'>
              <div className='head'>
                Manufacturers Resource Centre (MRC) is the only professional
                service organization structured to render business solutions for
                the Manufacturing sector and affiliated. With us is a pool of
                well-seasoned consultants and added service outfits, geared at
                delivering solutions with high level of expertise and at very
                subsidized rates.
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
              <div className='longg'>
                <h1> We Transform Businesses</h1>
                <p>
                  Through our services we advice and aid manufacturers in the
                  growth and development of their businesses. We are constantly
                  on the look out for rewarding opportunities to ensure their
                  enterprise thrives and is sustainable. Let us help you
                  "...become a major Industry Player"
                </p>
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

export default Mrc
