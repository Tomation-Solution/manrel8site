import "./RevampedEventSpeaker.css";

import {
  RevampAGMCountDown,
  RevampHomepageCard,
} from "../../Component/RevampEventComponents/RevampCustomComponents/RevampCustomComponents";
import { event_speakers_details } from "../../constants/event_speakers_details";

const RevampedEventSpeaker = () => {
  return (
    <>
      <div className="homeimages">
        {event_speakers_details.map((item, index) => (
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
