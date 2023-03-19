import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./MRCContact.scss";

import MrcContactImg from "../../images/new-images/MrcContactImg.png";

const MRCContact = () => {
  return (
    <div className="mrc-contact">
      <UIProvider>
        <NewNavBar />
        {/* <div className="google-map"> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3720436839126!2d3.3411232144587806!3d6.600601624094209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d0020d7c01%3A0xaa96f6bac823fb29!2sManufacturers%20Association%20Of%20Nigeria!5e0!3m2!1sen!2sng!4v1678197308053!5m2!1sen!2sng"
          width="100%"
          title="title1"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* </div> */}
        <div className="contact-us">
          <div className="left">
            <h1 className="header">
              <span>Contact </span> Us
            </h1>

            <form>
              <div className="half-input">
                <label>
                  Your Name
                  <input type={"text"} />
                </label>
                <label>
                  Your Phone Number
                  <input type={"text"} />
                </label>
              </div>
              <label>
                Your Email Address
                <input type={"text"} />
              </label>
              <label>
                Subject
                <input type={"text"} />
              </label>
              <label>
                Message
                <textarea />
              </label>
              <label>
                Kindly solve this to confirm you are not a robot: 5 + 40
                <input type={"text"} />
              </label>
              <button>Send Message</button>
            </form>
          </div>
          <div className="right">
            <div className="objectives">
              <h1 className="header">
                Get in <span>Touch</span>
              </h1>

              <p>
                We would love to hear from you! Kindly send us a message or an
                enquiry and we will get in touch with you as soon as possible.
              </p>
            </div>

            <div className="objectives">
              <h1 className="header">
                National <span>Secretariat</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span>
                  Address:77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
                </span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Phone :01-4542700, 01-4542701</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Email: info@manufacturersnigeria.org</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-bold">View Our Branches</span>
              </div>
            </div>

            <div className="objectives">
              <h1 className="header">
                MAN <span>Resource Center</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span>
                  Address:77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
                </span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Phone: 01-4542700, 01-4542701, 01-4542702</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Email: mrc@manufacturersnigeria.org</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-bold">
                  MAN House, 1st Floor, Left Wing.
                </span>
              </div>
            </div>

            <div className="image-banner">
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
            </div>

            <div className="objectives no-btm-bd">
              <h1 className="header">
                Business <span>Hours</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span className="span-light">Monday - Friday - 8am to 5pm</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-light">Saturday - Closed</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-light">Sunday - Closed</span>
              </div>
            </div>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MRCContact;
