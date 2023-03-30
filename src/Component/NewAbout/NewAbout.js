import React from "react";
import ZumaRock from "../../images/new-images/ZumaRock.jfif";
import GuraraFalls from "../../images/new-images/GuraraFalls.jpg";
import sectionpic from "../../images/new-images/VisionImg.jfif";
import BullerStar from "../../images/Vector.png";

import "./NewAbout.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import { UIProvider } from "../../Ui";
import NewNavBar from "../NewNavBar/NewNavBar";

const NewAbout = () => {
  return (
    <div className="new-about">
      <UIProvider>
        <NewNavBar />
        <div className="topBg"></div>
        <div className="new-about-content">
          {/* <div className="overlapModal">
            <h1>
              MAN is the best way to success advance progress success in the
              manufacturing industry
            </h1>
            <p>
              MAN is the best way to success, advance, progress, success in the
              manufacturing industry The Manufacturers Association of Nigeria
              (MAN) was established in May, 1971 as a company limited by
              guarantee. The establishment of the Association was motivated by
              the desire to have a focal point of communication and consultation
              between industry on the one hand, and the government and general
              public on the other. Hitherto, there was no institutional organ
              whose central focus was to give meaning to the interests, problems
              and aspirations of the manufacturing sector.
            </p>
          </div> */}
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
                was to give meaning to the interests, problems and aspirations
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
                the benefit of all. As the collective voice of its members, MAN
                was established to promote and protect manufacturers’ collective
                interests.
              </p>
            </div>
          </div>
          <div className="core-values">
            <h1>Our Core Values</h1>
            <div className="core-values-items">
              <div
                className="core-values-item"
                style={{ backgroundColor: "#2C3513" }}
              >
                <h3>S</h3>
                <div className="right">
                  <h5>Service</h5>
                  <p>Deliver quintessential membership services.</p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "	#454B1B" }}
              >
                <h3>E</h3>
                <div className="right">
                  <h5>Engagement</h5>
                  <p>
                    Engage internal and external public to drive the growth of
                    the manufacturing sector.
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#038B49" }}
              >
                <h3>R</h3>
                <div className="right">
                  <h5>Resilience</h5>
                  <p>
                    Exceed the expectation of members despite inclement
                    operating environment.
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#6B8E23" }}
              >
                <h3>V</h3>
                <div className="right">
                  <h5>Value addition</h5>
                  <p>
                    Promote value addition along the manufacturing value chain.
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#6B8E23" }}
              >
                <h3>I</h3>
                <div className="right">
                  <h5>Integrity</h5>
                  <p>
                    Uphold integrity, professionalism and transparency in our
                    activities.
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#228B22" }}
              >
                <h3>C</h3>
                <div className="right">
                  <h5>Commitment</h5>
                  <p>
                    Ensure collaboration and commitment to the attainment of the
                    Vision and Mission of MAN.
                  </p>
                </div>
              </div>

              <div className="core-values-item centered">
                <div
                  className=""
                  style={{
                    backgroundColor: "#2C3513",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ marginRight: "20px" }}>E</h3>
                  <div className="right">
                    <h5>Excellence</h5>
                    <p>
                      Enable service-oriented system driven by excellent
                      performance.
                    </p>
                  </div>
                </div>
              </div>
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
                  MAN promotes manufacturing sector competitiveness,
                  contribution to job creation and Gross Domestic Product
                  through commitment to research and development, new
                  technologies and environmental sustainability.
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
                style={{ backgroundColor: "#2C3513" }}
              >
                <p>
                  To Provide for manufacturers all over Nigeria the means of
                  formulating, making known and influencing general policy in
                  regard to industrial, labour, social, legal, training, and
                  technical matters;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#006400" }}
              >
                <p>
                  To develop and promote the contribution of manufacturers to
                  the national economy through government and otherwise, whose
                  work may affect directly or indirectly the interests of
                  manufacturers;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#86752C" }}
              >
                <p>
                  To encourage a high standard of quality of members’ products
                  through the collective and circulation of useful information
                  and the provision of advice;
                </p>
              </div>
              <div
                className="our-obj-item"
                style={{ backgroundColor: "#2C3513" }}
              >
                <p>
                  To encourage the patronage of members’ products by Nigerians
                  and by consumers in foreign countries;
                </p>
              </div>
              <div className="our-obj-item centered">
                <div className="" style={{ backgroundColor: "#038E4B" }}>
                  <p>
                    To communicate and liaise with kindred and other bodies, in
                    the accomplishment of the objectives of the Association and
                    on subjects of common interest.
                  </p>
                </div>
              </div>
            </div>

            <p>
              By pursuing these objectives, the Association hopes that members
              would be helped to play their full part in creating wealth on
              which national economic prosperity and social progress depend.
              Overall, the task of MAN is that of helping to promote policies
              for a more stable and buoyant economy without which industry
              cannot be efficient and financially healthy.
            </p>
            <p>
              In order to do this, the Association endeavors to put across its
              viewpoints at national, state and local levels. Such viewpoints
              are the products of research and the collective experience of
              member companies. The basic philosophy of the Association is to
              ensure the well-being of its members on which the livelihood of
              their management, workers, customers and suppliers depends.
            </p>
          </div>
          <div className="how-work">
            <h1>How We Work</h1>
            <div className="how-work-con">
              <p>
                The Manufacturers Association of Nigeria (MAN) receives its
                mandate from the National Council, fourteen Branch Councils
                across the country, and ten Sectoral Groups. In addition, five
                Standing Committees, Nine Ad-Hoc Committees and Seventy-four
                sub-sectoral Groups.
              </p>
              <p>
                This engagement process reaches over 3000 MAN members who have a
                direct say in what we do and how we do it; from renewing our
                work strategies to discussing the key business issues of the day
                and re-tooling our influence.
              </p>
              <p>
                Each of our National Council and Branch Council members are
                elected to a term of office. Our Standing Committee members are
                invited to join voluntarily based on their sector experience and
                technical expertise.
              </p>
            </div>
          </div>
          <div className="nat-council">
            <p>
              The National Council, which is the Association’s Governing Board,
              is made up of a President, eight Vice Presidents, Honourary
              Treasurer, Chairmen of Branches, Chairmen of Sectoral Groups,
              elected and strategic members and life members.
            </p>
            <p>
              Past Presidents of the Association are life members representing
              special interest on the Council.
            </p>
            <p>
              In directing MAN’s affairs and determining its policy options, the
              National Council is served by an Executive Committee and five
              Standing Committees namely;
            </p>
            <div className="core-values-items">
              <div
                className="core-values-item"
                style={{ backgroundColor: "#2C3513" }}
              >
                <h3>1</h3>
                <div className="right">
                  <p>Economic Policy Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#006400" }}
              >
                <h3>2</h3>
                <div className="right">
                  <p>Finance & Establishment Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#038B49" }}
              >
                <h3>3</h3>
                <div className="right">
                  <p>Small and Medium Industries Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#86742A" }}
              >
                <h3>4</h3>
                <div className="right">
                  <p>Corporate Affairs and Strategic Planning Committee</p>
                </div>
              </div>
              <div
                className="core-values-item"
                style={{ backgroundColor: "#2E8B57" }}
              >
                <h3>5</h3>
                <div className="right">
                  <p>Infrastructure Committee</p>
                </div>
              </div>
            </div>
            <p>
              These committees, as well as other Ad-hoc Committees assist in
              evolving vital policy framework needed for the realization of the
              objectives of the Association in areas of transport, energy,
              communication, taxation, exports, consultancy, research, economic
              matters, education and training as well as consultation with
              various existing specialized bodies. The National Council
              statutorily meets four times a year. The secretary to the National
              Council is the Director General.
            </p>
          </div>
          <div className="ad-hoc">
            <h1>AD-HOC COMMITTEE</h1>
            <p>
              Ad-hoc Committees are constituted to deal with specific and
              usually temporary issues as circumstances may demand. For example,
              Sustainable Use of Natural Resources and Energy Finance (SUNREF)
              committee, African Continental Free Trade Area (AfCFTA) committee,
              Membership Review Committee etc. There are also Study Groups that
              deal with subjects of special interests to the Association as they
              arise, such as transport, energy, communication, fuel, taxation,
              exports, consultation with various existing specialized bodies.
            </p>
          </div>
          <div className="other-groups">
            <h1>SPECIAL PURPOSE VEHICLES OF MAN</h1>
            <p>
              As an extension of its service arm to members, MAN delivers
              specialized services through the Manufacturers Resource Centre
              (MRC) and the Manufacturers Power Development Company
              Limited (MPDCL).
            </p>
          </div>
          <div className="other-groups">
            <h1>SPECIAL PURPOSE GROUPS OF MAN</h1>
            <p>
              To promote the activities of specific needs of manufacturers, the
              following groups were created: MAN Export Group (MANEG), MAN Gas
              Users Group (MANGAS) and MAN Local Content Group (MANLOC).
            </p>
          </div>
          <div className="exec-committe">
            <h1>EXECUTIVE COMMITTEE</h1>
            <p>
              In order to make the National Council more responsive to the
              yearnings of members’ expectations and aspirations, the
              Association has an Executive Committee which comprise of the
              President, Vice Presidents, the Honourary Treasurer, Chairmen of
              Standing Committees and two other members appointed on merit to
              represent special interest. The Director General is the secretary
              to the committee.
            </p>
            <p>
              Essentially, the Executive Committee is empowered to perform the
              usual functions of the National Council, subject to the
              ratification of the National Council except the following issues
              which must be referred to Council for approval.
            </p>
            <div className="exec-committe-items">
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>
                  All matters affecting top management staff (appointment,
                  promotion, and discipline)
                </h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>
                  All financial matters including budget, borrowing, membership
                  subscription, levies, etc.
                </h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>National Economic Policies</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Issues relation to National Budget</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Creation of zones, branches, and sub sectoral groups</h6>
              </div>
              <div className="exec-committe-item">
                <img src={BullerStar} alt="" />
                <h6>Nomination to National Council</h6>
              </div>
            </div>
            <p>
              The Executive Committee also operates as a lobby group that
              liaises with the National Council. Members of the Committee are
              expected from time to time, to identify industrialists among
              Federal Legislators who would constitute contacts for effective
              lobbing. The Executive Committee statutorily meets four times a
              year.
            </p>
          </div>
          <div className="other-groups">
            <h1>ANNUAL GENERAL MEETING</h1>
            <p>
              Every year, MAN members are invited to attend the Annual General
              Meeting. The Annual General Meeting is used to elect the Auditors,
              elect or re-elect council members and MAN President and vote on
              wide variety of resolutions.
            </p>
          </div>
          <div className="ad-hoc">
            <h1>ANNUAL REPORT</h1>
            <p>
              Every year, the Association publishes its Annual Report which
              contains empirical based information, key highlights from the
              years’ activities and details of MAN financial information.
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
