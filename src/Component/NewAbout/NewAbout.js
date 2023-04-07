import React from "react";
import ZumaRock from "../../images/new-images/ZumaRock.jfif";
import GuraraFalls from "../../images/new-images/IjeshFalls.jpg";
import sectionpic from "../../images/new-images/LookintoFuture.png";

import "./NewAbout.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { UIProvider } from "../../Ui";
import NewNavBar from "../NewNavBar/NewNavBar";
import { ServiceHelper, ServiceHelperCentered } from "./NewAboubtHelpers";

import Subscribe from "../Subscribe/Subscribe";

const NewAbout = () => {
  return (
    <div className="new-about">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <div className="topBg"></div>
        <div className="new-about-content">
          <div className="history" id="history">
            <div className="left">
              <img alt="" src={ZumaRock} />
            </div>
            <div className="right">
              <h3>Our History</h3>

              <p>
                The Manufacturers Association of Nigeria (MAN) was established
                in May, 1971 as a company limited by guarantee. The
                establishment of the Association was motivated by the desire to
                have a focal point of communication and consultation between
                industry on the one hand, and the government and general public
                on the other.
              </p>
              <p>
                Hitherto, there was no institutional organ whose central focus
                was to give meaning to the interests, challenges and aspirations
                of the manufacturing sector.
              </p>
              <p>
                Hence, the group provided a forum for the private sector to
                formulate and articulate policy suggestions that would be
                complementary to government’s efforts at policy formulation.
              </p>
              <p>
                MAN is in business to create a climate of opinion in Nigeria in
                which manufacturers can operate efficiently and profitably for
                the benefit of all. As the voice of manufacturers, MAN was
                established to promote and protect manufacturers’ collective
                interests.
              </p>
            </div>
          </div>
          <div className="core-values">
            <h1>Our Core Values</h1>
            <div className="core-values-items">
              <ServiceHelper
                others={"S"}
                details={"ervice: Deliver quintessential membership services."}
                color={"#1e250d"}
              />
              <ServiceHelper
                others={"E"}
                details={
                  "ngagement: engage internal and external public to drive the growth of the manufacturing sector."
                }
                color={"#222a0f"}
              />
              <ServiceHelper
                others={"R"}
                details={
                  "esilience: exceed the expectation of members despite inclement operating environment."
                }
                color={"#2b3513"}
              />
              <ServiceHelper
                others={"V"}
                details={
                  "alue addition: promote value addition along the manufacturing value chain."
                }
                color={"#2b3513"}
              />
              <ServiceHelper
                others={"I"}
                details={
                  "ntegrity: uphold integrity, professionalism and transparency in our activities."
                }
                color={"#3a481a"}
              />
              <ServiceHelper
                others={"C"}
                details={
                  "ommitment: ensure collaboration and commitment to the attainment of the vision and mission of MAN."
                }
                color={"#495b20"}
              />
              <ServiceHelperCentered
                others={"E"}
                details={
                  "xcellence: enable service-oriented system driven by excellent performance."
                }
                color={"#596d27"}
              />
            </div>
          </div>
          <div className="missvis">
            <div className="missvis-item">
              <div className="top">
                <img alt="" src={sectionpic} />
              </div>
              <div className="bottom">
                <h1>Our Vision</h1>
                <p>
                  To be the key driver for industrialization, sustainable
                  economic growth and development in Nigeria
                </p>
              </div>
            </div>
            <div className="missvis-item">
              <div className="top">
                <img alt="" src={GuraraFalls} />
              </div>
              <div className="bottom">
                <h1>Our Mission</h1>
                <p>
                  MAN promotes the interest of manufacturers by deepening its
                  advocacy and partnership with national and international
                  economic actors in Government, Organized Private Sector, host
                  communities and other stakeholders to foster its proactive
                  role in policy formulation and implementation.
                </p>

                <p>
                  MAN promotes manufacturing sector competitiveness, job
                  creation and Gross Domestic Product through commitment to
                  research and development, new technologies and environmental
                  sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="our-obj">
            <h1>Our Objectives</h1>
            <h4>The fundamental objectives of the Association are</h4>

            <div className="our-obj-items">
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#2b3513" }}
              >
                <p>
                  To provide for manufacturers all over Nigeria, the means of
                  formulating, making known and influencing general policy in
                  regard to industrial, labour, social, legal, training, and
                  technical matters;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <p>
                  To promote the enhancement of manufaturing contribution of
                  manufacturers to the national economy through government and
                  otherwise, whose work may affect directly or indirectly the
                  interests of manufacturers;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <p>
                  To encourage good manufacturing practices that will lead to a
                  high standard of members' products through the collection and
                  dissemination of information and the provision of advice;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <p>
                  To encourage the patronage of made-in-Nigeria products by
                  Nigerians and by consumers in foreign countries;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <p>
                  To promote the export of products of members' through constant
                  enlightenment and appropriate industrial groups such as the
                  MAN Export Group.
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#3a481a" }}
              >
                <p>
                  To interact and liaise with kindred organizations and other
                  bodies, in the accomplishment of the objectives of the
                  Association and on subjects of common interest.
                </p>
              </div>

              {/* <div className="our-obj-item centered">
                <div className="" style={{ backgroundColor: "#506223" }}>
                  <p>
                    To communicate and liaise with kindred organisations and other bodies, in
                    the accomplishment of the objectives of the Association and
                    on subjects of common interest.
                  </p>
                </div>
              </div> */}
            </div>

            <p style={{ color: "#2b3513" }}>
              By pursuing these objectives, the Association hopes that members
              would be helped to play their full part in creating wealth on
              which national economic prosperity and social progress depend.
              Overall, the task of MAN is that of helping to promote policies
              for a more stable and buoyant economy without which industry
              cannot be efficient and financially healthy.
            </p>
            <p style={{ color: "#2b3513" }}>
              In order to do this, the Association endeavors to put across its
              viewpoints at national, state and local levels. Such viewpoints
              are the products of research and the collective experience of
              member companies. The basic philosophy of the Association is to
              ensure the well-being of its members on which the livelihood of
              their management, workers, customers and suppliers depends.
            </p>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default NewAbout;
