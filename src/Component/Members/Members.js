import React from 'react'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link } from 'react-router-dom'
import Subscribe from '../Subscribe/Subscribe'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

function Members() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='members'>
          <Subscribe />
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
              <div className='xard hey'>
                <h2>Membership Benefits</h2>
                <p className=''>
                  Deriving from the set objectives of its establishment and
                  services rendered, MAN provides many benefits to its members,
                  which include:
                </p>
                <ul>
                  <li>
                    <ThumbUpIcon />
                    <p>CREDIBILITY AS MANUFACTURER</p>
                  </li>
                  <li>
                    <ThumbUpIcon />
                    <p>CAPACITY BUILDING FOR MEMBERS</p>
                  </li>
                  <li>
                    <ThumbUpIcon />

                    <p>
                      RECOGNITION BY GOVERNMENT AGENCIES AND BUSINESS COMMUNITY
                    </p>
                  </li>
                  <li>
                    <ThumbUpIcon />

                    <p>
                      PUBLIC POLICY ADVOCACY FOR FAVOURABLE
                      INVESTMENT/INDUSTRIAL POLICIES
                    </p>
                  </li>
                  <li>
                    <ThumbUpIcon />
                    <p>DIRECT INTERVENTIONS ON MEMBERS’PROBLEMS</p>
                  </li>
                  <li>
                    <ThumbUpIcon />
                    <p>CONSULTANCY/ADVISORY SERVICES</p>
                  </li>
                  <li>
                    <ThumbUpIcon />
                    <p>PROMOTING MADE-IN- NIGERIA PRODUCTS</p>
                  </li>
                </ul>
              </div>
              <div className='xard she'>
                <h2>Membership Requirements</h2>
                <p className=''>
                  The membership requirement steps below detail the process to
                  becoming a member of MAN
                </p>
                <ul>
                  <p>Step 1: Confirm Eligibility</p>
                  <li>A prospective member of MAN</li>
                  <li> MUST HAVE A MANUFACTURING PLANT IN NIGERIA</li>
                  <li> MUST BE A MANUFACTURER OF AT LEAST ONE PRODUCT</li>
                  <li> THE MANUFACTURING PLANT MUST BE IN PRODUCTION.</li>
                  <li>
                    THE PRODUCT(S) MUST BE DULY REGISTERED WITH APPROPRAITE
                    REGULATORY BODY (SON, NAFDAC, ETC)
                  </li>
                  <li> MINIMUM SALES TURNOVER OF 100 MILLION NAIRA</li>
                </ul>
                <ul>
                  <p>Step 2: Make Payment for Application Form</p>
                  <li>
                    An intending member of the Association, (being a
                    manufacturer) will be required to obtain and complete a
                    membership Application Form.
                  </li>
                  <li>Click Here to make payment</li>
                  <li>This include:</li>
                  <li>APPLICATION FORM [N5,000.00]</li>
                </ul>
                <ul>
                  <p>
                    Step 3: Fill application form, upload necessary documents
                    and save
                  </p>
                  <li>Documents required for upload include:</li>
                  <li>1. COMPANY’S CERTIFICATE OF INCORPORATION</li>
                  <li>
                    2. CORPORATE AFFAIRS COMMISSION (CAC) FORMS C02 AND C07
                  </li>
                  <li>
                    3. COPIES OF DULY CERTIFIED AUDITED FINANCIAL STATEMENT FOR
                    PROCEEDING TWO (2) YEARS OR BUSINESS PLAN FOR NEW COMPANIES
                  </li>
                  <li>
                    4. A COVERING LETTER ON THE LETTER HEAD OF YOUR COMPANY
                    APPLYING TO BE REGISTERED AS A MEMBER OF MAN
                  </li>
                </ul>
                <ul>
                  <p>
                    Step 4: Make Payment for Annual Subscription, Levies and
                    Submit
                  </p>
                  <li> REGISTRATION FEE [N10,000.00]</li>
                  <li> ANNUAL SUBSCRIPTION</li>
                  <li> SPECIAL DEVELOPMENT LEVY</li>
                  <li>
                    LAND USE CHARGE LEVY FOR MEMBERS IN LAGOS ONLY [N20,000.00]
                  </li>
                  <li>BUY MADE-IN-NIGERIA PRODUCTS ADVERT LEVY [N10,000.00]</li>
                  <li> LEGAL LEVY [N10,000.00]</li>
                  <li> AGM LEVY [N10,000.00]</li>
                </ul>
                <ul>
                  <p>Step 5: Await Schedule of Inspection Visit From MAN</p>
                  <li>Await Schedule of Factory Inspection visit from MAN</li>
                </ul>
                <ul>
                  <p>Step 6: Await Confirmation of Approval from MAN</p>
                  <li>
                    Await Confirmation of Approval From MANCREDIBILITY AS
                    MANUFACTURER
                  </li>
                  <li>CAPACITY BUILDING FOR MEMBERS</li>
                  <li>
                    RECOGNITION BY GOVERNMENT AGENCIES AND BUSINESS COMMUNITY
                  </li>
                  <li>
                    PUBLIC POLICY ADVOCACY FOR FAVOURABLE INVESTMENT/INDUSTRIAL
                    POLICIES
                  </li>
                  <li>DIRECT INTERVENTIONS ON MEMBERS’PROBLEMS</li>
                  <li>CONSULTANCY/ADVISORY SERVICES</li>
                  <li>PROMOTING MADE-IN-NIGERIA PRODUCTS</li>
                </ul>
              </div>
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
