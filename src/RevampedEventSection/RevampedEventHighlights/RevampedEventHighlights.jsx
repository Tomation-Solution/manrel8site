import "./RevampedEventHighlights.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { getAllAgmPrograms } from "../../utils/csm-api-calls";
import { useCustomFetcher } from "../../utils/customfetcher";
import EmptyState from "../../Component/EmptyState/EmptyState";

const RevampedEventHighlights = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isError, loadingState, data } = useCustomFetcher(
    "programs1",
    getAllAgmPrograms,
    (data) => data?.data.find((item) => item.id === Number(id))
  );

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

  console.log(data);

  return (
    <div className="Ceremonycontainer">
      <div className="container">
        <div className="back-button">
          <span onClick={() => navigate("/revamped-events/general")}>
            <ArrowBack />
            <h2>Back</h2>
          </span>
        </div>

        <h4>See What Happened Last Year</h4>
        <h1>{data?.program_title}</h1>
      </div>

      <div className="imagecontainer">
        <video
          style={{ backgroundColor: "#ddd" }}
          src={data?.program_attached_file1}
          autoPlay
          loop
        ></video>
      </div>

      {data?.program_attached_file2 ? (
        <div className="imagecontainer">
          <video
            style={{ backgroundColor: "#ddd" }}
            src={data?.program_attached_file2}
            autoPlay
            loop
          ></video>
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <a href={data?.program_attached_file_link}>click to watch more</a>
      </div>
    </div>
  );
};

export default RevampedEventHighlights;
