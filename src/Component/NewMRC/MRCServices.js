import React from "react";
import { Link } from "react-router-dom";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import "./MRCServices.scss";

const MRCServices = () => {
  return (
    <div className="mrc-services">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <div className="topBg">
          <h1>Manufacturers Resource Centre (MRC)</h1>
          <p>
            The only sector-specific Business Membership Organization (BMO)
            structured to render advocacy services to its members
          </p>
        </div>

        <div className="who-are">
          <h1 className="header">
            Our <span>Services</span>
          </h1>
          <p>
            Manufacturers Resource Centre is the only professional service
            organization structured to render business solutions for the
            Manufacturing sector and affiliated. With us is a pool of
            well-seasoned consultants and added service outfits, geared at
            delivering solutions with high level of expertise and at very
            subsidized rates.
          </p>
          <div className="text-btn">
            <span>We are "... the Manufacturers’ Solution Hub"</span>
            <Link to={"/mrc-contact"}>
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            Business Consulting <span>Retainership Service</span>
          </h1>

          <p>
            With our brand, expertise and business leverages, valuable in
            growing turnover volume, company customer base and production
            capacity, companies engage us as their Business Consultant to aid
            them better their business strategizes and attain targeted business
            growth. In addition, micro manufacturers enjoy discounted fee.
          </p>
          <p>This service covers:</p>

          <div className="obj-item">
            <div></div>
            <span>Business Evaluations.</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Business Advisory.</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Access to MRC available Business Leverages.</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Business Referrals.</span>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            Financial <span>Solutions</span>
          </h1>

          <p>
            It’s now possible to expand your Business and Operations. Come take
            advantage of available funding windows, Intervention Fund and other
            Venture Capital investments, that would suit your funding need.
          </p>
          <p>This service covers:</p>

          <div className="obj-item">
            <div></div>
            <span>Intervention Funds</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Grants and Loan</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Facilities .</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Loan Facilitation</span>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            Human <span>Capacity Building</span>
          </h1>

          <p>
            We understand that Learning and Development leads to increased
            performance, better lives and work. We bring to you a whole new
            learning experience through our In-plant and General Trainings.
          </p>
          <p>This service covers:</p>

          <div className="obj-item">
            <div></div>
            <span>Training (In-Plant and General)</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Workforce Recruitment</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Pre-Retirement Training</span>
          </div>
        </div>
        <div className="objectives">
          <h1 className="header">
            Consulting <span>Services</span>
          </h1>

          <p>
            Leveraging on the expertise and experience of skilled consultants
            and professionals we evaluate, implement and deploy custom solutions
            tailored to address your business challenges.
          </p>
          <p>This service covers:</p>

          <div className="obj-item">
            <div></div>
            <span>Feasibility and Viability Appraisals</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Product Authentication Solutions</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Joint Venture Business Propositions</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Financial Management Services</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Business Research</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>Business Plan</span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>
              IT Consulting (Website Building, SMP Management, Marketing)
            </span>
          </div>
          <div className="obj-item">
            <div></div>
            <span>
              Production Process Re-Engineering (Lean Manufacturing, Production
              Optimization) Etc.
            </span>
          </div>
        </div>
        <div className="who-are">
          <h1 className="header">
            We <span>Transform Businesses</span>
          </h1>
          <p>
            Through our services we advice and aid manufacturers in the growth
            and development of their businesses. We are constantly on the look
            out for rewarding opportunities to ensure their enterprise thrives
            and is sustainable.
          </p>
          <div className="text-btn">
            <span>Let us help you "...become a major Industry Player"</span>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MRCServices;
