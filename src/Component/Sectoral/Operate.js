import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import NewNavBar from "../NewNavBar/NewNavBar";
import { operateData } from "./OperateData";

function Operate() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />
          <div className="hero_image diff">
            <div className="cover">
              <h1>WHERE WE OPERATE</h1>
              <p>Contact information of our different offices</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1i8PKHSJGjNyfmq3QGwNNPyg_O34AXHw&ehbc=2E312F"
            width="100%"
            title="title1"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="sect-body">
            <div className="cover">
              <div>
                <h1 className="head-h1">
                  The Association has a National Secretariat
                </h1>
                <p className="head" style={{ margin: "20px 0px" }}>
                  In order to cater for members who have near homogenous or
                  sector-specific products, MAN has ten (10) Sectoral Groups and
                  seventy four (74) Sub-Sectoral Groups. The Groups are serviced
                  by full-time Sectoral Executives located at the National
                  Secretariat of the Association.
                </p>
              </div>
              <div className="corpor">
                <div className="flex">
                  <img src={Vector} alt="" />
                  <h2 style={{ margin: "20px 0px" }}>MAN Corporate Offices</h2>
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
              <div className="house">
                <div className="card">
                  <h1>MAN House</h1>
                  <p>
                    77, Obafemi Awolowo Way Ikeja, Lagos State, Nigeria
                    <br />
                    Tel: 01-4542700, 01-4542701 <br />
                    Email: man@manufacturersnigeria.org <br /> Website:
                    www.manufacturersnigeria.org
                  </p>
                </div>
                <div className="card">
                  <h1>MAN Abuja Liaison Office</h1>
                  <p>
                    Suit 202, Adamawa Plaza, Central Business District 1, Abuja
                    <br />
                    Tel: 08062409324, 07089398541 <br />
                    Email: manabujaliaison@manufacturersnigeria.org
                  </p>
                </div>
              </div>
              <div className="corpor">
                <div className="flex">
                  <img src={Vector} alt="" />
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
              <div className="house">
                {operateData.map((item) => (
                  <div className="card" key={item.id}>
                    <h1>{item.name}</h1>
                    {item.manager.map((manager, index) => (
                      <div key={index}>
                        <p>{manager.name}</p>
                        <p>{manager.title}</p>
                      </div>
                    ))}
                    {item.mangerTitle.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                    {item.otherDetails.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Operate;
