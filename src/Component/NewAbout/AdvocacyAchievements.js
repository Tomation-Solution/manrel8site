import React, { useEffect } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";

import AchieveBullet from "../../images/new-images/AchieveBullet.png";

import "./CodeofConduct.scss";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import { getAboutAdvocacyPVC } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import { useQuery } from "react-query";
import { extractListItems } from "../../utils/extractListItes";

const CodeofConduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading, isError, isFetching, data } = useQuery(
    "all-about-advocacy",
    getAboutAdvocacyPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="code-conduct">
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
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100vh",
              }}
            ></div>

            <div className="code-conduct-content">
              <div className="overlapModal">
                <h1> Advocacy Achievements</h1>
                <p>
                  Through its continuous advocacy programmes, MAN has recorded
                  remarkable achievements in a wide range of areas which
                  include:
                </p>
              </div>
            </div>

            <div className="achievements">
              <div className="achievements-items">
                {extractListItems(data.main_achievements).map((item, index) => (
                  <div className="achievements-item" key={index}>
                    <img alt="" src={AchieveBullet} />
                    <h5 dangerouslySetInnerHTML={{ __html: item }}></h5>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <FormError>Can't Fetch About Advocacy Data</FormError>
        )}
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default CodeofConduct;
