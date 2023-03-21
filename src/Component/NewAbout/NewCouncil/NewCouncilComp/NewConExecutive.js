import React from "react";
import NoPicture from "../../../../images/new-images/executivesImg/NoPicture.png";
import ManualRenders from "./ManualRenders";
import { memberData, renderData } from "./NewCouncilData";
import PastPresident from "./PastPresident";

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

        <article>
          <h1 className="article-header">Branch Chairmen</h1>
          <p className="article-desc">
            The Branch Chairmen is a group of experienced professionals as
            chairmen of their respective branchs
          </p>
          <div className="member_items">
            {renderData.map((item, index) => {
              return (
                <div className="member_item" key={index}>
                  <div className="left">
                    <img alt="" src={item?.image || NoPicture} />
                  </div>
                  <div className="right">
                    <p className="header">{item?.title2}</p>
                    <p className="header">{item?.name2}</p>
                    <p className="header">{item?.name}</p>
                    {/* <p className="detail">{item?.title}</p> */}
                    {/* <p className="detail">{item?.address}</p> */}
                    {/* <p className="detail">{item?.email}</p>
                  <p className="detail">{item?.phone}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <PastPresident />

        <article>
          <h1 className="article-header">Members</h1>
          <p className="article-desc">More of our highly respected members</p>
          <div className="member_items">
            {memberData.map((item, index) => {
              return (
                <div className="member_item" key={index}>
                  {/* <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div> */}
                  <div className="right">
                    <p className="header">{item?.title}</p>
                    <p className="header">{item?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </article>
    </>
  );
};

export default NewConExecutive;
