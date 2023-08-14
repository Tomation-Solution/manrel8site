import "./Gallery.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { getAllAgmPreviousExhibitionImages } from "../../../utils/csm-api-calls";
import { useCustomFetcher } from "../../../utils/customfetcher";
import EmptyState from "../../EmptyState/EmptyState";

const Gallery = () => {
  const { isError, loadingState, data } = useCustomFetcher(
    "gallery-details",
    getAllAgmPreviousExhibitionImages
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
    <div className="Gallerycontainer">
      <h1>Past Exhibition Gallery</h1>
      <div className="imagecontainer">
        {data
          .filter((item) => item.type === "exhibition")
          .map((item, index) => (
            <img src={item.image} key={index} alt="" />
          ))}
      </div>

      <h1>Companies</h1>
      <div className="imagecontainer">
        {data
          .filter((item) => item.type === "company")
          .map((item, index) => (
            <img src={item.image} key={index} alt="" />
          ))}
      </div>

      <br />
      <br />

      <Link to={"/revamped-events/register"}>
        <Button content="Register Now" variants="graysquarebackground" />
      </Link>
    </div>
  );
};

export default Gallery;
