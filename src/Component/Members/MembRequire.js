import React from 'react'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import Subscribe from '../Subscribe/Subscribe'
import { Link } from 'react-router-dom'

function MembRequire() {
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
          <div className='new_member'>
            <div className='left' style={{ width: '100%' }}>
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
            <div className='left' style={{ width: '100%' }}>
              <div className='join'>
                <h2>JOIN US!</h2>
                <p>
                  You have made a great choice for your company by deciding to
                  join the league of Manufacturers with credibility in Nigeria!
                </p>
                <h2>Confirm Eligibility</h2>
                <p>
                  A prospective member of MAN must be a manufacturer and have a
                  manufacturing plant in Nigeria.
                </p>
                <p>
                  Please view the Membership Requirement and confirm you are
                  eligible. I hereby Confirm that i am Eligible to be a Member
                  of MAN.
                </p>
                <h2>Prospective Member</h2>
                <p>
                  If you have already purchased the application form, or you
                  want to know the status of a previous purchase, kindly login
                  with your company information.
                </p>
                <button>Proceed to get registration form</button>
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

export default MembRequire
