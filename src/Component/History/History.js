import React from 'react'
import './History.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import Image from '../../images/div-14.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Image2 from '../../images/Vector.png'

function History() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='history'>
          <NavBar location='about' />
          <div className='hero_image'>
            <div className='cover'>
              <div className='tag'>
                <h2>Our History</h2>
              </div>
              <h1>
                MAN is the best way to successadvanceprogresssuccess in the
                manufacturing industry
              </h1>
              <p>
                The Manufacturers Association of Nigeria (MAN) was established
                in May, 1971 as a company limited by guarantee. The
                establishment of the Association was motivated by the desire to
                have a focal point of communication and consultation between
                industry on the one hand, and the government and general public
                on the other. Hitherto, there was no institutional organ whose
                central focus was to give meaning to the interests, problems and
                aspirations of the manufacturing sector.
              </p>
            </div>
          </div>
          <div className='section_history'>
            <div className='cover'>
              <div className='about_details'>
                <h2>OUR HISTORY</h2>
                <p>
                  The establishment of the Manufacturers Association of Nigeria
                  was to provide a platform for the private sector to formulate
                  and articulate policy suggestions that would be complementary
                  to governments efforts at policy formulation. MAN is in
                  business to create a climate of opinion in this country in
                  which manufacturers can operate efficiently and profitably for
                  the benefit of all. As the collective voice of its members,
                  MAN was established to promote and protect manufacturers
                  collective interests.
                </p>
                <p className=''>
                  The establishment of the Manufacturers Association of Nigeria
                  was therefore seen as a forum for the private sector to
                  formulate and articulate policy suggestions that would be
                  complementary to government’s efforts at policy formulation.
                  MAN is in business to create a climate of opinion in this
                  country in which manufacturers can operate efficiently and
                  profitably for the benefit of all. As the collective voice of
                  its members, MAN was established to promote and protect
                  manufacturers’ collective interests.
                </p>
              </div>
              <div className='core_values'>
                <h2>Core Values</h2>
                <ul>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Service</p>
                      <p>Deliver quintessential membership services.</p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Engagement</p>
                      <p>
                        Engage internal and external public to drive the growth
                        of the manufacturing sector.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Resilience</p>
                      <p>
                        Exceed the expectation of members despite inclement
                        operating environment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Value addition</p>
                      <p>
                        Promote value addition along the manufacturing value
                        chain.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Integrity</p>
                      <p>
                        Uphold integrity, professionalism and transparency in
                        our activities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Commitment</p>
                      <p>
                        Ensure collaboration and commitment to the attainment of
                        the Vision and Mission of MAN.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='left'>
                      <img src={Image2} alt='' />
                    </div>
                    <div className='right'>
                      <p>Excellence</p>
                      <p>
                        Enable service-oriented system driven by excellent
                        performance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='section-divs'>
                <div className='card'>
                  <div className='overlay'>
                    <h1>Our Vision</h1>
                    <p>
                      “To be the key driver for Industrialization, sustainable
                      Economic Growth and Development in Nigeria”
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='overlay'>
                    <h1>Our Mission Statement</h1>
                    <p>
                      "1. MAN promotes the interest of manufacturers by
                      deepening its advocacy and partnership with national and
                      international economic actors in Government, Organized
                      Private Sector, host communities and other stakeholders to
                      foster its proactive role in policy formulation and
                      implementation. ”
                    </p>
                    <p>
                      2. "MAN promotes manufacturing sector competitiveness,
                      contribution to job creation and Gross Domestic Product
                      through commitment to research and development, new
                      technologies and environmental sustainability. ”
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='overlay'>
                    <h1>Policy & Advocacy</h1>
                    <p>
                      "1. MAN promotes the interest of manufacturers by
                      deepening its advocacy and partnership with national and
                      international economic actors in Government, Organized
                      Private Sector, host communities and other stakeholders to
                      foster its proactive role in policy formulation and
                      implementation. ”
                    </p>
                    <p>
                      2. "MAN promotes manufacturing sector competitiveness,
                      contribution to job creation and Gross Domestic Product
                      through commitment to research and development, new
                      technologies and environmental sustainability. ”
                    </p>
                  </div>
                </div>
              </div>
              <div className='section_objects'>
                <div className='left'>
                  <img src={Image} alt='' />
                </div>
                <div className='right'>
                  <h2>Our Objectives</h2>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <ul>
                    <li>
                      Provide for manufacturers all over Nigeria the means of
                      formulating, making known and influencing general policy
                      in regard to industrial, labour, social, legal, training,
                      and technical matters;
                    </li>
                    <li>
                      To develop and promote the contribution of manufacturers
                      to the national economy through government and otherwise,
                      whose work may affect directly or indirectly the interests
                      of manufacturers;
                    </li>
                    <li>
                      To encourage a high standard of quality of members’
                      products through the collective and circulation of useful
                      information and the provision of advice;
                    </li>
                    <li>
                      To encourage the patronage of members’ products by
                      Nigerians and by consumers in foreign countries; To
                      communicate and liaise with kindred and other bodies, in
                      the accomplishment of the objectives of the Association
                      and on subjects of common interest.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='how_we'>
                <div className='left'>
                  <h2>How We Work?</h2>
                  <p>
                    The Manufacturers Association of Nigeria (MAN) was
                    established in 1971 as a company limited by guarantee. The
                    establishment of the Association was motivated by the desire
                    to have a focal point of communication and consultation
                    between industry on the one hand, and the government and
                    general public on the other.
                  </p>
                </div>
                <div className='right'>
                  <h2>Need to contact us?</h2>
                  <p>Find out how we can help you.</p>
                  <p>Tel: 01-4542700, 01-4542701</p>
                  <p>Email:info@manufacturersnigeria.org</p>
                </div>
              </div>
              <div className='slidertd'>
                <div className='top'>
                  <div className='covert'>
                    <h1>Who We Are</h1>
                    <p>
                      The Executive Committee is a group of experienced
                      professionals duly elected by MAN members and entrusted
                      with the obligation to conduct the affairs of the
                      Association according to its constitution
                    </p>
                  </div>
                </div>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    900: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='card'>
                      <img src={Image} alt='' />
                      <p>Otunba Francis Meshioye </p>
                      <p>President</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='card'>
                      <img src={Image} alt='' />
                      <p>Mr. John Aluya </p>
                      <p>Vice President, Lagos</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='card'>
                      <img src={Image} alt='' />
                      <p>ENGR Chukwuemeka Nzewi </p>
                      <p>Vice President, Eastern Zone</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='card'>
                      <img src={Image} alt='' />
                      <p>President</p>
                      <p>President</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
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

export default History
