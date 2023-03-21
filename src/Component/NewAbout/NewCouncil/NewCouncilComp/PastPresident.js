import React from "react";
import { pastData } from "./NewCouncilData";
import NoPicture from "../../../../images/new-images/executivesImg/NoPicture.png";

const PastPresident = () => {
  return (
    <>
      <article>
        <h1 className="article-header">Past President</h1>
        <p className="article-desc" style={{ fontSize: "16px" }}>
          {/* The Executive Committee is a group of experienced professionals duly
          elected by MAN members and entrusted with the obligation to conduct
          the affairs of the Association according to its constitution */}
          See our esteemed across the country
        </p>

        <div className="member_items">
          {pastData.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.title}</p>
                  <p className="header">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default PastPresident;
