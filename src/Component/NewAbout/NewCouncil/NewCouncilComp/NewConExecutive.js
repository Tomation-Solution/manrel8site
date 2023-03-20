import React from "react";
import NoPicture from "../../../../images/new-images/executivesImg/NoPicture.png";
import ManualRenders from "./ManualRenders";
import { memberData, renderData } from "./NewCouncilData";

const NewConExecutive = () => {
  return (
    <>
      <article>
        <h1 className="article-header">Executive Commitee Members</h1>
        <p className="article-desc">
          The Executive Committee is a group of experienced professionals duly
          elected by MAN members and entrusted with the obligation to conduct
          the affairs of the Association according to its constitution.
        </p>

        <ManualRenders />

        <div className="member_items">
          {renderData.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.name}</p>
                  <p className="header">{item?.name2}</p>
                  {/* <p className="detail">{item?.title}</p> */}
                  {/* <p className="detail">{item?.address}</p> */}
                  {/* <p className="detail">{item?.email}</p>
                  <p className="detail">{item?.phone}</p> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="member_items">
          {memberData.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                {/* <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div> */}
                <div className="right">
                  <p className="header">{item?.name}</p>
                  <p className="header">{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default NewConExecutive;
