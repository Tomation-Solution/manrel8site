import { ThemeProvider } from "@emotion/react";
import React from "react";
import { UIProvider } from "../../Ui";
import Subscribe from "../Subscribe/Subscribe";
import theme from "../../Styles/theme/Theme";

import "./PublicationDetails.scss";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { newPubData } from "./PublicationsData";
import { Link, useParams } from "react-router-dom";
import NewNavBar from "../NewNavBar/NewNavBar";
import backImage from "../../images/new-images/InsightCardIMages (4).jpg";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import { useQuery } from "react-query";
import { getFreePublication } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";
import PublicationsPreview from "./PublicationsPreview";
import { dateformatter } from "../../utils/date-formatter";

const PublicationDetails = () => {
  const { id } = useParams();

  const { isLoading, isFetching, isError, data } = useQuery(
    "all-free-publications",
    getFreePublication,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  let renderdata = null;
  let otherPub = null;

  if (data) {
    renderdata = data.find((item) => item.id === Number(id));
    console.log(renderdata);

    otherPub = data.filter((item) => item.id !== Number(id));
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="publications-details">
            <Subscribe />
            <NewNavBar />

            {renderdata ? (
              <NewImageBanner
                image={backImage}
                header={"Publications Details"}
                details={[`${renderdata.title}`]}
              />
            ) : null}

            <div className="news_main">
              <div className="cover">
                {isFetching || isLoading ? (
                  <Loader loading={isLoading || isFetching} />
                ) : !isError ? (
                  <>
                    {renderdata ? (
                      <div className="left">
                        <PublicationsPreview
                          render_data={renderdata}
                          isImage={true}
                          no_title={false}
                        />
                      </div>
                    ) : (
                      <FormError>Can't Fetch Publication Details</FormError>
                    )}
                  </>
                ) : (
                  <FormError>Can't Fetch Free Publication Details</FormError>
                )}

                {otherPub ? (
                  <div className="right">
                    <h2>Other Publication</h2>
                    <div className="wrap">
                      {otherPub.map((item) => (
                        <div className="card" key={item.id}>
                          <Link to={"/publications"}>
                            <button
                              style={{ color: "#2b3513", cursor: "pointer" }}
                            >
                              <b>Publications</b>
                            </button>
                          </Link>
                          <div className="flex">
                            <h3>{item.name}</h3>
                            <Link to={`/publications-details/${item.id}`}>
                              <OpenInNewIcon />
                            </Link>
                          </div>
                          <p>{dateformatter(new Date(item.created_at))}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <Wall />
          <Footer />
        </UIProvider>
      </ThemeProvider>
    </div>
  );
};

export default PublicationDetails;
