import "./RevampEventHome.css";

import img4 from "../../assets/reusedimages/homereused.svg";
import img5 from "../../assets/reusedimages/calendar.svg";
import img6 from "../../assets/reusedimages/venue.svg";
import Button from "../../Component/RevampEventComponents/Button/Button";
import {
  RevampAGMCountDown,
  RevampHomepageCard,
} from "../../Component/RevampEventComponents/RevampCustomComponents/RevampCustomComponents";

import { Link } from "react-router-dom";
import { event_speakers_details } from "../../constants/event_speakers_details";

const RevampEventHome = () => {
  return (
    <div className="Homecontainer">
      <div className="homeheader">
        <div className="homeheaderpicture">
          <div className="homeheadertext">
            <h1>
              Setting the agenda for competitive manufacturing under the AfCFTA:
              <br />
              What Nigeria needs to do.
            </h1>
            <p>2023-05-10</p>

            <p>Ikeja</p>
            <Link to="/revamped-events/register">
              <Button content="Register" variants="graysquarebackground" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hometext">
        <h2>The 51st Annual General Meeting</h2>
        <p>
          The 51st Annual General Meetings of the Manufacturers Association of
          Nigeria will be held in Lagos at Oriental Hotel. In its usual
          tradition, it will feature a three-day Made in Nigeria Exhibition, a
          private session, and a public session. The 3rd Edition of the Adeola
          Odutola Lecture will serve as the public session of the 51st AGM. This
          year's theme is 'Setting the Agenda for Competitive Manufacturing
          under the African Continental Free Trade Area (AfCFTA): What Nigeria
          Needs to Do.' It is considered a critical discussion on the state of
          the nation regarding manufacturing and the agenda for competitive
          manufacturing under the AfCFTA. We are honored to have distinguished
          speakers, panelists, and guests from various sectors, including top
          government officials, MAN member-companies, our friends from the
          international community, and thoughtful leaders. We invite all
          delegates to join us in this historic celebration and share their
          insights and perspectives. We look forward to welcoming you at the
          51st AGM.
        </p>
      </div>
      <div className="homeimages">
        {event_speakers_details.map((item, index) => (
          <RevampHomepageCard
            key={index}
            image={item.speaker_image}
            title={item.intro_text}
            where={`/revamped-events/speaker/details/${item.id}`}
          />
        ))}
      </div>

      <div className="homeimages">
        <RevampHomepageCard
          image={img4}
          title={"Participate in the 3-day Exhibition"}
          where={"/revamped-events/exhibition"}
        />

        <RevampHomepageCard
          image={img5}
          title={"Save The Date 17-19 October 2023"}
          where={"/revamped-events"}
        />

        <RevampHomepageCard
          image={img6}
          title={"The Venue"}
          where={"/revamped-events/venue"}
        />

        <br />
        <br />
      </div>

      <br />
      <br />
      <RevampAGMCountDown />

      <div className="buttoncontainer">
        <Link to="/revamped-events/register">
          <Button
            content="Click here to register"
            variants="graybackground100"
          />
        </Link>
      </div>
    </div>
  );
};

export default RevampEventHome;
