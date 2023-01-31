import React from 'react'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link } from 'react-router-dom'

function LatestMembers() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='members'>
          <NavBar location='membership' />
          <div className='hero_image latest'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Membership</h2>
              </div>
              <h1>Membership</h1>
              <p>See our esteemed members across the country</p>
            </div>
          </div>
          <div className='members_tab'>
            <ul>
              <Link to='/become-membership'>
                <li>Become A Member</li>
              </Link>
              <Link to='/existing-membership'>
                <li>Existing Members</li>
              </Link>
              <Link to='/new-membership'>
                <li className='active'>New Members</li>
              </Link>
            </ul>
          </div>
          <div className='wrapper'>
            <div className='cover'>
              <h1>Take A peak at our latest Members</h1>
              <div className='flex'>
                {[...Array(24)].map((item) => (
                  <div className='card'></div>
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

export default LatestMembers
