import React from "react";
import Translate from "@mui/icons-material/Translate";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import "./NavSlider.scss";
import BackDrop from "../../BackDrop/BackDrop";
import { REVAMP_EVENTS_BASE_EVENT_URL } from "../../../constants/revamped_events_constants";

const NavSlider = ({ clickfn }) => {
  return (
    <BackDrop>
      <div className={`nav-slider ${clickfn ? "come-in" : ""}`}>
        <div className="nav-slider-item">
          <span>About Us</span>
          <div className="items">
            <span className="items-span">
              <Link to={"/about"}>Our History</Link>
            </span>
            <span className="items-span">
              <Link to={"/about/advocacy-achievements"}>
                Advocacy Achievements
              </Link>
            </span>
            <span className="items-span">
              <Link to={"/about/how-we-work"}>How we Work</Link>
            </span>
            <span className="items-span">
              <Link to={"/about/private-sector"}>Our Associates</Link>
            </span>
            <span className="items-span">
              <Link to={"/about/council-members"}>Our Leadership</Link>
            </span>
            <span className="items-span">
              <Link to={"/operate"}>Where we Operate</Link>
            </span>
            <span className="items-span">
              <Link to={"/mrc-contact"}>Contact Us</Link>
            </span>
          </div>
        </div>
        <div className="nav-slider-item">
          <span className="items-span">
            <Link
              to={"/services"}
              style={{ textDecoration: "none", color: "skyblue" }}
            >
              Services
            </Link>
          </span>
          <div className="items">
            {/* <span className="items-span">
              <Link to={"/services"}>Services</Link>
            </span> */}
            <span className="items-span">
              <Link to={"/event-training"}>Consultancy,Events & Trainings</Link>
            </span>
          </div>
        </div>
        <div className="nav-slider-item">
          <span>
            <Link
              to={"/media_event"}
              style={{ textDecoration: "none", color: "skyblue" }}
            >
              Media/Event
            </Link>
          </span>
          <div className="items">
            <span className="items-span">
              <Link to={"/publications"}>Publications</Link>
            </span>
            <span className="items-span">
              <Link to={"/news"}>News</Link>
            </span>
            <span className="items-span">
              <Link to={"/gallery"}>Gallery</Link>
            </span>
            <span className="items-span">
              <Link to={"/reports"}>Reports</Link>
            </span>

            <span className="items-span">
              <Link to={REVAMP_EVENTS_BASE_EVENT_URL}>
                Annual General Meeting
              </Link>
            </span>
          </div>
        </div>
        <div className="nav-slider-item">
          <span>Membership</span>
          <div className="items">
            <span className="items-span">
              <Link to={"/become-membership"}>Why Join Man</Link>
            </span>
            <span className="items-span">
              <Link to="/membership-requirement">Membership Requirements</Link>
            </span>
            <span className="items-span">
              <Link to={"/prospective-member-login"}>Prospective Members</Link>
            </span>
            <span className="items-span">
              <Link to={"/our-members"}>Our Members</Link>
            </span>
            <span className="items-span">
              <Link to={"/faq"}>Frequently Asked Questions (FAQs)</Link>
            </span>
          </div>
        </div>
        <div className="nav-slider-item">
          <span>Our Structure</span>
          <div className="items">
            <span className="items-span">
              <Link to={"/sectoral"}>Sectoral Group</Link>
            </span>
            <span className="items-span">
              <Link to={"/about-mrc"}>MRC</Link>
            </span>
            <span className="items-span">
              <Link to={"/mpdcl"}>MPDCL</Link>
            </span>
          </div>
        </div>
        <div className="nav-slider-translate">
          Language(
          <Translate />)
        </div>
        <div className="nav-slider-join">
          <Link
            target={"_blank"}
            rel="noreferrer"
            to={"https://man.rel8membership.com/"}
          >
            <button style={{ backgroundColor: "#1f260d", color: "#fff" }}>
              LOGIN
            </button>
          </Link>
        </div>
        <div className="nav-slider-join">
          <Link to={"/join-now-page"}>
            <button>JOIN NOW</button>
          </Link>
        </div>

        <div className="closeButton" onClick={clickfn}>
          <CloseIcon />
        </div>
      </div>
    </BackDrop>
  );
};

export default NavSlider;
