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
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1i8PKHSJGjNyfmq3QGwNNPyg_O34AXHw&ehbc=2E312F"
          width="100%"
          title="title1"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
                <span>Phone: 01-4542700, 01-4542701, 01-4542702, 081 666 75412</span>
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
