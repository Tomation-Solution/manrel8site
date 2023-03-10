import React, { useState } from 'react'
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
import Otunba from '../../images/otuba.png'
import alhaji from '../../images/alhaji.png'
import dangote from '../../images/dangote.png'
import illaysu from '../../images/illaysu.png'
import massari from '../../images/massari.png'
import nzewi from '../../images/nzewi.png'
import Prince from '../../images/Prince.png'
import rev from '../../images/rev.png'
import blank1 from '../../images/blank1.png'
import blank2 from '../../images/blank2.png'
import Subscribe from '../Subscribe/Subscribe'
import { MyButton } from '../../Styles/Section'
import { Link } from 'react-router-dom'

const Exco = [
  {
    image: Otunba,
    name: 'Otunba Francis Meshioye',
    post: 'President ',
  },
  {
    image: Prince,
    name: 'Prince Oba Okojie',
    post: 'Vice President, Lagos',
  },
  {
    image: massari,
    name: 'Engr (Chief) G. Massari,',
    post: 'Vice President, Eastern Zone ',
  },
  {
    image: illaysu,
    name: 'Engr Ilyasu Saleh',
    post: 'Vice President (Kaduna North West Zone) ',
  },
  {
    image: blank1,
    name: 'Alhaji (Dr) Kamorudeen Yusuf',
    post: 'Vice President (Western Zone) ',
  },
  {
    image: blank1,
    name: 'Mr. Mhir Iyenge',
    post: 'Vice President (North East Zone) ',
  },
  {
    image: blank1,
    name: 'Mr. Pannagiotis Katsis',
    post: 'Vice President (Multinational) ',
  },
  {
    image: blank1,
    name: 'Mr. Carl Cruz',
    post: 'Vice President (Multinational) ',
  },
  {
    image: blank1,
    name: 'Mr. Samuel Kolawole',
    post: 'Vice President (SMI) ',
  },
  {
    image: dangote,
    name: 'Alhaji Aliko Dangote, GCON',
    post: 'Vice President (MLCG) ',
  },
  {
    image: rev,
    name: 'Rev I.A. Agoye',
    post: 'National Treasurer ',
  },
  {
    image: alhaji,
    name: 'Alhaji Ali S. Madugu, mni',
    post: 'F & E Chairman ',
  },
  {
    image: blank2,
    name: 'Mrs. Kofo Akinkugbe',
    post: 'Chairman Corporate Affairs Planning Committee ',
  },
  {
    image: nzewi,
    name: 'Engr Chukwuemeka Nzewi ',
    post: 'Chairman Infrastructure Committee ',
  },
  {
    image: blank1,
    name: 'Mr. Boye Olusanya',
    post: 'Chairman Economic Policy Committee ',
  },
  {
    image: blank1,
    name: 'Alhaji Adamu Ahmed Abdlukadir',
    post: 'EXCO Member ',
  },
  {
    image: blank1,
    name: 'Mr. John Aluya',
    post: 'EXCO Member ',
  },
  {
    image: blank2,
    name: 'Dr Waslat Shittu-Titilola',
    post: 'EXCO Member ',
  },
  {
    image: blank2,
    name: 'Lady Ada Chukwudozie',
    post: 'EXCO Member ',
  },
  {
    image: blank1,
    name: 'Mr. Segun Ajayi-Kadir, mni',
    post: 'Director General ',
  },
]
function History() {
  const [showPremium, setShowPremium] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='history'>
          <Subscribe />
          <NavBar location='about' />
          <div className='hero_image'>
            <div className='cover'>
              {/* <div className='tag'>
                <h2>Our History</h2>
              </div> */}
              <h1>
                MAN is the best way to successadvanceprogresssuccess in the
                manufacturing industry
              </h1>
              <p>
                MAN is the best way to success, advance, progress, success in
                the manufacturing industry The Manufacturers Association of
                Nigeria (MAN) was established in May, 1971 as a company limited
                by guarantee. The establishment of the Association was motivated
                by the desire to have a focal point of communication and
                consultation between industry on the one hand, and the
                government and general public on the other. Hitherto, there was
                no institutional organ whose central focus was to give meaning
                to the interests, problems and aspirations of the manufacturing
                sector.
              </p>
            </div>
          </div>
          <div className='section_history'>
            <div className='cover'>
              <div className='about_details' id='history'>
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
              <div className='core_values' id='core'>
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
              <div className='section_objects' id='object'>
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
                      Nigerians and by consumers in foreign countries;
                    </li>
                    <li>
                      To communicate and liaise with kindred and other bodies,
                      in the accomplishment of the objectives of the Association
                      and on subjects of common interest.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='how_we' id='work'>
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

                  <MyButton
                    onClick={() => setShowPremium(true)}
                    sx={{
                      color: '#000',
                      borderColor: '#000',
                      marginTop: '21px',
                    }}
                  >
                    Read More
                  </MyButton>
                </div>
                <div className='right'>
                  <h2>Need to contact us?</h2>
                  <p>Find out how we can help you.</p>
                  <p>Tel: 01-4542700, 01-4542701</p>
                  <p>Email:info@manufacturersnigeria.org</p>
                </div>
              </div>
              {showPremium && (
                <div className='premium'>
                  <div className='covert'>
                    <h1>How we Work</h1>
                  </div>
                  <div className='premium-body'>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>OUR MANDATE COMES FROM OUR MEMBERS</h2>
                        <p>
                          Manufacturers Association of Nigeria (MAN) receives
                          its mandate from the National Council, sixteen (16)
                          Branch Councils across the country, and ten (10)
                          Sectoral Groups. In addition, five (5) Standing
                          Committees, nine (9) Ad-Hoc Committee and seventy-six
                          (76) Sub-Sectoral Groups. <br /> This engagement
                          process reaches over 3000 MAN members who have a
                          direct say in what we do and how we do it, from
                          renewing our work strategies to discussing the key
                          business issues of the day and re-tooling our
                          influence.
                          <br /> Each national council and branch council
                          members are elected to a term of office. Our standing
                          committee members are invited to join voluntarily
                          based on their sector experience and technical
                          expertise.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>
                          THE NATIONAL COUNCIL IS THE FORMAL GOVERNING BOARD OF
                          THE ASSOCIATION
                        </h2>
                        <p>
                          The Association has a National Council, made up of a
                          President, 8 Vice President, Treasurer, Chairmen of
                          Branches, Chairmen of Sectoral Groups and elected
                          members.
                          <br /> Past Presidents of the Association are life
                          members representing special interest on the Council.{' '}
                          <br />
                          In directing MAN’s affairs and determining its policy
                          options, the National Council is served by an
                          Executive Committee and 5 Standing Committees namely;
                        </p>
                        <ul className='one'>
                          <li>Economic Policy Committee,</li>
                          <li>Finance & Establishment Committee</li>
                          <li>Small and Medium Industries Committee,</li>
                          <li>
                            Corporate Affairs and Strategic Planning Committee,
                          </li>
                          <li>Infrastructure Committee</li>
                        </ul>
                        <p>
                          These committees, as well as other adhoc committees
                          assist in evolving vital policy framework needed for
                          the realization of the objectives of the Association
                          in areas of transport, energy, communication,
                          taxation, exports, consultancy, research, economic
                          matters, education and training as well as
                          consultation with various existing specialized bodies.
                          The National Council meets 4 times in a year. The
                          Secretary to the National Council is the Director
                          General.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>
                          THE NATIONAL COUNCIL IS COMPRISED OF ONE EXECUTIVE
                          COMMITTEE
                        </h2>
                        <p>
                          In order to make the National Council more responsive
                          to the yearnings of members’ expectations and
                          aspirations, the Association has an Executive
                          Committee which is composed of the President, Vice
                          President, the Hon. Treasurer, Chairmen Standing
                          Committees and two other members appointed on merit to
                          represent special interest. The Director General is
                          the secretary to the committee.
                        </p>
                        <p>
                          Essentially, the Executive Committee is empowered to
                          perform the usual functions of the National Council,
                          subject to the ratification of the National Council
                          except the following issues which must be referred to
                          Council for approval.
                        </p>
                        <ol className='two'>
                          <li>
                            All matters affecting top management staff
                            (appointment, promotion, and discipline)
                          </li>
                          <li>
                            All financial matters including budget, borrowing,
                            membership subscription, levies, etc.
                          </li>
                          <li>National Economic Policies</li>
                          <li>Issues relation to National Budget</li>
                          <li>
                            Creation of zones, branches, and Sub-Sectoral groups
                          </li>
                          <li>Nomination to National Council</li>
                        </ol>
                        <p>
                          The Executive Committee also operates as a lobby group
                          that liaises with the National Council. Members of the
                          Committee are expected from time to time, to identify
                          industrialists among Federal Legislators who would
                          constitute contacts for effective lobbing. The
                          Executive Committee meets 4 time a year.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>STANDING COMMITTEE</h2>
                        <p>
                          In addition to the Executive Committee, the
                          Association has 5 Standing Committees, namely:
                        </p>
                        <ul className='one'>
                          <li>Economic Policy Committee,</li>
                          <li>Finance & Establishment Committee</li>
                          <li>Small and Medium Industries Committee,</li>
                          <li>
                            Corporate Affairs and Strategic Planning Committee,
                          </li>
                          <li>Infrastructure Committee</li>
                        </ul>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>AD-HOC COMMITTEE</h2>
                        <p>
                          Ad-hoc Committees are however constituted to deal with
                          specific and usually temporary issues as circumstances
                          may demand. There are also Study Groups that deal with
                          subjects of special interests to the Association as
                          they arise, such as transport, energy, communication,
                          fuel, taxation, exports, consultation with various
                          existing specialized bodies.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>MAN EXPORT GROUP AND GAS USERS GROUP</h2>
                        <p>
                          To promote export of Nigerian goods, MAN has an Export
                          Group. MAN also has a Gas Users Group.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>ANNUAL GENERAL MEETING</h2>
                        <p>
                          Every year, our members are invited to attend our
                          Annual General Meeting. The Annual General Meeting is
                          used to elect the Auditors, elect or re-elect council
                          members and MAN President and vote on wide variety of
                          resolutions.
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>ANNUAL REPORT</h2>
                        <p>
                          Every year, Manufacturers Association of Nigeria (MAN)
                          publishes its Annual Reports which contains empirical
                          based information, key highlights from the years’
                          activites and details on our financial information.{' '}
                          <br /> *** Place some AGM reports for download ****
                        </p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='left'>
                        <img src={Image2} alt='' />
                      </div>
                      <div className='right'>
                        <h2>MAN CODE OF CONDUCT</h2>
                        <p>
                          In order to promote and develop meaningful
                          contribution of manufacturers to the national economy,
                          the National Council laid down the following code of
                          conduct for members of the Association: <br /> ·
                          Endeavour to maintain in all aspects of their
                          operations, a high level of business ethics and
                          recognized standards, thus refraining from all
                          business dealings of questionable nature, which could
                          bring the Association or the manufacturing sector as a
                          whole into disrepute. <br /> · Demonstrate transparent
                          commitment to Nigeria’s industrial objectives and
                          policies; placing Nigeria’s best interest above all
                          others and increasing the contribution of the
                          manufacturing sector to the economy, and towards the
                          improvement of the quality of life of Nigerians.{' '}
                          <br /> · Promote, encourage and improve quality
                          standards and process control in all their
                          manufacturing operations. <br /> · Refer to the
                          National Council of the Association, any disagreement
                          between members of the Association for arbitration
                          before either party can pursue such a matter further
                          (if necessary) after Council’s intervention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className='slidertd' id='exco'>
                <div className='top'>
                  <div className='covert'>
                    <h1>Our Executives</h1>
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
                  {Exco.map((item) => (
                    <SwiperSlide>
                      <div className='card'>
                        <img src={item.image} alt='' />
                        <p>{item.name}</p>
                        <p>{item.post}</p>
                      </div>
                    </SwiperSlide>
                  ))}
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
