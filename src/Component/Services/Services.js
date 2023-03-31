import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Styles/theme/Theme";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./Services.scss";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";
import { Link } from "react-router-dom";
import NewImageBanner from "../NewImageBanner/NewImageBanner";

function Services() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="services-services">
          <Subscribe />
          <NewNavBar />
          <NewImageBanner
            header={"Services"}
            details={[
              "     The only sector-specific Business Membership Organization (BMO) structured to render advocacy services to its members.",
            ]}
          />

          <div className="services-newservices">
            <div className="services-head">
              <h1>Core Services</h1>
            </div>
            <div className="services-wrap diff">
              <div className="services-card">
                <div className="services-overlay">
                  <h1>BUSINESS DEVELOPMENT SERVICES</h1>
                  <p>
                    Identify possible problems affecting SME‘s by preparing a
                    detailed technical due diligence report through review of
                    their operations
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>BUSINESS INFORMATION SERVICES</h1>
                  <p>
                    Sourcing of raw materials, Machinery and equipment, Markets,
                    Model business profiles etc
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>BUSINESS CONSULTANCY</h1>
                  <p>
                    Investment and financial advisory services, Local and
                    international business linkages
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>ECONOMIC RESEARCH AND ANALYSIS</h1>
                  <p>
                    Provision of Economic research and analysis for
                    manufacturers, government and the organized private sector
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Public Policy Advocacy</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Monitoring and analysing of government policies</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>
                    Preparation of memoranda on topical industrial and economic
                    issues
                  </h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Capacity building and manpower development</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Liaison activities for members</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Seminars and Conferences</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>
                    Information and Communication Technology based Services
                  </h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>
                    Promotion and organization of trade missions and exhibitions
                  </h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Promotion of Made-in-Nigeria products</h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>
                    Reconciliation and harmonization of diverse interests of
                    members
                  </h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>
                    Specific intervention on members and sectoral problems
                  </h1>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Publications</h1>
                </div>
              </div>
            </div>
            <div className="services-head">
              <h1>Manufacturers Resource Centre (MRC) Services</h1>
              <p>
                The Manufacturers Resource Centre is the Business Solution Arm
                of Manufacturers Association of Nigeria (MAN). The Manufacturers
                Resource Centre prides herself as an entity dedicated to
                proffering Business Solutions to MAN Members thus develop their
                Businesses, increase Market share and Production Excellence.
              </p>
            </div>
            <div className="services-wrap">
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Business Consulting Retainer ship Service</h1>
                  <p>
                    With our brand, expertise and business leverages, valuable
                    in growing turnover volume, company customer base and
                    production capacity, companies engage us as their Business
                    Consultant to aid them better their business strategizes and
                    attain targeted business growth.
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Human Capacity Building</h1>
                  <p>
                    We understand that Learning and Development leads to
                    increased performance, better lives and work. We bring to
                    you a whole new learning experience through our In-plant and
                    General Trainings.
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Financial Solutions</h1>
                  <p>
                    It’s now possible to expand your Business and Operations.
                    Come take advantage of available funding windows,
                    Intervention Fund and other Venture Capital investments,
                    that would suit your funding need.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-btn-center">
              <Link to="/about-mrc">
                <button>See More</button>
              </Link>
            </div>
            <div className="services-head">
              <h1>MAN Power Development Company Limited (MPDCL).</h1>
            </div>
            <div className="services-wrap dit">
              <div className="services-card">
                <div className="services-overlay">
                  <h1>MAN Independent Power Project (IPP)</h1>
                  <p>
                    MPDCL has just completed the Phase I of the 2MW Power Plant
                    for members at the Ogba/Acme Industrial Cluster. MPDCL
                    Project 2 and 3 proposed for Amuwo Odofin industrial cluster
                    and the Lagos Ibadan Expressway industrial corridor
                    underway.
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Facilitation of The MAN-SUNREF Funds</h1>
                  <p>
                    MPDCL currently provides facilitation services for members
                    to seamlessly access the MAN-SUNREF $USD70million funds
                    targeted for industries to improve their power energy
                    projects so as to achieve energy resource optimization and
                    energy efficiency.
                  </p>
                </div>
              </div>
              <div className="services-card">
                <div className="services-overlay">
                  <h1>Eligible Customer (EC) Appliction To NERC</h1>
                  <p>
                    MPDCL currently provides facilitations service for members
                    whose power off-take is 2MWh/h to process EC Approval. The
                    facilitation involves providing accurate documentations for
                    application to NERC
                  </p>
                </div>
              </div>
            </div>
            <div className="services-btn-center">
              <Link to="/mpdcl">
                <button>See More</button>
              </Link>
            </div>
          </div>
          <div className="services-new_member">
            <div className="services-right">
              <div className="services-top">
                <h2>Request Service</h2>
                <p>Let's start by entering your information</p>
                <p>All fields are required unless otherwise indicated.</p>
              </div>
              <form action="">
                <div className="services-card">
                  <h4>Full name</h4>
                  <input type="text" />
                </div>
                <div className="services-card">
                  <h4>Email Address</h4>
                  <input type="email" />
                </div>
                <div className="services-card">
                  <h4>Company Name</h4>
                  <input type="text" />
                </div>
                <div className="services-card">
                  <h4>Request Service</h4>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="services-card">
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
  );
}

export default Services;
