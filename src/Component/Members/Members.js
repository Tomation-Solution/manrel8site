import React from "react";
import "./Members.scss";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Styles/theme/Theme";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import { useNavigate } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import Image2 from "../../images/Vector.png";
import Point1 from "../../images/Frame 44-1.png";
import Point2 from "../../images/Frame 44.png";
import Point3 from "../../images/Frame 45.png";
import Point4 from "../../images/Frame 46-1.png";
import Point5 from "../../images/Group 6.png";
import Point6 from "../../images/Frame 46.png";
import NewNavBar from "../NewNavBar/NewNavBar";

function Members() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="members">
          <Subscribe />
          <NewNavBar />
          <div className="hero_image">
            <div className="cover">
              <div className="tag"></div>
              <h1>Membership</h1>
              <p>See our esteemed members across the country</p>
            </div>
          </div>

          <div className="why">
            <div className="man">
              <h1>Why Join MAN?</h1>
              <p>Here are cardinal points why you should join MAN.</p>
            </div>
            <div className="point">
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>CREDIBLITY/IDENTITY</h1>
                  <p>
                    The Association provides credibility and identity to
                    member-companies as bonafide Manufacturers that can be
                    traced and not fake manufacturers hiding to clone or fake
                    products.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>POLICY FORMULATION</h1>
                  <p>
                    MAN provides a platform for member companies to contribute
                    to the formulation of an emerging Government policy or
                    amendment of an existing one.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>SECTORAL MEETINGS</h1>
                  <p>
                    MAN provides a platform for member-companies in similar
                    production line to interact in a very friendly and frank
                    manner on subsector/sector specific issues and challenges.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>INFORMATION DISEMINATION</h1>
                  <p>
                    The Association provides member-companies with a platform
                    that ensures that they are the first to know about a new
                    government circular or memo that will affect manufacturers.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>CONCESSIONS</h1>
                  <p>
                    Member-companies enjoy concessions and considerations
                    approved by the Federal Government Agencies and Parastatals
                    to encourage bonafide manufacturers. Such as the Standards
                    Organisation of Nigeria (SON), National Agency for Food and
                    Drug Administration and Control (NAFDAC), Nigeria Customs
                    Service (NCS) and Bank of Industry (BOI)
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>CONFIRMATION OF MEMBERSHIP</h1>
                  <p>
                    The Association provides confirmation of membership to
                    enquiries from foreign and local Organizations.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefits">
              <div className="top">
                <h1>MEMBERSHIP BENEFITS</h1>
              </div>
              <div className="row1">
                <div className="card up">
                  <img src={Point1} alt="" />
                  <p>CREDIBILITY AS MANUFACTURER</p>
                </div>
                <div className="card">
                  <img src={Point2} alt="" />
                  <p>DIRECT INTERVENTION ON MEMBERS’ PROBLEMS</p>
                </div>
                <div className="card up">
                  <img src={Point3} alt="" />
                  <p>CONSULTANCY/ADVISORY SERVICES</p>
                </div>
              </div>
              <div className="row2">
                <div className="card up">
                  <img src={Point4} alt="" />
                  <p>
                    PUBLIC POLICY ADVOCACY FOR FAVOURABLE INVESTMENT/INDUSTRIAL
                    POLICIES
                  </p>
                </div>
                <div className="card">
                  <img src={Point5} alt="" />
                  <p>
                    RECOGNITION BY GOVERNMENT AGENCIES AND BUSINESS COMMUNITY
                  </p>
                </div>
                <div className="card up">
                  <img src={Point6} alt="" />
                  <p>PROMOTING MADE-IN-NIGERIA PRODUCTS</p>
                </div>
              </div>
            </div>
            <div className="respo">
              <h1>RESPONSIBILITIES OF MEMBERS</h1>
              <p>
                To effectively discharge its role as an effective Business
                Association, MAN expects its members to loyally discharge the
                following responsibilities and obligations:
              </p>
            </div>
            <div className="acrds">
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>RECOGNITION</h1>
                  <p>
                    Every member should: <br /> Endeavour to maintain in all
                    aspects of their operations, a high level of business ethics
                    and recognized standards, thus refraining from all business
                    dealings of questionable nature, which could bring the
                    Association or the manufacturing sector as a whole into
                    disrepute. <br /> Demonstrate transparent commitment to
                    Nigeria’s industrial objectives and policies; placing
                    Nigeria’s best interest above all others and increasing the
                    contribution of the manufacturing sector to the economy, and
                    towards the improvement of the quality of life of Nigerians.{" "}
                    <br />
                    Promote, encourage and improve quality standards and process
                    control in all their manufacturing operations. <br /> Refer
                    to the National Council of the Association, any disagreement
                    between members of the Association for arbitration before
                    either party can pursue such a matter further (if necessary)
                    after Council’s intervention.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>Payment of Subscription</h1>
                  <p>
                    Every member is bound to further, to the best of its
                    ability, the objects, interest and influence of the
                    Association.
                    <br />
                    Each member will be required to pay an annual subscription
                    to meet the running expenses of the Association.
                    <br />
                    The subscription shall be calculated in accordance with the
                    decision of the National Council and shall be paid annually
                    at the commencement of each Association year or in the case
                    of new members at the time of application for membership.
                    <br />
                    Each member shall submit to the Director General an annual
                    return showing details required for the assessment of the
                    subscriptions due.
                    <br />
                    Any member wishing to resign its membership of the
                    Association may only do so by giving at least three months’
                    notice in writing of its intention to resign.
                    <br />
                    Any member resigning shall pay all subscriptions due from it
                    and shall cease, as from the end of the period of its
                    notice, to have any claim on the Association in respect of
                    its funds.
                    <br />
                    Any member who shall fail in observance of any of the
                    Articles of the Association or act in any manner prejudicial
                    to the interest of the Association may be excluded from the
                    Association on the recommendation of the National Council
                    and confirmed at a General Meeting.
                    <br />A member so excluded shall forfeit all claims to a
                    refund of the money paid by it to the Association on its
                    admission as a member thereof, or by way of annual
                    subscription as the case may be and shall cease to be a
                    member of the Association.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>General Financial Support of the Association</h1>
                  <p>
                    Members are required to give financial support including
                    sponsorship of activities to the Association as at when
                    requested.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>Supply of Data</h1>
                  <p>
                    Members should support the Association in all its
                    undertakings by prompt provision of data/ information when
                    requested and by constructive participation in
                    representations and meetings with Government on behalf of
                    the Association when required.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>Capacity Building for Members</h1>
                  <p>
                    Members are expected to participate in MAN training
                    programmes with a view to improving their product quality
                    and manpower capacity.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="left">
                  <img src={Image2} alt="" />
                </div>
                <div className="right">
                  <h1>Corporate Social Responsibility</h1>
                  <p>
                    Members of MAN should demonstrate responsible corporate
                    citizenship at all times. <br />
                    Members should therefore endeavor to support the society in
                    the provision of: <br />
                    Utilities <br /> Maintenance of law and order <br />
                    Other philanthropic activities to support the less
                    privileged and the socially disadvantaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rquire">
            <div className="over">
              <h1>Check Out our membership requirements</h1>
              <button onClick={() => navigate("/membership-requirement")}>
                Membership requirements
              </button>
            </div>
          </div>

          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Members;
