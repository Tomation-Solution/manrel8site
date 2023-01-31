import React from 'react'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link } from 'react-router-dom'

function Members() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='members'>
          <NavBar location='membership' />
          <div className='hero_image'>
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
                <li className='active'>Become A Member</li>
              </Link>
              <Link to='/existing-membership'>
                <li>Existing Members</li>
              </Link>
              <Link to='/new-membership'>
                <li>New Members</li>
              </Link>
            </ul>
          </div>
          <div className='new_member'>
            <div className='left'>
              <h2>Membership Benefits</h2>
              <p className=''>
                Deriving from the set objectives of its establishment and
                services rendered, MAN provides many benefits to its members,
                which include:
              </p>
              <ul>
                <li> CREDIBILITY AS MANUFACTURER</li>
                <li> CAPACITY BUILDING FOR MEMBERS</li>
                <li>
                  RECOGNITION BY GOVERNMENT AGENCIES AND BUSINESS COMMUNITY
                </li>
                <li>
                  PUBLIC POLICY ADVOCACY FOR FAVOURABLE INVESTMENT/INDUSTRIAL
                  POLICIES
                </li>
                <li> DIRECT INTERVENTIONS ON MEMBERS’PROBLEMS </li>
                <li> CONSULTANCY/ADVISORY SERVICES</li>
                <li>PROMOTING MADE-IN- NIGERIA PRODUCTS</li>
              </ul>
            </div>
            <div className='right'>
              <div className='top'>
                <h2>Become a Member</h2>
                <p>Let's start by entering your information</p>
                <p>All fields are required unless otherwise indicated.</p>
              </div>
              <form action=''>
                <div className='card'>
                  <h4>First Name</h4>
                  <input type='text' />
                </div>
                <div className='card'>
                  <h4>Last Name</h4>
                  <input type='text' />
                </div>
                <div className='card'>
                  <h4>Work Email</h4>
                  <p htmlFor=''>
                    Make sure to use your bank or company email. It will help
                    match you with member benefits, if available.
                  </p>
                  <input type='email' />
                </div>
                <div className='card'>
                  <h4>Verify Work Email</h4>
                  <input type='email' />
                </div>
                <div className='card'>
                  <h4>Password</h4>
                  <input type='password' />
                  <ul>
                    <li>One lowercase character</li>
                    <li>One uppercase character</li>
                    <li>One number</li>
                    <li>One special character: {'~!@#$%^&*()_+{}|:;<>/.'}</li>
                    <li>8 characters minimum</li>
                  </ul>
                </div>
                <div className='card'>
                  <h4>Verify Password</h4>
                  <input type='password' />
                </div>
                <div className='card'>
                  <h4>Mobile Number (optional)</h4>
                  <p>
                    It helps us keep your account secure and provide better
                    recovery assistance.
                  </p>
                  <input type='tel' />
                </div>
                <div className='card'>
                  <button>NEXT</button>
                </div>
              </form>
              <div className='bottom'>
                <h3>Already Registered?</h3>
                <p>Sign In {'>'}</p>
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

export default Members
