import "./RevampEventHome.css";

import Button from "../../Component/RevampEventComponents/Button/Button";
import {
  RevampAGMCountDown,
  RevampHomepageCard,
} from "../../Component/RevampEventComponents/RevampCustomComponents/RevampCustomComponents";

import { Link } from "react-router-dom";
import { useCustomFetcher } from "../../utils/customfetcher";
import { getAgmHomepage, getAllAgmSpeakers } from "../../utils/csm-api-calls";
import EmptyState from "../../Component/EmptyState/EmptyState";
import sanitizeHtml from "sanitize-html";
import moment from "moment/moment";

const RevampEventHome = () => {
  const { isError, loadingState, data } = useCustomFetcher(
    "hompage-content",
    getAgmHomepage
  );

  const speakerData = useCustomFetcher("speakers", getAllAgmSpeakers);

  if (loadingState || speakerData.loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0 || speakerData.data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data || speakerData.isError || !speakerData.data) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  return (
    <div className="Homecontainer">
      <div className="homeheader">
        <div
          className="homeheaderpicture"
          style={{
            backgroundImage: `linear-gradient(to left,rgba(0,0,0,0.5),rgba(0,0,0, 0.7)), url(${data?.main_image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="homeheadertext">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data?.intro_text),
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "10px 0px",
              }}
            >
              <p style={{ fontWeight: "300" }}>
                {moment(data?.agm_start_date).format("LL")}
              </p>

              <p style={{ fontWeight: "300" }}>{data?.location}</p>
            </div>
            <Link to="/revamped-events/register">
              <Button content="Register" variants="graysquarebackground" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hometext">
        <h2>{data?.intro_title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data?.intro_description),
          }}
        />
      </div>
      <div className="homeimages">
        {speakerData?.data.reverse().map((item, index) => (
          <RevampHomepageCard
            key={index}
            image={item.speaker_image}
            title={item.intro_text}
            where={`/revamped-events/speaker/details/${item.id}`}
          />
        ))}
      </div>

      <div className="homeimages">
        <RevampHomepageCard
          image={data?.exhibition_image}
          title={data?.exhibition_text}
          where={"/revamped-events/exhibition"}
        />

        <RevampHomepageCard
          image={data?.save_date_image}
          title={data?.save_date_text}
          where={"/revamped-events/general"}
        />

        <RevampHomepageCard
          image={data?.venue_text_image}
          title={data?.venue_text}
          where={"/revamped-events/venue"}
        />

        <br />
        <br />
      </div>

      <br />
      <br />
      <RevampAGMCountDown />

      <div className="buttoncontainer">
        <Link to="/revamped-events/register">
          <Button
            content="Click here to register"
            variants="graybackground100"
          />
        </Link>
      </div>
    </div>
  );
};

export default RevampEventHome;
