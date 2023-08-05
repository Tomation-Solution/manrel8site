import "./RevampedEventVenue.css";
import Button from "../../Component/RevampEventComponents/Button/Button";
import H1tag from "../../Component/RevampEventComponents/H1tag/H1tag";
import Ptag from "../../Component/RevampEventComponents/Ptag/Ptag";
import { Link } from "react-router-dom";

const RevampedEventVenue = () => {
  return (
    <div className="Venuecontainer">
      <div className="top">
        <div className="text">
          <H1tag content="Venue" variant="black" />
          <Ptag
            content="Lagos Oriental Hotel, Victoria Island, Lagos, Nigeria"
            variant="black"
          />
          <Link to="/revamped-events/register">
            <Button content="Register Now" variants="graysquarebackground" />
          </Link>
        </div>
      </div>

      <div className="map-venue">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.367310454374!2d3.3413191932367914!3d6.6011929240879645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228ce24bd1d%3A0x5388ca4742e701eb!2sMAN%20House%2C%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680258368303!5m2!1sen!2sng"
          title="title1"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <img
          className="map-image"
          src={
            "https://4.bp.blogspot.com/-3FnogmCnfBQ/VJaFXuTJ-5I/AAAAAAAAMnY/nLEA6GXYPLg/s1600/Oriental-hotel-Lekki-001.jpg"
          }
          alt=""
        />
      </div>

      <br />
      <br />

      <div className="buttoncontainer">
        <Link to="/revamped-events/register">
          <Button content="Register Now" variants="graysquarebackground" />
        </Link>
      </div>
    </div>
  );
};

export default RevampedEventVenue;
