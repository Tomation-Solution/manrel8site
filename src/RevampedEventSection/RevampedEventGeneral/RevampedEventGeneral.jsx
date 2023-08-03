import "./RevampedEventGeneral.css";
import Button from "../../Component/RevampEventComponents/Button/Button";
import img from "../../assets/reusedimages/newgeneralmeeting.jpeg";
import { Link } from "react-router-dom";

const RevampedEventGeneral = () => {
  return (
    <div className="Generalcontainer">
      <div className="text">
        <div className="generaltext">
          <h1>Annual General Meeting 2023</h1>

          <Link to="/revamped-events/register">
            <Button content="Register" variants="graysquarebackground" />
          </Link>
        </div>
        <div className="generalimage">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="days">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>DAY 1</h1>
        <div className="inside">
          <p>October 17, 2023</p>
          <h2>Opening Ceremony for Made In Nigeria Exhibition</h2>
          <Link to="/revamped-events/openingceremony">
            <Button content="See Highlights" />
          </Link>
        </div>
      </div>

      <div className="days">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>DAY 2</h1>
        <div className="inside">
          <p>October 18, 2023</p>
          <h2>Public Session / 3rd Adeola Odutola Lecture Exhibition</h2>
          <Link to="/revamped-events/public">
            <Button content="See Highlights" />
          </Link>
        </div>
      </div>

      <div className="days">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>DAY 3</h1>
        <div className=" inside">
          <p>October 19, 2023</p>
          <h2>Private Session Exhibition</h2>

          <Link to="/revamped-events/private">
            <Button content="See Highlights" />
          </Link>
        </div>
      </div>

      <div className="daysbuttoncontainer">
        <Link to="/revamped-events/register">
          <Button content="Register" variants="graysquarebackground" />
        </Link>
      </div>
    </div>
  );
};

export default RevampedEventGeneral;
