import "./RevampedEventSpeaker.css";

import {
  RevampAGMCountDown,
  RevampHomepageCard,
} from "../../Component/RevampEventComponents/RevampCustomComponents/RevampCustomComponents";
import { getAllAgmSpeakers } from "../../utils/csm-api-calls";
import { useCustomFetcher } from "../../utils/customfetcher";
import EmptyState from "../../Component/EmptyState/EmptyState";

const RevampedEventSpeaker = () => {
  const { isError, loadingState, data } = useCustomFetcher(
    "speakers-details",
    getAllAgmSpeakers
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
    <>
      <div className="homeimages">
        {data.reverse().map((item, index) => (
          <RevampHomepageCard
            key={index}
            image={item.speaker_image}
            title={item.intro_text}
            where={`/revamped-events/speaker/details/${item.id}`}
          />
        ))}
      </div>

      <br />
      <br />

      <RevampAGMCountDown />

      <br />
      <br />
    </>
  );
};

export default RevampedEventSpeaker;
