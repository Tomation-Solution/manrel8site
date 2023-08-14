import "./RevampedEventSpeaker.css";

import { useParams } from "react-router-dom";
import { useCustomFetcher } from "../../utils/customfetcher";
import { getAllAgmSpeakers } from "../../utils/csm-api-calls";
import EmptyState from "../../Component/EmptyState/EmptyState";
import sanitize from "sanitize-html";

function RevampEventSpeakerDetails() {
  const { id } = useParams();

  const { isError, loadingState, data } = useCustomFetcher(
    "speakers",
    getAllAgmSpeakers,
    (data) => data.data.find((item) => item.id === Number(id))
  );

  console.log(data);

  if (loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data || !id) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  return (
    <div className="Speakercontainer">
      <br />
      <br />
      <div className="Speakerheader">
        <h2
          style={{
            fontWeight: "500",
            color: "#fff",
          }}
        >
          {data.header}
        </h2>
        <div className="white"></div>

        <div className="Speakerheadercontainer">
          <div className="Speakerheadertext">
            <h1
              style={{
                fontWeight: "500",
              }}
            >
              {data.speaker_title}
            </h1>
            <h3>{data.speaker_name}</h3>
            <h3>{data.extra_title}</h3>
          </div>
          <div className="Speakerheaderimage">
            <img src={data?.speaker_image} alt="" />
          </div>
        </div>
      </div>

      <div className="Speakertext">
        <div
          dangerouslySetInnerHTML={{ __html: sanitize(data?.speaker_words) }}
        />
      </div>
    </div>
  );
}

export default RevampEventSpeakerDetails;
