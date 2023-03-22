import { KeyboardArrowDown } from "@mui/icons-material";
import Translate from "@mui/icons-material/Translate";
import React, { useState } from "react";
import Logo from "../../images/manlogo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./NewNavBar.scss";
import NavSlider from "./NavSlider/NavSlider";
import {
  AboutDropdown,
  InsightDropdown,
  MembershipDropdown,
  ServicesDropdown,
  StructureDropdown,
} from "./DropDowns/DropDowns";
import { Link } from "react-router-dom";

const NewNavBar = () => {
  const [showSlide, setShowSlide] = useState(false);

  const [showAbout, setshowAbout] = useState(false);
  const [showInsight, setshowInsight] = useState(false);
  const [showMember, setshowMember] = useState(false);
  const [showServices, setshowServices] = useState(false);
  const [showStructure, setshowStructure] = useState(false);

  const showSlideHandler = () => {
    setShowSlide(!showSlide);
  };

  const closeAll = () => {
    setshowAbout(false);
    setshowInsight(false);
    setshowMember(false);
    setshowServices(false);
    setshowStructure(false);
  };

  return (
    <>
      {showSlide && <NavSlider clickfn={showSlideHandler} />}
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} alt="MAN LOGO" />
          </div>
        </Link>

        <div className="navlist">
          <div
            className="toggle-navitem"
            onClick={() => {
              closeAll();
              setshowAbout(!showAbout);
            }}
          >
            <span>About Us</span>
            <KeyboardArrowDown />
          </div>

          <div
            className="toggle-navitem"
            onClick={() => {
              closeAll();
              setshowServices(!showServices);
            }}
          >
            <span>Services</span>
            <KeyboardArrowDown />
          </div>

          <div className="toggle-navitem">
            <Link to={"/insight"} style={{ textDecoration: "none" }}>
              <span className="special-span">Insights</span>
            </Link>
            <KeyboardArrowDown
              onClick={() => {
                closeAll();
                setshowInsight(!showInsight);
              }}
            />
          </div>

          <div
            className="toggle-navitem"
            onClick={() => {
              closeAll();
              setshowMember(!showMember);
            }}
          >
            <span>Membership</span>
            <KeyboardArrowDown />
          </div>

          <div
            className="toggle-navitem"
            onClick={() => {
              closeAll();
              setshowStructure(!showStructure);
            }}
          >
            <span>Our Structure</span>
            <KeyboardArrowDown />
          </div>
          <div className="translate-icon">
            <a href="https://man.rel8membership.com/">
              <button
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  backgroundColor: "#1f260d",
                  color: "#fff",
                  borderRadius: "10px",
                  outline: "none",
                  border: "none",
                }}
              >
                LOGIN
              </button>
            </a>
          </div>
          <div className="translate-icon">
            <Translate />
          </div>

          <div className="join-now">
            <Link to={"/join-now-page"}>
              <button>JOIN NOW</button>
            </Link>
          </div>

          {showAbout && <AboutDropdown />}
          {showServices && <ServicesDropdown />}
          {showInsight && <InsightDropdown />}
          {showMember && <MembershipDropdown />}
          {showStructure && <StructureDropdown />}
        </div>

        <div className="hamburger" onClick={showSlideHandler}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default NewNavBar;
