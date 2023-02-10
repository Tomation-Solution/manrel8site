import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import './Services.scss'
import Subscribe from '../Subscribe/Subscribe'

function Services() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='services'>
          <Subscribe />
          <NavBar location='services' />
          <div className='hero_image'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Service</h2>
              </div>
              <h1>Our Services</h1>
              <p>
                MAN was created to promote and protect manufacturers collective
                interest.
              </p>
            </div>
          </div>
          <div className='new_member'>
            <div className='left'>
              <div className='card'>
                <div className='overlay'>
                  <h1>Business Consulting Retainer ship Service</h1>
                  <p>
                    With our brand, expertise and business leverages, valuable
                    in growing turnover volume, company customer base and
                    production capacity, companies engage us as their Business
                    Consultant to aid them better their business strategizes and
                    attain targeted business growth. In addition, micro
                    manufacturers enjoy discounted fee.
                  </p>
                  <p>This service covers:</p>
                  <p>TBusiness Evaluations.</p>
                  <p>TBusiness Advisory.</p>
                  <p>TAccess to MRC available Business Leverages.</p>
                  <p>TBusiness Referrals.</p>
                </div>
              </div>
              <div className='card'>
                <div className='overlay'>
                  <h1>Human Capacity Building</h1>
                  <p>
                    We understand that Learning and Development leads to
                    increased performance, better lives and work. We bring to
                    you a whole new learning experience through our In-plant and
                    General Trainings.
                  </p>
                  <p>This service covers:</p>
                  <p>Training (In-Plant and General).</p>
                  <p>Workforce Recruitment.</p>
                  <p>Pre-Retirement Training.</p>
                </div>
              </div>
              <div className='card'>
                <div className='overlay'>
                  <h1>Financial Solutions</h1>
                  <p>
                    It’s now possible to expand your Business and Operations.
                    Come take advantage of available funding windows,
                    Intervention Fund and other Venture Capital investments,
                    that would suit your funding need.
                  </p>
                  <p>This service covers:</p>
                  <p>Intervention Funds.</p>
                  <p>Grants and Loan.</p>
                  <p>Facilitiess.</p>
                  <p>Loan Facilitation.</p>
                </div>
              </div>
              <div className='card'>
                <div className='overlay'>
                  <h1>Consulting Services</h1>
                  <p>
                    Leveraging on the expertise and experience of skilled
                    consultants and professionals we evaluate, implement and
                    deploy custom solutions tailored to address your business
                    challenges.
                  </p>
                  <p>This service covers:</p>
                  <p>Feasibility and Viability Appraisals .</p>
                  <p>Product Authentication Solutions.</p>
                  <p>Joint Venture Business Propositions.</p>
                  <p>Financial Management Services.</p>
                  <p>Business Research.</p>
                  <p>Business Plan .</p>
                  <p>
                    IT Consulting (Website Building, SMP Management, Marketing)
                    .
                  </p>
                  <p>
                    Production Process Re-Engineering (Lean Manufacturing,
                    Production Optimization) Etc .
                  </p>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='top'>
                <h2>Request Service</h2>
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
                  <h4>Request Service</h4>
                  <textarea name='' id='' cols='30' rows='10'></textarea>
                </div>
                <div className='card'>
                  <button>Request</button>
                </div>
              </form>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  )
}

export default Services
