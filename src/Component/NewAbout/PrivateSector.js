import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./PrivateSector.scss";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";

const PrivateSector = () => {
  return (
    <div className="private-sector">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <div className="topBg"></div>

        <div className="private-sector-content">
          <div className="overlapModal">
            <h1 style={{ color: "#2b3513" }}>
              ORGANIZED PRIVATE SECTOR OF NIGERIA (OPSN) BODIES
            </h1>
            <p style={{ color: "#2b3513" }}>
              The Organized Private Sector of Nigeria (OPSN) is an umbrella
              organization of Business Membership Organizations representing the
              interest of the private sector in Nigeria. OPSN member
              organizations are:
            </p>
          </div>

          <div className="core-values">
            <div className="core-values-items">
              <div
                className="core-values-item"
                style={{ backgroundColor: "#596d27" }}
              >
                <h3>1</h3>
                <div className="right">
                  <p>Manufacturers Association of Nigeria (MAN)</p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#506223" }}
              >
                <h3>2</h3>
                <div className="right">
                  <p>
                    Nigerian Association of Chambers of Commerce, Industry,
                    Mines and Agriculture (NACCIMA)
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#47571f" }}
              >
                <h3>3</h3>
                <div className="right">
                  <p>
                    Nigerian Association of Small Scale Industrialists (NASSI)
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#3e4c1b" }}
              >
                <h3>4</h3>
                <div className="right">
                  <p>
                    Nigerian Association of Small and Medium Enterprises (NASME)
                  </p>
                </div>
              </div>

              <div
                className="core-values-item"
                style={{ backgroundColor: "#354117" }}
              >
                <h3>5</h3>
                <div className="right">
                  <p>Nigerian Employeers Consultative Association (NECA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h1>Continental & International Partners</h1>
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
              <h5>
                United Nations Industrial Development Organization (UNIDO)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>The World Bank</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>International Finance Corporation (IFC)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Project Development Facility (APDF)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Development Bank (AfDB) Group</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Export-Import Bank (Afreximbank)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Union (AU)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Center for International Private Enterprise (CIPE)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>The Coalition for Dialogue on Africa (CoDA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Economic Commission for Africa (ECA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Federation of West African Manufacturers Associations (FEWAMA)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Pan-African Manufacturers Association (PAMA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>African Business Council</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>ECOWAS Business Council</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Japan International Cooperation Agency (JICA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Multilateral Investment Guarantee Agency (MIGA)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Japanese External Trade Organization (JETRO)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Fredrick Neumann Foundation</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>European Union Commission Pro-Invest</h5>
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
              <h5>
                The South-South Global Assets and Technology Exchange System
                (SS-GATES,China)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>The German Agency for International Cooperation (GIZ)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Enhancing Nigerian Advocacy for a Better Business Environment II
                (ENABLE2)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Agence Francaise De Development (AFD)</h5>
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
