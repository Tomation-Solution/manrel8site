import "./RevampedEventGeneral.css";
import Button from "../../Component/RevampEventComponents/Button/Button";
import { Link } from "react-router-dom";
import { RevampAGMCountDown } from "../../Component/RevampEventComponents/RevampCustomComponents/RevampCustomComponents";
import EmptyState from "../../Component/EmptyState/EmptyState";
import { useCustomFetcher } from "../../utils/customfetcher";
import {
  getAgmProgrammePage,
  getAllAgmPrograms,
} from "../../utils/csm-api-calls";
import moment from "moment";

const RevampedEventGeneral = () => {
  const { isError, loadingState, data } = useCustomFetcher(
    "speakers",
    getAgmProgrammePage
  );

  const programsData = useCustomFetcher("programs", getAllAgmPrograms);

  if (loadingState || programsData.loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0 || programsData.data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data || programsData.isError || !programsData.data) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  return (
    <div className="Generalcontainer">
      <div className="text">
        <div className="generaltext">
          <h1>{data?.main_text}</h1>

          <Link to="/revamped-events/register">
            <Button content="Register" variants="graysquarebackground" />
          </Link>
        </div>
        <div className="generalimage">
          <img src={data?.main_image} alt="" />
        </div>
      </div>

      {programsData?.data.map((item, index) => {
        return (
          <div className="days" key={index}>
            <h1 style={{ textAlign: "center", fontWeight: "500" }}>
              DAY {index + 1}
            </h1>
            <div className="inside">
              <p>{moment(item?.program_date).format("LL")}</p>

              <div className="inside-centered">
                <h2>{item?.program_title}</h2>
              </div>

              <Link to={`/revamped-events/hightlight/${item?.id}`}>
                <Button content="See Highlights" />
              </Link>
            </div>
          </div>
        );
      })}

      {/* <div className="days">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>DAY 2</h1>
        <div className="inside">
          <p>October 18, 2023</p>

          <div className="inside-centered">
            <h2>Private Session</h2>
            <h2>Exhibition</h2>
          </div>

          <Link to={`/revamped-events/hightlight/private_session`}>
            <Button content="See Highlights" />
          </Link>
        </div>
      </div>

      <div className="days">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>DAY 3</h1>
        <div className="inside">
          <p>October 19, 2023</p>

          <div className="inside-centered">
            <h2>Public Session / 3rd Adeola Odutola Lecture</h2>
            <h2>Exhibition</h2>
          </div>

          <Link to={`/revamped-events/hightlight/public_session`}>
            <Button content="See Highlights" />
          </Link>
        </div>
      </div> */}

      <RevampAGMCountDown />

      <div className="daysbuttoncontainer">
        <Link to="/revamped-events/register">
          <Button content="Register" variants="graysquarebackground" />
        </Link>
      </div>
    </div>
  );
};

export default RevampedEventGeneral;
