import React from "react";
import "./RevampedEventNavBar.scss";
import { Link, useLocation } from "react-router-dom";
import { revampedEventNavigationItems } from "../../constants/revamped_events_constants";

function RevampedEventNavBar() {
  const location = useLocation();

  return (
    <div className="revamped-event-navbar">
      {revampedEventNavigationItems.map((item, index) => (
        <div
          key={index}
          className={`nav-items ${
            location.pathname === item.link ? "active" : ""
          }`}
        >
          <Link to={item.link}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default RevampedEventNavBar;
