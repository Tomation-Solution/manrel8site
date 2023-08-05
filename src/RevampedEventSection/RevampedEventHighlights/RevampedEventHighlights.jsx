import "./RevampedEventHighlights.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { event_programme_highlights } from "../../constants/event_programme_highlights";
import { ArrowBack } from "@mui/icons-material";

const RevampedEventHighlights = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = event_programme_highlights.find((item) => item.id === id);

  console.log(data?.video.length);

  if (!id || !data) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="Ceremonycontainer">
      <div className="container">
        <div className="back-button">
          <span onClick={() => navigate("/revamped-events/general")}>
            <ArrowBack />
            <h2>Back</h2>
          </span>
        </div>

        <h4>{data.title}</h4>
        <h1>{data?.name}</h1>
      </div>

      <div className="imagecontainer">
        {data.video.map((item, index) => (
          <video
            style={{ backgroundColor: "#ddd" }}
            key={index}
            src={item}
            autoPlay
            loop
          ></video>
        ))}
      </div>
    </div>
  );
};

export default RevampedEventHighlights;
