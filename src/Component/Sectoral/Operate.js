import React from 'react'
import { ThemeProvider } from '@mui/system'
import { UIProvider } from '../../Ui'
import theme from '../../Styles/theme/Theme'
import Wall from '../Wall/Wall'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import './Sectoral.scss'
import Vector from '../../images/Vector.png'

function Operate() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='sectoral'>
          <Subscribe />
          <NavBar location='about' />
          <div className='hero_image diff'>
            <div className='cover'>
              <h1>WHERE WE OPERATE</h1>
              <p>Contact information of our different offices</p>
            </div>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3720436839126!2d3.3411232144587806!3d6.600601624094209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d0020d7c01%3A0xaa96f6bac823fb29!2sManufacturers%20Association%20Of%20Nigeria!5e0!3m2!1sen!2sng!4v1678197308053!5m2!1sen!2sng'
            width='100%'
            height='450'
            style={{ border: '0' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='sect-body'>
            <div className='cover'>
              <div>
                <h1 className='head-h1'>
                  The Association has one National Secretariat
                </h1>
                <p className='head'>
                  In order to cater for members who have near homogenous or
                  sector-specific products, MAN has ten (10) Sectoral Groups and
                  seventy seven (77) Sub-Sectoral Groups. The Groups are
                  serviced by full-time Sectoral Executives located at the
                  National Secretariat of the Association.
                </p>
              </div>
              <div className='corpor'>
                <div className='flex'>
                  <img src={Vector} alt='' />
                  <h2>MAN Corporate Offices</h2>
                </div>
                <p>
                  The Head Office of MAN, named MAN House, is strategically
                  located at No. 77, Obafemi Awolowo Way, Ikeja, Lagos State,
                  Nigeria, the twin-block edifice is on a plot of land measuring
                  2,860.771sq meters benevolently leased to the Association for
                  99 years by its first president, Chief T. Adeola Odutola, the
                  Ogbeni-Oja of Ijebu-Ode.
                </p>
              </div>
              <div className='house'>
                <div className='card'>
                  <h1>MAN House</h1>
                  <p>
                    77, Obafemi Awolowo Way Ikeja, Lagos State, Nigeria
                    <br />
                    Tel: 01-4542700, 01-4542701 <br />
                    Email: man@manufacturersnigeria.org <br /> Website:
                    www.manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Abuja Liaison Office</h1>
                  <p>
                    Suit 202, Adamawa Plaza, Central Business District 1, Abuja
                    <br />
                    Tel: 08062409324, 07089398541 <br />
                    Email: manabujaliaison@manufacturersnigeria.org
                  </p>
                </div>
              </div>
              <div className='corpor'>
                <div className='flex'>
                  <img src={Vector} alt='' />
                  <h2>Branch Offices</h2>
                </div>
                <p>
                  As a result of developments in the political structure of the
                  country, Branches were planned for the 36 states of the
                  federation and Abuja, to ensure that the needs of
                  manufacturers at both the State and Local Government levels
                  are met. However, due to the rate of industrial development in
                  some states, these states have been grouped together until
                  such a time that there are enough member companies from each
                  state to form a Branch. All Branch offices are headed by
                  full-time Executive Secretaries and a compliment of staff.
                </p>
              </div>
              <div className='house'>
                <div className='card'>
                  <h1>MAN Abuja</h1>
                  <p>
                    Suite 202, Adamawa Plaza, Central Business District 1, Abuja
                    <br />
                    Tel: 08036131330, 07089398541, <br /> E-mail:
                    manabujabranch@manufacturersnigeria.org; saokpe@yahoo.co.uk;
                    sunday.adejoh@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Anambra/Enugu/Ebonyi</h1>
                  <p>
                    18 (Formerly 2A) Chime Avenue, New Haven P.O.Box 9536,
                    Uwani-Enugu
                    <br /> Tel: 08037181922, <br />
                    E-mail: mananambraenugu@manufacturersnigeria.org;
                    enuguman2012@gmail.com;
                    sunday.sotomi@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Ikeja</h1>
                  <p>
                    2A, Akilo Road Ogba, Lagos <br />
                    Tel: 08062749019,, 012950226 Secretariat, 09037343474 MAN
                    Fire Service <br />
                    E-mail: manikeja@manufacturersnigeria.org,
                    oluchi.odimuko@manufacturersnigeria.org manikeja1@yahoo.com
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Apapa</h1>
                  <p>
                    3, Shalom Street, beside Brian Premier School By Lagoon
                    Estate Ark, off Okota Road, Amuwo Odofin Industrial Estate,
                    Amuwo, Lagos.
                    <br /> Tel: 08035440843, 09062874863, <br />
                    E-mail: manapapa@manufacturersnigeria.org,
                    manapapabranch@gmail.com
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Ogun</h1>
                  <p>
                    Km.4, (Beside Oba T. Dada Market) Ota, Idiroko Road, Sango
                    Ota, Ogun State <br />
                    Tel: 08069301620, <br />
                    E-mail: manogun@manufacturersnigeria.org,
                    manogun25@gmail.com
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Edo/Delta </h1>
                  <p>
                    Plot 4, AlexandarOgun Road, Evboriria Industrial Estate, Km
                    7, Sapele Road <br />
                    Tel: 08060642427, <br />
                    E-mail: manedodelta@manufacturersnigeria.org,
                    lucky.amachree@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Bauchi/Benue/Plateau</h1>
                  <p>
                    7, Suzi Garden, TafawaBalewa Street P.O.Box 862, Jos <br />
                    Tel: 08030627250, <br />
                    E-mail: manbauchibenue@manufacturersnigeria.org,
                    manbauchibenue@gmail.com
                    augustine.egili@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Kano Bompai</h1>
                  <p>
                    Kano Foundation Building 15, B.U.K. Road, Kano <br /> Tel:
                    08035354133; 08023097399, <br />
                    E-mail: mankanosharada@manufacturersnigeria.org;
                    attahir.gwazo@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Kano Sharada/Challawa</h1>
                  <p>
                    Kano Foundation Building 15, B.U.K. Road, Kano. <br />
                    Tel: 08035354133; 08023097399, <br />
                    E-mail: attahir.gwarzo@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Imo/Abia </h1>
                  <p>
                    15A (19A) Wetheral Road, Flat No.2 P.O.Box 973, Owerri
                    <br /> Tel: 08068501530, <br />
                    E-mail: manimoabia@manufacturersnigeria.org;
                    henryprince4real@yahoo.com;
                    cyprian.nnadozie@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Oyo/Ondo/Osun/Ekiti</h1>
                  <p>
                    5, Ighodaro Road, Jericho P.O.Box 16159, Ibadan <br />
                    Tel: 07037132642,
                    <br /> E-mail: nanzing.rimdan@manufacturersnigeria.org;
                    man.ibadan@yahoo.com
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Rivers </h1>
                  <p>
                    Plot 26, Danjuma Drive, Behind Savannah Bank P.M.B. 082,
                    Trans Amadi, Port Harcourt <br />
                    Tel: 09085296322; 09098573223, <br />
                    E-mail: manrivers@manufacturersnigeria.org;
                    manrivers23@yahoo.com; chibuzo.eze@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Kaduna North</h1>
                  <p>
                    No.1, KeffiClose Opp. BOC Gases Nig. Plc P.O.Box 4361,
                    Kaduna <br />
                    Tel: 07065640209,
                    <br /> E-mail: mankaduna@manufacturersnigeria.org;
                    Muhammad.muhammad@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Kaduna South </h1>
                  <p>
                    No.1, KeffiClose Opp. BOC Gases Nig. Plc P.O.Box 4361,
                    Kaduna <br />
                    Tel: 07065640209, <br />
                    E-mail: mankaduna@manufacturersnigeria.org;
                    Muhammad.muhammad@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1>MAN Crossriver/Akwa-Ibom</h1>
                  <p>
                    Tel: 07064372015, 08097393470, <br /> E-mail:
                    mancrossriverakwa-ibom@manufacturersnigeria.org;
                    offiong.essien@manufacturersnigeria.org
                  </p>
                </div>
                <div className='card'>
                  <h1> MAN Kwara/Kogi </h1>
                  <p>
                    Plot 1, Irewolede Road, Along Yidi Road, Ilorin, Kwara
                    State. <br />
                    Tel: 08035283467, <br />
                    E-mail: mankwarakogi@manufacturersnigeria.org;
                    mankwarakogi@hotmail.co.uk;
                    gbenga.adeola@manufacturersnigeria.org
                  </p>
                </div>
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

export default Operate
