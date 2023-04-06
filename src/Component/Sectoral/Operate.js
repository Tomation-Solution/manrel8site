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
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/Group 62.png";

function Operate() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />
          <NewImageBanner
            image={backImage}
            header={"Where we Operate"}
            details={["Contact information of our different offices"]}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.367310454374!2d3.3413191932367914!3d6.6011929240879645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228ce24bd1d%3A0x5388ca4742e701eb!2sMAN%20House%2C%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680258368303!5m2!1sen!2sng"
            width="100%"
            title="title1"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="sect-body">
            <div className="cover">
              <div>
                <h1 className="head-h1" style={{ color: "#2b3513" }}>
                  The Association has a National Secretariat
                </h1>
                <p
                  className="head"
                  style={{ margin: "20px 0px", color: "#2b3513" }}
                >
                  In order to cater for members who have near homogenous
                  products, MAN has ten (10) Sectoral Groups and seventy four
                  (74) Sub-Sectoral Groups. The Groups are serviced by full-time
                  Sectoral Executives located at the National Secretariat of the
                  Association.
                </p>
              </div>
              <div className="corpor">
                <div className="flex">
                  <img src={Vector} alt="" />
                  <h2 style={{ margin: "20px 0px", color: "#2b3513" }}>
                    MAN Corporate Offices
                  </h2>
                </div>
                <p style={{ color: "#2b3513" }}>
                  The Head Office of MAN, named MAN House, is strategically
                  located at No. 77, Obafemi Awolowo Way, Ikeja, Lagos State,
                  Nigeria.
                </p>
              </div>
              <div className="house">
                <div className="card">
                  <h1>MAN House</h1>
                  <p>
                    77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria
                    <br />
                    01-4542700, 01-4542701 <br />
                    info@manufacturersnigeria.org <br /> Website:
                    www.manufacturersnigeria.org
                  </p>
                </div>
                <div className="card">
                  <h1>MAN Abuja Liaison Office</h1>
                  <p style={{ wordBreak: "break-word" }}>
                    Suit 202, Adamawa Plaza, Abogo Largema Street, Central
                    Business District 1, Abuja
                    <br />
                    08062409324, 07089398541 <br />
                    manabujaliaison@manufacturersnigeria.org
                  </p>
                </div>
              </div>
              <div className="corpor">
                <div className="flex">
                  <img src={Vector} alt="" />
                  <h2 style={{ color: "#2b3513" }}>Branch Offices</h2>
                </div>
                <p style={{ color: "#2b3513" }}>
                  MAN covers our members operations across the country from our
                  14 Branch offices. All Branch offices are headed by full-time
                  Executive Secretaries and a compliment of staff.
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
                      <p key={index} style={{ wordBreak: "break-word" }}>
                        {item}
                      </p>
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
