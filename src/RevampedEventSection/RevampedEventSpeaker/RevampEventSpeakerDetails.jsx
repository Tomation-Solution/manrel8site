import "./RevampedEventSpeaker.css";

import { Navigate, useParams } from "react-router-dom";
import { event_speakers_details } from "../../constants/event_speakers_details";

function RevampEventSpeakerDetails() {
  const { id } = useParams();

  const data = event_speakers_details.find((item) => item.id === id);

  if (!id || !data) {
    return <Navigate to={"/revamped-events/speaker"} />;
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
        {data.speaker_words?.map((item, index) => (
          <section key={index}>
            <p>{item}</p>
            <br />
          </section>
        ))}
      </div>
    </div>
  );
}

export default RevampEventSpeakerDetails;
