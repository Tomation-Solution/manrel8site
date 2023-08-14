import "./RevampedEventFAQ.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import EmptyState from "../../Component/EmptyState/EmptyState";
import { getAllAgmFaqs } from "../../utils/csm-api-calls";
import { useCustomFetcher } from "../../utils/customfetcher";
import sanitize from "sanitize-html";

const RevampedEventFAQ = () => {
  const [selectedQuest, setSelectedQuest] = useState({
    header: "",
    content: [""],
  });

  const { isError, loadingState, data } = useCustomFetcher(
    "all-agm-faqs",
    getAllAgmFaqs
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
    <div className="faq">
      <div className="faq-wrap">
        <div className="top">
          <h1> Frequently Asked Questions (FAQ)</h1>
        </div>
        <div className="listt">
          <div className="list">
            {data?.map((item, index) => (
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

                <article
                  dangerouslySetInnerHTML={{ __html: sanitize(item?.content) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevampedEventFAQ;
