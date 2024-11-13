import React from "react";
import { UIProvider } from "../../Ui";
import { ThemeProvider } from "@mui/system";
import theme from "../../Styles/theme/Theme";
import Footer from "../Footer/Footer";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import NewNavBar from "../NewNavBar/NewNavBar";
import Subscribe from "../Subscribe/Subscribe";
import Wall from "../Wall/Wall";
import "./Sectoral.scss";
import backImage from "../../images/Group 61.png";
import { useQuery } from "react-query";
import Vector from "../../images/Vector3.png";
import { getMPDCLApi } from "../../utils/api-calls2";
import Loader from "../Loader/Loader";

const MPDCLServices = () => {
  const { isLoading, data } = useQuery("getMPDCLApi", getMPDCLApi);
  console.log("data", data);

  return (
    <>
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Loader loading={isLoading} />
        <Subscribe />
        <NewNavBar />
        <NewImageBanner
              image={backImage}
              header={
                "Manufacturers Power Development Company Limited (MPDCL)."
              }
            />
        <div className="sectoral">
          <div className="sect-body">
            <div className="cover">
              <div className="services">
                <h1>The services below are offered by MAN Power Development Company Limited (MPDCL).</h1>
              </div>
              <div className="wrap-g">
                {data
                    ?.filter(
                        (d) =>
                            d.type === "RENEWABLE_ENERGY" || d.type === "OTHERS"
                    )
                    .map((item) => (
                        <div className="card" key={item.id}>
                          <div className="flex">
                            <img src={Vector} alt=""/>
                            <h2>{item.header}</h2>
                          </div>
                          <p>{item.description}</p>
                          <img className="main-img" src={item.image} alt=""/>
                          <button className="view-more-button" onClick={() => console.log('View More clicked')}>
                            View More
                          </button>
                        </div>
                    ))}
              </div>
            </div>
          </div>
          <Wall/>
          <Footer/>
        </div>
      </UIProvider>
    </ThemeProvider>
  </>
  );
};

export default MPDCLServices;
