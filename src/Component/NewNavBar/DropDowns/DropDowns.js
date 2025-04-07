import { Link } from "react-router-dom";
import "./DropDowns.scss";
import { REVAMP_EVENTS_BASE_EVENT_URL } from "../../../constants/revamped_events_constants";

export const AboutDropdown = () => {
  return (
    <div className="about-dropdown">
      <div className="dropdown-item">
        <span>
          <Link to={"/about"}>Our History</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/about/advocacy-achievements"}>Advocacy Achievements</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/about/private-sector"}>Our Associates</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/about/how-we-work"}>How we Work</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/about/council-members"}>Our Leadership</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/operate"}>Where we Operate</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/mrc-contact"}>Contact Us</Link>
        </span>
      </div>
    </div>
  );
};

export const ServicesDropdown = () => {
  // const [serviceShow, setShowService] = useState(false);
  // const [specialised, setSpecialised] = useState(false);
  return (
    <div className="service-dropdown">
      <div className="dropdown-item">
        <span>
          <Link to={"/services"}>Core Services</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to="/event-training">Consultancy, Events & Trainings</Link>
        </span>
      </div>
      {/* <div
        className="dropdown-item"
        onClick={() => setSpecialised(!specialised)}
      >
        <span style={{ fontSize: "13px" }}>Specialized Services</span>
        <KeyboardArrowDown />
      </div>
      {specialised && (
        <>
          <div
            className="dropdown-item"
            onClick={() => setShowService(!serviceShow)}
          >
            <span>MRC</span>
            <KeyboardArrowDown />
          </div>
          {serviceShow && (
            <div className="extra">
              <div className="dropdown-item">
                <span>
                  <Link to={"/about-mrc"}>About MRC</Link>
                </span>
              </div>
            </div>
          )}
          <div className="dropdown-item">
            <span>
              <Link to={"/mpdcl"}>MPDCL</Link>
            </span>
          </div>
        </>
      )} */}
    </div>
  );
};

export const InsightDropdown = () => {
  return (
    <div className="insight-dropdown">
      <div className="dropdown-item">
        <span>
          <Link to={"/publications"}>Publications</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/news"}>News</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/gallery"}>Gallery</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/reports"}>Reports</Link>
        </span>
      </div>

      <div className="dropdown-item">
        <span>
          <Link to={REVAMP_EVENTS_BASE_EVENT_URL}>Annual General Meeting</Link>
        </span>
      </div>
    </div>
  );
};

export const MembershipDropdown = () => {
  return (
    <div className="membership-dropdown">
      <div className="dropdown-item">
        <span>
          <Link to="/become-membership">Why Join Man</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to="/membership-requirement">Membership Requirements</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/prospective-member-login"}>Prospective Members</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/our-members"}>Our Members</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/faq"}>Frequently Asked Questions (FAQs)</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/join-now-page"}>Join Now</Link>
        </span>
      </div>
    </div>
  );
};

export const StructureDropdown = () => {
  // const [serviceShow, setShowService] = useState(false);
  return (
    <div className="structure-dropdown">
      <div className="dropdown-item">
        <span>
          <Link to={"/sectoral"}>Sectoral Group</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/about-mrc"}>MRC</Link>
        </span>
      </div>
      <div className="dropdown-item">
        <span>
          <Link to={"/mpdcl"}>MPDCL</Link>
        </span>
      </div>
      {/* <div
        className="dropdown-item"
        onClick={() => setShowService(!serviceShow)}
      >
        <span>MRC</span>
        <KeyboardArrowDown />
      </div>
      {serviceShow && (
        <div className="extra">
          <div className="dropdown-item">
            <span>
              {" "}
              <Link to={"/about-mrc"}>About MRC</Link>
            </span>
          </div>
          <div className="dropdown-item">
            <span>
              <Link to="/mrc-services">MRC SERVICES</Link>
            </span>
          </div>
          <div className="dropdown-item">
            <span>
              <Link to={"/mrc-contact"}>Contact Us</Link>
            </span>
          </div>
        </div>
      )}
      <div className="dropdown-item">
        <span>
          <Link to={"/mpdcl"}>MPDCL</Link>
        </span>
      </div> */}
    </div>
  );
};
