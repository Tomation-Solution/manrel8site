import { ThemeProvider } from '@mui/system'
import React from 'react'
import { UIProvider } from '../../Ui'
import theme from '../../Styles/theme/Theme'
import Wall from '../Wall/Wall'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Image1 from '../../images/div-0.png'
import Image2 from '../../images/div-1.png'
import Image3 from '../../images/div-2.png'
import Image4 from '../../images/div-3.png'
import Image5 from '../../images/div-4.png'
import Image6 from '../../images/div-5.png'
import Articleimage from '../../images/div8.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import './About.scss'
import { Link } from 'react-router-dom'

function App() {
  const AboutList = [
    {
      image: Image1,
      title: 'Membership',
      description:
        'A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.',
      linkHead: 'Explore benefits and join',
      location: 'become-membership',
    },
    {
      image: Image2,
      title: 'Our History',
      description:
        'The establishment of the Manufacturers Association of Nigeria was to provide a platform for the private sector to formulate and articulate policy suggestions that would be complementary to governments efforts at policy formulation.',
      linkHead: 'Learn the MAN Story',
      location: 'history',
    },
    {
      image: Image3,
      title: 'Vision',
      description:
        '“To be the key driver for Industrialization, sustainable Economic Growth and Development in Nigeria”',
    },
    {
      image: Image4,
      title: 'Our Mission Statement',
      description:
        'MAN promotes the interest of manufacturers by deepening its advocacy and partnership with national and international economic actors in Government, Organized Private Sector,',
      linkHead: 'Our Mission Statement',
    },
    {
      image: Image5,
      title: 'Our Objectives',
      description:
        'Provide for manufacturers all over Nigeria the means of formulating, making known and influencing general policy in regard to industrial, labour, social, legal, training, and technical matters;',
      linkHead: 'Our Objectives',
    },
    {
      image: Image6,
      title: 'Who We are',
      description:
        'The Executive Committee is a group of experienced professionals duly elected by MAN members and entrusted with the obligation to conduct the affairs of the Association according to its constitution',
      linkHead: 'Meet Out People',
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <div className='abouts'>
        <UIProvider>
          <NavBar location='about' />
          <div className='hero_image'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Membership</h2>
              </div>
              <h1>About Us</h1>
              <p>
                The American Bankers Association (ABA) proudly represents banks
                of all sizes. Learn more about how we support America's banks,
                our mission and history, and how to become a member.
              </p>
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
                      <>
                        {Object.keys(item).includes('location') ? (
                          <Link to={`/${item.location}`}>
                            <h3>
                              {item.linkHead} {'>'}
                            </h3>
                          </Link>
                        ) : (
                          <h3>
                            {item.linkHead} {'>'}
                          </h3>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
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
          <Wall />
          <Footer />
        </UIProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
