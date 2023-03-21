import React, { useEffect } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./CodeofConduct.scss";
import NewNavBar from "../NewNavBar/NewNavBar";
import { useLocation } from "react-router-dom";

const CodeofConduct = () => {
  const pageLocation = useLocation();
  const where = pageLocation?.state?.from;

  useEffect(() => {
    if (where) {
      window.scrollTo(0, 1000);
    } else {
      window.scrollTo(0, 0);
    }
  }, [where]);

  console.log(pageLocation);
  return (
    <div className="code-conduct">
      <UIProvider>
        <NewNavBar />
        <div className="topBg"></div>

        <div className="code-conduct-content">
          <div className="overlapModal">
            <h1>Code Of Conduct</h1>
            <p>
              In order to promote and develop meaningful contribution of
              manufacturers to the national economy, the National Council laid
              down the following code of conduct for members of the Association:
            </p>
          </div>

          <div className="endeavour-items">
            <div className="endeavour-item">
              <h1>1</h1>
              <p>
                Endeavour to maintain in all aspects of their operations, a high
                level of business ethics and recognized standards, thus
                refraining from all business dealings of questionable nature,
                which could bring the Association or the manufacturing sector as
                a whole into disrepute.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>2</h1>
              <p>
                Demonstrate transparent commitment to Nigeria’s industrial
                objectives and policies; placing Nigeria’s best interest above
                all others and increasing the contribution of the manufacturing
                sector to the economy, and towards the improvement of the
                quality of life of Nigerians.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>3</h1>
              <p>
                Promote, encourage and improve quality standards and process
                control in all their manufacturing operations.
              </p>
            </div>
            <div className="endeavour-item">
              <h1>4</h1>
              <p>
                Refer to the National Council of the Association, any
                disagreement between members of the Association for arbitration
                before either party can pursue such a matter further (if
                necessary) after Council’s intervention.
              </p>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h1> Advocacy Achievements</h1>
          <p>
            Through its continuous advocacy programmes, MAN has recorded
            remarkable achievements in a wide range of areas which include:
          </p>

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
