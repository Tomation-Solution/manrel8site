import React, { useState } from 'react'
import './Events.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import Image from '../../images/Rectangle 224.png'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link } from 'react-router-dom'

function Events() {
  const [ShowFree, setShowFree] = useState(false)
  const [ShowPaid, setShowPaid] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='events'>
          {ShowFree && (
            <div className='modal'>
              <div className='cover'>
                <div className='top'>
                  <h2>Register for Events</h2>
                  <p>Let's start by entering your information</p>
                  <p>All fields are required unless otherwise indicated.</p>
                </div>
                <form action=''>
                  <div className='card'>
                    <h4>Full name</h4>
                    <input type='text' />
                  </div>
                  <div className='card'>
                    <h4>Email Address</h4>
                    <input type='email' />
                  </div>
                  <div className='card'>
                    <h4>Company Name</h4>
                    <input type='text' />
                  </div>
                  <div className='card'>
                    <button onClick={() => setShowFree(false)}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {ShowPaid && (
            <div className='modal'>
              <div className='cover'>
                <div className='top'>
                  <h2>Register for Events</h2>
                  <p>Let's start by entering your information</p>
                  <p>All fields are required unless otherwise indicated.</p>
                </div>
                <form action=''>
                  <div className='card'>
                    <h4>Full name</h4>
                    <input type='text' />
                  </div>
                  <div className='card'>
                    <h4>Email Address</h4>
                    <input type='email' />
                  </div>
                  <div className='card'>
                    <h4>Company Name</h4>
                    <input type='text' />
                  </div>
                  <div className='card'>
                    <button onClick={() => setShowPaid(false)}>
                      Proceed to pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <NavBar location='events' />
          <div className='hero_image'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Events</h2>
              </div>
              <h1>Events</h1>
              <p>See our Events</p>
            </div>
          </div>
          <div className='members_tab'>
            <ul>
              <li onClick={() => setShowFree(true)}>Free Events</li>
              <li onClick={() => setShowPaid(true)}>Paid Events</li>
            </ul>
          </div>
          <div className='secwtap'>
            {[...Array(49)].map((item) => (
              <div className='card'>
                <img src={Image} alt='' />
                <p className=''>March 15th, 2022 - 08:30 </p>
                <h2>Meeting With Team Members</h2>
                <div className='buttons'>
                  <button>Accept</button>
                  <button className='light'>Reject</button>
                </div>
              </div>
            ))}
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  )
}

export default Events
