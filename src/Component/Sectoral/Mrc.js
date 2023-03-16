import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import One from "../../images/mrc1.png";
import Two from "../../images/mrc2.png";
import Three from "../../images/mrc3.png";
import Four from "../../images/mrc4.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import Image from "../../images/Rectangle 224.png";

import MrcImg1 from "../../images/new-images/MrcImg1.png";

function Mrc() {
  const sectoralList = [
    {
      image: One,
      content: "Business Consulting Retainership Service",
    },
    {
      image: Two,
      content: "Financial Solutions",
    },
    {
      image: Three,
      content: "Human Capacity Building",
    },
    {
      image: Four,
      content: "Consulting Services",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NavBar location="about" />
          <div className="hero_image">
            <div className="cover">
              <h1>Manufacturers Resource Centre (MRC)</h1>
              <p>
                The only professional service organization structured to render
                business solutions for the Manufacturing sector and affiliated.
              </p>
            </div>
          </div>
          <div className="sect-body">
            <div className="cover">
              <div className="head">
                The Manufacturers Resource Centre is the Business Solution Arm
                of Manufacturers Association of Nigeria (MAN). The Manufacturers
                Resource Centre prides herself as an entity dedicated to
                proffering Business Solutions to MAN Members thus develop their
                Businesses, increase Market share and Production Excellence.
              </div>

              <div className="objectives">
                <h1>Objectives</h1>
                <div className="obj-items">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Aid our Manufacturers expand their market reach beyond our
                      shores.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Proffer current manufacturing solutions to manufacturers
                      in the areas of Information Technology, Technology,
                      Research & Development etc.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Using Training, Business Support and Business Advisory as
                      tools in achieving our purpose of aiding Manufacturers
                      devise Solutions for Growth and Development.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Using Training, Business Support and Business Advisory as
                      tools in achieving our purpose of aiding Manufacturers
                      devise Solutions for Growth and Development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="benefits">
                <h1>Benefits of working with us: </h1>
                <div className="benefit-items">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Quick access to funding options and investors including
                      Equity Investments, Venture Capitalists, CBN Intervention
                      Funds.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>Greater ease of doing Business</p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>Minimal to no Factory wastes</p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>Optimised Businesses</p>
                  </div>

                  <div className="cycle">
                    <img alt="" src={MrcImg1} />
                  </div>

                  <div>
                    <p className="benefit-blue-p">Professionalism</p>
                    <p className="benefit-blue-p">Relationship</p>
                    <p className="benefit-blue-p">Innovation</p>
                    <p className="benefit-blue-p">Continuous</p>
                    <p className="benefit-blue-p">Learning</p>
                    <p className="benefit-blue-p">Engagement</p>
                  </div>

                  <div className="benefit-item"></div>
                </div>
              </div>

              <h1 className="services-header">Our Services</h1>
              <div className="wrap-g">
                {sectoralList.map((item) => (
                  <div className="card" key={item.content}>
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2>{item.content}</h2>
                    </div>
                    <img className="main-img" src={item.image} alt="" />
                    <button>View More</button>
                  </div>
                ))}
              </div>
              <div className="longg">
                <h1> We Transform Businesses</h1>
                <p>
                  Through our services we advice and aid manufacturers in the
                  growth and development of their businesses. We are constantly
                  on the look out for rewarding opportunities to ensure their
                  enterprise thrives and is sustainable. Let us help you
                  "...become a major Industry Player"
                </p>
              </div>
              <h1 className="services-header">Our Events</h1>

              <div className="events">
                <div className="card">
                  <img src={Image} alt="" />
                  <h2>
                    Identifying Capable Importers & Registering Manufactured
                    Products in the ECOWAS, AfCFTA &Global Markets, for
                    Sustainable Export.
                  </h2>
                  <div className="icons">
                    <CalendarMonthIcon />
                    <p>25th - 26th January</p>
                  </div>
                  <div className="icons">
                    <LocationOnIcon />
                    <p>MAN HOUSE IKEJA</p>
                  </div>
                  <div className="icons">
                    <PaymentsIcon />
                    <p>NGN 70,000</p>
                  </div>
                  <div className="buttons">
                    <button>Register</button>
                  </div>
                </div>

                <div className="card">
                  <img src={Image} alt="" />
                  <h2>
                    Identifying Capable Importers & Registering Manufactured
                    Products in the ECOWAS, AfCFTA &Global Markets, for
                    Sustainable Export.
                  </h2>
                  <div className="icons">
                    <CalendarMonthIcon />
                    <p>25th - 26th January</p>
                  </div>
                  <div className="icons">
                    <LocationOnIcon />
                    <p>MAN HOUSE IKEJA</p>
                  </div>
                  <div className="icons">
                    <PaymentsIcon />
                    <p>NGN 70,000</p>
                  </div>
                  <div className="buttons">
                    <button>Register</button>
                  </div>
                </div>

                <div className="card">
                  <img src={Image} alt="" />
                  <h2>
                    Identifying Capable Importers & Registering Manufactured
                    Products in the ECOWAS, AfCFTA &Global Markets, for
                    Sustainable Export.
                  </h2>
                  <div className="icons">
                    <CalendarMonthIcon />
                    <p>25th - 26th January</p>
                  </div>
                  <div className="icons">
                    <LocationOnIcon />
                    <p>MAN HOUSE IKEJA</p>
                  </div>
                  <div className="icons">
                    <PaymentsIcon />
                    <p>NGN 70,000</p>
                  </div>
                  <div className="buttons">
                    <button>Register</button>
                  </div>
                </div>

                <div className="card">
                  <img src={Image} alt="" />
                  <h2>
                    Identifying Capable Importers & Registering Manufactured
                    Products in the ECOWAS, AfCFTA &Global Markets, for
                    Sustainable Export.
                  </h2>
                  <div className="icons">
                    <CalendarMonthIcon />
                    <p>25th - 26th January</p>
                  </div>
                  <div className="icons">
                    <LocationOnIcon />
                    <p>MAN HOUSE IKEJA</p>
                  </div>
                  <div className="icons">
                    <PaymentsIcon />
                    <p>NGN 70,000</p>
                  </div>
                  <div className="buttons">
                    <button>Register</button>
                  </div>
                </div>
              </div>
              <p className="extras">
                Member-companies are encouraged to take advantage of the
                training programs. Please also note that these trainings and
                others are available for in-house training at the convenience of
                your facility. For more information Contact Tabitha: 0816 667
                5412 mrc@manufacturersnigeria.org or
                Tabitha.hembah@manufacturersnigeria.org
              </p>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Mrc;
