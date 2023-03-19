import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./PrivateSector.scss";
import NewNavBar from "../NewNavBar/NewNavBar";

const PrivateSector = () => {
  return (
    <div className="private-sector">
      <UIProvider>
        <NewNavBar />
        <div className="topBg"></div>

        <div className="private-sector-content">
          <div className="overlapModal">
            <h1>Organized Private Sector (OPS) Bodies</h1>
            <p>
              The Organized Private Sector (OPS) is an umbrella organization of
              Business Membership Organizations representing the interest of the
              private sector in Nigeria. OPS member organizations are the
            </p>
          </div>

          <div className="core-values">
            <div className="core-values-items">
              <div
                className="core-values-item"
                style={{ backgroundColor: "#2C3513" }}
              >
                <h3>1</h3>
                <div className="right">
                  <p>Manufacturers Association of Nigeria (MAN)</p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#DC3545" }}
              >
                <h3>2</h3>
                <div className="right">
                  <p>Nigeria Employers Consultative Association (NECA)</p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#038B49" }}
              >
                <h3>3</h3>
                <div className="right">
                  <p>
                    Nigeria Association of Chambers of Commerce, Industry, Mines
                    and Agriculture (NACCIMA)
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#86742A" }}
              >
                <h3>4</h3>
                <div className="right">
                  <p>Nigeria Association of Small-Scale Industries (NASSI)</p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#17A2B8" }}
              >
                <h3>5</h3>
                <div className="right">
                  <p>
                    Nigeria Association of Small and Medium Enterprises (NASME)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h1>International Agencies & Partners</h1>
          <p>
            MAN has successfully cultivated and continues to nurture
            relationships with the following:
          </p>

          <div className="achievements-items">
            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>United Nations Development Programme (UNDP)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Multilateral Investment Guarantee Agency (MIGA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                United Nations Industrial Development Organization (UNIDO)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Japanese External Trade Organization (JETRO)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>The World Bank</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Fredrick Neumann Foundation</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>International Finance Corporation (IFC)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>v European Union Commission Pro-Invest</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Project Development Facility (APDF)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>US Corporate Council on Africa (CCA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Centre for Imports from the Developing Countries- Netherlands
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Economic Community of West African States (ECOWAS)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Confederation of Danish Industries (DI)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Confederation of Indian Industries (CII)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Confederation of Norwegian Businesses and Industry (NHO)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Japan International Cooperation Agency</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Technonet Africa</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>SS-Gate, China</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>GIZ</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>v Enable 2</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>v Agence Francaise De Development (AFD)</h5>
            </div>
          </div>
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default PrivateSector;
