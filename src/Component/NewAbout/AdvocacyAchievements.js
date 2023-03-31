import React, { useEffect } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./CodeofConduct.scss";
import NewNavBar from "../NewNavBar/NewNavBar";
import { useLocation } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const CodeofConduct = () => {
  const pageLocation = useLocation();
  const where = pageLocation?.state?.from;

  useEffect(() => {
    if (where) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [where]);

  console.log(pageLocation);
  return (
    <div className="code-conduct">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <div className="topBg"></div>

        <div className="code-conduct-content">
          <div className="overlapModal">
            <h1> Advocacy Achievements</h1>
            <p>
              Through its continuous advocacy programmes, MAN has recorded
              remarkable achievements in a wide range of areas which include:
            </p>
          </div>
        </div>

        <div className="achievements">
          <div className="achievements-items">
            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Industrial Incentives</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Bonafide Manufacturers Scheme</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Manufacturers-In-Bond Scheme (MIBS) approved and enjoyed by some
                members
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Export Expansion Grant (EEG) now being enjoyed by
                export-inclined members
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Prohibition on some products to protect some sectors e.g.
                textile products etc.
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Sector-specific concessions/waivers for sectors such as
                Pharmaceuticals, Educational materials, Agro-allied industries,
                SMIs etc.
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>
                Establishment of Small and Medium Scale Industries Equity
                Investment Scheme (SMIEIS)
              </h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Establishment of the Bank of Industry</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Small and Medium Enterprise Development Agency (SMEDAN)</h5>
            </div>

            <div className="achievements-item">
              <img alt="" src={AchieveBullet} />
              <h5>Reduction in banks’ interest rate on lending</h5>
            </div>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default CodeofConduct;
