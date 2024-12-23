import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.scss";
import { useQuery } from "react-query";
import { faqApi } from "../../utils/api-calls2";
import Loader from "../Loader/Loader";
const FAQ = () => {
  const [selectedQuest, setSelectedQuest] = useState({
    header: "",
    content: [""],
  });
  const { isLoading, data } = useQuery("faqApi", faqApi);
    console.log({data})
  return (
    <UIProvider>
      <NewNavBar />

      <div className="faq">
        <div className="faq-wrap">
          <div className="top">
            <Loader loading={isLoading} />
            <h1> Frequently Asked Questions (FAQ)</h1>
          </div>
          <div className="listt">
            <div className="list">
              {data?.map((item, index) => (
                <div
                  className={
                    selectedQuest.header === item.header
                      ? "card active"
                      : "card"
                  }
                  key={item.header}
                >
                  <header onClick={() => setSelectedQuest(item)} style={{ fontSize: "1.5rem" }}>
                    <h2>{item.header}</h2>
                    {selectedQuest.header === item.header ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </header>
                  {item.content.map((data, index) => (
                    <article style={{ fontSize: "1.25rem" }} key={index}>{data}</article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default FAQ;
