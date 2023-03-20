import React, { useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.scss";
import { faqList } from "./FAQData";

const FAQ = () => {
  const [selectedQuest, setSelectedQuest] = useState({
    header: "",
    content: [""],
  });
  return (
    <UIProvider>
      <NewNavBar />
      <div className="faq">
        <div className="faq-wrap">
          <div className="top">
            <h1> Frequently Asked Questions (FAQ)</h1>
          </div>
          <div className="listt">
            <div className="list">
              {faqList.map((item) => (
                <div
                  className={
                    selectedQuest.header === item.header
                      ? "card active"
                      : "card"
                  }
                  key={item.header}
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
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default FAQ;
