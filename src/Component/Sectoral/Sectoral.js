import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/SectoralBackGroundImage.jpeg";
import { useQuery } from "react-query";
import { getSectoralApi } from "../../utils/api-calls2";
import Loader from "../Loader/Loader";
import { sectorialBannerGet } from "../../utils/csm-api-calls";

function Sectoral() {
  const { isLoading, data } = useQuery("getSectoralApi", getSectoralApi);
  const structureBannerResult = useQuery(
    "sectorial-banner",
    sectorialBannerGet,
    {
      // select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />
          <Loader loading={isLoading} />
          <NewImageBanner
            image={structureBannerResult?.data?.banner_image || backImage}
            header={"MAN Sectoral Group"}
            details={[
              " The Groups are serviced by full-time Sectoral Executives located at the National Secretariat of the Association.",
            ]}
          />

          <div className="sect-body">
            <div className="cover">
              <div
                className="head"
                style={{ margin: "20px 0px", color: "#2b3513" }}
              >
                In order to cater for members who have near homogenous products,
                MAN has ten Sectoral Groups and seventy four Sub-Sectoral
                Groups. The Groups are serviced by full-time Sectoral Executives
                located at the National Secretariat of the Association.
              </div>
              <div className="wrap-g">
                {data?.map((item, index) => (
                  <div className="card" key={item.header}>
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2 style={{ color: "#2b3513" }}>{item.header}</h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>
                    <img className="main-img" src={item.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Sectoral;
