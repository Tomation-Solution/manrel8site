import React, { useState } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../images/manlogo2.png";
import { Link, useNavigate, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NavBar({ location }) {
  const [handleToggle, setHandleToggle] = useState("false");
  const navigate = useNavigate();
  const [showAbout, setshowAbout] = useState("false");
  const [showInsight, setshowInsight] = useState("false");
  const [showMember, setshowMember] = useState("false");
  const [showServices, setshowServices] = useState("false");
  const [showStructure, setshowStructure] = useState("false");

  const closeOthers1 = () => {
    if (showInsight === !"false") {
      setshowInsight("false");
    }
    if (showMember === !"false") {
      setshowMember("false");
    }
    if (showServices === !"false") {
      setshowServices("false");
    }
    if (showStructure === !"false") {
      setshowStructure("false");
    }
  };
  const closeOthers2 = () => {
    if (showAbout === !"false") {
      setshowAbout("false");
    }
    if (showMember === !"false") {
      setshowMember("false");
    }
    if (showServices === !"false") {
      setshowServices("false");
    }
    if (showStructure === !"false") {
      setshowStructure("false");
    }
  };
  const closeOthers3 = () => {
    if (showAbout === !"false") {
      setshowAbout("false");
    }
    if (showInsight === !"false") {
      setshowInsight("false");
    }
    if (showServices === !"false") {
      setshowServices("false");
    }
    if (showStructure === !"false") {
      setshowStructure("false");
    }
  };
  const closeOthers4 = () => {
    if (showAbout === !"false") {
      setshowAbout("false");
    }
    if (showInsight === !"false") {
      setshowInsight("false");
    }
    if (showMember === !"false") {
      setshowMember("false");
    }
    if (showStructure === !"false") {
      setshowStructure("false");
    }
  };
  const closeOthers5 = () => {
    if (showAbout === !"false") {
      setshowAbout("false");
    }
    if (showInsight === !"false") {
      setshowInsight("false");
    }
    if (showMember === !"false") {
      setshowMember("false");
    }
    if (showServices === !"false") {
      setshowServices("false");
    }
  };
  return (
    <div className={handleToggle ? "navBar" : "navBar collapse"}>
      <div className="nav-menu">
        <div className="logo">
          <img
            className="img1"
            src={Logo}
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <div className="toggle-icon">
          <div className="menu-icon">
            {handleToggle ? (
              <MenuIcon
                className="drop-icon"
                onClick={() => setHandleToggle(!handleToggle)}
              />
            ) : (
              <CloseIcon
                className=" drop-icon times"
                onClick={() => setHandleToggle(!handleToggle)}
              />
            )}
          </div>
        </div>
        <div className="nav-list">
          <div className="nav-row">
            <div className="listd">
              <div
                className="head"
                onClick={() => {
                  setshowAbout(!showAbout);
                  closeOthers1();
                }}
              >
                <p>About Us</p>
                <KeyboardArrowDownIcon />
              </div>
              {!showAbout && (
                <div className="lest-body">
                  <ul
                    onClick={() => {
                      setshowAbout(!showAbout);
                    }}
                  >
                    {location === "about" ? (
                      <>
                        <a
                          href="/about#history"
                          onClick={() => setHandleToggle(!handleToggle)}
                        >
                          <li>Our History</li>
                        </a>
                        <a
                          href="/about#core"
                          onClick={() => setHandleToggle(!handleToggle)}
                        >
                          <li>Our Core Values</li>
                        </a>
                        <a
                          href="/about#object"
                          onClick={() => setHandleToggle(!handleToggle)}
                        >
                          <li>Our Objectives</li>
                        </a>
                        <a
                          href="/about#work"
                          onClick={() => setHandleToggle(!handleToggle)}
                        >
                          <li>How We Work</li>
                        </a>
                        <a
                          href="/exec-committee"
                          onClick={() => setHandleToggle(!handleToggle)}
                        >
                          <li>Executive Commitees</li>
                        </a>
                      </>
                    ) : (
                      <>
                        <Link to="/about#history">
                          <li>Our History</li>
                        </Link>
                        <Link to="/about#core">
                          <li>Our Core Values</li>
                        </Link>
                        <Link to="/about#object">
                          <li>Our Objectives</li>
                        </Link>
                        <Link to="/about#work">
                          <li>How We Work</li>
                        </Link>
                        <Link to="/exec-committee">
                          <li>Executives Commitees</li>
                        </Link>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="listd">
              <div
                className="head"
                onClick={() => {
                  setshowServices(!showServices);
                  closeOthers4();
                }}
              >
                <p>Services</p>
                <KeyboardArrowDownIcon />
              </div>
              {!showServices && (
                <div className="lest-body">
                  <ul onClick={() => setshowServices(!showServices)}>
                    <Link to="/mrc">
                      <li>MRC</li>
                    </Link>
                    <Link to="/mpdcl">
                      <li>MPCDL</li>
                    </Link>
                    <Link to="/services">
                      <li>Other Services</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="listd">
              <div
                className="head"
                onClick={() => {
                  setshowInsight(!showInsight);
                  closeOthers2();
                }}
              >
                <p>Insights</p>
                <KeyboardArrowDownIcon />
              </div>
              {!showInsight && (
                <div className="lest-body">
                  <ul onClick={() => setshowInsight(!showInsight)}>
                    <Link to="/insight">
                      <li>Insight</li>
                    </Link>
                    <Link to="/publications">
                      <li>Publications</li>
                    </Link>
                    <Link to="/news">
                      <li>News</li>
                    </Link>
                    <Link to="/gallery">
                      <li>Gallery</li>
                    </Link>
                    <Link to="/events">
                      <li>Event</li>
                    </Link>
                    <Link to="/insight">
                      <li>Reports</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="listd">
              <div
                className="head"
                onClick={() => {
                  setshowMember(!showMember);
                  closeOthers3();
                }}
              >
                <p>Membership</p>
                <KeyboardArrowDownIcon />
              </div>
              {!showMember && (
                <div className="lest-body">
                  <ul onClick={() => setshowMember(!showMember)}>
                    <Link to="/become-membership">
                      <li>Membership</li>
                    </Link>
                    <Link to="/existing-membership">
                      <li>Our Members</li>
                    </Link>
                    <Link to="/membership-requirement">
                      <li>Membership Requirement</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="listd">
              <div
                className="head"
                onClick={() => {
                  setshowStructure(!showStructure);
                  closeOthers5();
                }}
              >
                <p>Our Structure</p>
                <KeyboardArrowDownIcon />
              </div>
              {!showStructure && (
                <div className="lest-body">
                  <ul onClick={() => setshowStructure(!showStructure)}>
                    <Link to="/sectoral">
                      <li>Sectoral Group</li>
                    </Link>
                    <Link to="/operate">
                      <li>Where We Operate</li>
                    </Link>
                    <Link to="/mrc">
                      <li>MRC</li>
                    </Link>
                    <Link to="/mpdcl">
                      <li>MPDCL</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="listd ai">
              <TranslateIcon className="list2" />
            </div>
            <button
              className="listd"
              onClick={() => navigate("/become-membership")}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
