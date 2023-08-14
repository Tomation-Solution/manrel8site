import "./RevampedEventExhibition.css";

import Gallery from "../../Component/RevampEventComponents/Gallery/Gallery";

import { getAgmExhibitionPage } from "../../utils/csm-api-calls";
import { useCustomFetcher } from "../../utils/customfetcher";
import EmptyState from "../../Component/EmptyState/EmptyState";
import sanitize from "sanitize-html";
import { useState } from "react";
import Button from "../../Component/RevampEventComponents/Button/Button";

const RevampedEventExhibition = () => {
  const [readMore, setReadMore] = useState(false);

  const { isError, loadingState, data } = useCustomFetcher(
    "exhibition-details",
    getAgmExhibitionPage
  );

  if (loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  return (
    <div className="Exhibitioncontainer">
      <div className="exhibitionimagecontainer">
        <img src={data?.main_image} alt="" />
      </div>
      <div className="text">
        <div
          style={{
            height: readMore ? "fit-content" : "50px",
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={{
            __html: sanitize(data?.intro_text),
          }}
        />

        <Button
          onClick={() => setReadMore(!readMore)}
          content={`Read ${readMore ? "Less" : "More"}`}
        />
      </div>
      <Gallery />
    </div>
  );
};

export default RevampedEventExhibition;
