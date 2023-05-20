import React from "react";
import { UIProvider } from "../../../Ui";
import Footer from "../../Footer/Footer";
import NewNavBar from "../../NewNavBar/NewNavBar";
import Subscribe from "../../Subscribe/Subscribe";
import Wall from "../../Wall/Wall";

import "./NewCouncil.scss";
import NewConExecutive from "./NewCouncilComp/NewConExecutive";
import { getAboutOurExecutivesPVC } from "../../../utils/csm-api-calls";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";
import { FormError } from "../../NewEvents/FormComponents";

const NewCouncil = () => {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-about-our-executives",
    getAboutOurExecutivesPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="new-council">
      <UIProvider>
        <Subscribe />
        <NewNavBar />

        {isLoading || isFetching ? (
          <Loader loading={isLoading || isFetching} />
        ) : !isError ? (
          <>
            <div className="hero_image"></div>

            <div className="members">
              <div className="options">
                <span
                  style={{ fontSize: "50px" }}
                  className="option_item_active"
                >
                  National Council Members
                </span>
              </div>

              <NewConExecutive data={data} />
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

export default NewCouncil;
