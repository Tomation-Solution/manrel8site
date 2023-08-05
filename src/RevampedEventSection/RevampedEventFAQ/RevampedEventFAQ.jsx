import "./RevampedEventFAQ.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { revamped_event_faqs } from "../../constants/event_faqs";

const RevampedEventFAQ = () => {
  const [selectedQuest, setSelectedQuest] = useState({
    header: "",
    content: [""],
  });

  return (
    <div className="faq">
      <div className="faq-wrap">
        <div className="top">
          <h1> Frequently Asked Questions (FAQ)</h1>
        </div>
        <div className="listt">
          <div className="list">
            {revamped_event_faqs?.map((item, index) => (
              <div
                className={
                  selectedQuest.header === item.header ? "card active" : "card"
                }
                key={index}
              >
                <header onClick={() => setSelectedQuest(item)}>
                  <h2>{item.header}</h2>
                  {selectedQuest.header === item.header ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </header>
                {item.content.map((data, index) => (
                  <article key={index}>{data}</article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevampedEventFAQ;
