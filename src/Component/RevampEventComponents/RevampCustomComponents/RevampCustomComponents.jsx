import "./RevampCustomComponents.scss";

import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { useMemo } from "react";
import { useCustomFetcher } from "../../../utils/customfetcher";
import { getAgmHomepage } from "../../../utils/csm-api-calls";
import EmptyState from "../../EmptyState/EmptyState";

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
          <div className="date-value-name">
            <p>Days</p>
            <span>{data.days}</span>
          </div>
          <p>:</p>

          <div className="date-value-name">
            <p>Hours</p>
            <span>{data.hours}</span>
          </div>

          <p>:</p>

          <div className="date-value-name">
            <p>Minutes</p>
            <span>{data.minutes}</span>
          </div>

          <p>:</p>

          <div className="date-value-name">
            <p>Seconds</p>
            <span>{data.seconds}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="countdown-container">
      <h1 className="countdown-header">{header}</h1>
      <Countdown date={dateInMilliseconds} renderer={renderer} />
    </div>
  );
}

export function RevampAGMCountDown() {
  const { isError, loadingState, data } = useCustomFetcher(
    "hompage-content2",
    getAgmHomepage
  );

  const renderData = useMemo(() => data, [data]);

  if (loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  const date = new Date(renderData?.agm_start_date);
  const ms = date.getTime();

  return (
    <RevampCountDown
      dateInMilliseconds={ms}
      header={renderData?.countdown_text}
    />
  );
}
