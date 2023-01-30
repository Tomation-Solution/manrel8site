import { ThemeProvider } from '@mui/system'
import React from 'react'
import { UIProvider } from '../../Ui'
import theme from '../../Styles/theme/Theme'
import Wall from '../../Component/Wall/Wall'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import Articleimage from '../../images/div8.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Image1 from '../../images/div-7.png'
import Image2 from '../../images/div-8.png'
import Image3 from '../../images/div-9.png'
import Image4 from '../../images/div-10.png'
import Image5 from '../../images/div-11.png'
import './Insight.scss'

function App() {
  const AboutList = [
    {
      image: Image1,
      title: 'Publications',
      description:
        'Find reports and data from ABAs research, as well as analysis of banking industry trends.',
      linkHead: 'Proccee to see Pubications',
    },

    {
      image: Image2,
      title: 'Information Bank',
      description:
        'Keep current on trends in banking and the issues affecting our industry, with email bulletins for ABA members tailored to your interests.',
      linkHead: 'Proceed to see Information Bank',
    },
    {
      image: Image3,
      title: 'Events',
      description:
        'Materials to support you in your daily work, including reference materials and ABA custom guides for a variety of issues.​​​​​​​​​​​',
      linkHead: 'Listen Now',
    },
    {
      image: Image4,
      title: 'Reports',
      description:
        'MAN promotes the interest of manufacturers by deepening its advocacy and partnership with national and international economic actors in Government, Organized Private Sector,',
      linkHead: 'Proceed to see Reports',
    },
    {
      image: Image5,
      title: 'Gallery',
      description: 'ABAs flagship magazine.',
      linkHead: 'Proceed to see Gallery',
    },
    {
      image: Image1,
      title: 'PublicationX',
      description:
        'Find reports and data from ABAs research, as well as analysis of banking industry trends.',
      linkHead: 'Proccee to see Pubications',
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <div className='insight'>
        <UIProvider>
          <NavBar location='insight' />
          <div className='hero_Image'>
            <div className='cover'>
              <h1>Insight</h1>
              <p>Read our latest reports, blogs and publications</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className='news_main'>
            <div className='cover'>
              <div className='right'>
                <div className='top'>
                  <h2>News</h2>
                </div>
                <div className='wrap'>
                  {[...Array(4)].map((item, i) => (
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
                <div className='bto'>
                  <h3>View all {'>'}</h3>
                </div>
              </div>
              <div className='left'>
                <img src={Articleimage} alt='' />
              </div>
            </div>
          </div>
          <div className='sect_wrap'>
            <div className='cover'>
              {AboutList.map((item) => (
                <div className='card' key={item.title}>
                  <img src={item.image} alt='' />
                  <div className='text'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {item.title === 'Vision' ? (
                      ''
                    ) : (
                      <h3>
                        {item.linkHead} {'>'}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Wall />
          <Footer />
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
