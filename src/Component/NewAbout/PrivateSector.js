import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./PrivateSector.scss";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import { getAboutSectorPVC } from "../../utils/csm-api-calls";
import { useQuery } from "react-query";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";

const PrivateSector = () => {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-about-sector",
    getAboutSectorPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  // const location = data?.ops?.indexOf(
  //     "Nigerian Association of Small Scale Industrialists (NASSI)"
  //   ),
  //   item_value = data?.ops?.at(location);
  // data?.ops?.splice(location, 1);

  // data?.ops.push(item_value);

  return (
    <div className="private-sector">
      <UIProvider>
        <Subscribe />
        <NewNavBar />

        {isLoading || isFetching ? (
          <Loader loading={isLoading || isFetching} />
        ) : !isError ? (
          <>
            <div
              className="topBg"
              style={{
                background: `url(${data.main_image})`,
                  height: "95vh",
                  width: "100vw",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="private-sector-content">
              <div className="overlapModal">
                <h1 style={{ color: "#2b3513" }}>
                  ORGANIZED PRIVATE SECTOR OF NIGERIA (OPSN)
                </h1>
                <p style={{ color: "#2b3513" }}>
                  The Organized Private Sector of Nigeria (OPSN) is an umbrella
                  organization of Business Membership Organizations representing
                  the interest of the private sector in Nigeria. OPSN member
                  organizations are:
                </p>
              </div>

              <div className="core-values">
                <div className="core-values-items">
                  {data.ops.map((item, index) => (
                    <div
                      key={index}
                      className="core-values-item"
                      style={{ backgroundColor: "#596d27" }}
                    >
                      <h3>{index + 1}</h3>
                      <div className="right">
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
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
                {data.international_partners.map((item, index) => (
                  <div className="achievements-item" key={index}>
                    <img alt="" src={AchieveBullet} />
                    <h5>{item}</h5>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <FormError>Can't Fetch Data</FormError>
        )}

        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default PrivateSector;
