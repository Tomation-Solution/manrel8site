import "./RevampCustomComponents.scss";

import { Link } from "react-router-dom";
import Countdown from "react-countdown";

export function RevampHomepageCard({ image, where, title }) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "#2b3513",
      }}
      to={where}
    >
      <div className="revamp-homepage-card">
        <img
          src={image}
          alt=""
          //   className="images"
          style={{
            height: "350px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <p style={{ fontWeight: "600" }}>{title}</p>
      </div>
    </Link>
  );
}

export function RevampCountDown({ dateInMilliseconds, header }) {
  const Completionist = () => <span>TODAYS THE DAY</span>;

  // Renderer callback with condition
  const renderer = (data) => {
    if (data.completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="countdown-styled">
          <span>{data.days}</span>
          <p>:</p>
          <span>{data.hours}</span>
          <p>:</p>
          <span>{data.minutes}</span>
          <p>:</p>
          <span>{data.seconds}</span>
        </div>
      );
    }
  };

  return (
    <div className="countdown-container">
      <h1 className="countdown-header">{header}</h1>
      <Countdown date={Date.now() + 432000000} renderer={renderer} />
    </div>
  );
}

export function RevampAGMCountDown() {
  const date = new Date("2023-10-04");
  const ms = date.getTime();

  return <RevampCountDown dateInMilliseconds={ms} header={"Count Down"} />;
}
