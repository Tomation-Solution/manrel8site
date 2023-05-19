import React from "react";
import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";

import "./PaidPublications.scss";
import {
  PublicationPayModal,
  SinglePublication,
} from "../Modals/PublicationModals";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPaidPublications } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { FormError } from "../NewEvents/FormComponents";

const PaidPublications = () => {
  const [register, setRegister] = useState(false);
  const [publicationObject, setPublicationObject] = useState(null);

  const { isLoading, isFetching, isError, data } = useQuery(
    "all-paid-publications",
    getPaidPublications,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  const viewpaidHandler = () => {
    setRegister(!register);
  };

  const registrationfn = (data) => {
    setPublicationObject(data);
    setRegister(!register);
  };
  return (
    <>
      {register && (
        <PublicationPayModal
          data={publicationObject}
          closefn={viewpaidHandler}
        />
      )}

      <UIProvider>
        <div className="paid-publications">
          <Subscribe />
          <NewNavBar />
          <h1 className="header">Paid Publications</h1>
          <div className="paid-publication-items">
            {isLoading || isFetching ? (
              <Loader loading={isLoading || isFetching} />
            ) : !isError ? (
              <>
                {data.map((item) => (
                  <SinglePublication
                    registerfn={registrationfn}
                    key={item.id}
                    data={item}
                  />
                ))}
              </>
            ) : (
              <FormError>Can't Fetch Paid Publications</FormError>
            )}
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </>
  );
};

export default PaidPublications;
