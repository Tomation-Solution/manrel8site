import React from "react";
import NoPicture from "../../../../images/new-images/executivesImg/NoPicture.png";
import ManualRenders from "./ManualRenders";
import {
  memberData,
  PurposeVeh,
  renderData,
  SectoralData,
  SpecialPur,
  StrategicMemb,
} from "./NewCouncilData";
import PastPresident from "./PastPresident";

const NewConExecutive = () => {
  return (
    <>
      <article>
        <p className="article-desc" style={{ color: "#2b3513" }}>
          The National Council is a group of experienced professionals duly
          elected by MAN members and entrusted with the obligation to conduct
          the affairs of the Association according to its constitution.
        </p>
        <h1 className="article-header" style={{ marginTop: "30px" }}>
          Executive Committee Members
        </h1>

        <ManualRenders />
      </article>

      <article>
        <h1 className="article-header">CHAIRMEN OF BRANCHES</h1>
        <p className="article-desc"></p>
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
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <article>
        <h1 className="article-header">CHAIRMEN OF SECTORAL GROUPS</h1>
        <p className="article-desc"></p>
        <div className="member_items">
          {SectoralData.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.title2}</p>
                  <p className="header">{item?.name2}</p>
                  <p className="header">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <article>
        <h1 className="article-header">
          CHAIRMEN OF SPECIAL PURPOSE VEHICLES OF MAN
        </h1>
        <div className="member_items">
          {PurposeVeh.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.title2}</p>
                  <p className="header">{item?.name2}</p>
                  <p className="header">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <article>
        <h1 className="article-header">
          CHAIRMEN OF SPECIAL PURPOSE GROUPS OF MAN
        </h1>
        <div className="member_items">
          {SpecialPur.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.title2}</p>
                  <p className="header">{item?.name2}</p>
                  <p className="header">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <PastPresident />

      <article>
        <h1 className="article-header">ELECTED MEMBERS</h1>
        <div className="member_items">
          {memberData.map((item, index) => {
            return (
              <div className="member_item" key={index}>
                <div className="right">
                  <p className="header">{item?.title}</p>
                  <p className="header">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      <article>
        <h1 className="article-header">STRATEGIC MEMBERS</h1>
        <div className="member_items">
          {StrategicMemb.map((item, index) => {
            return (
              <div className="member_item" key={index}>
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

export default NewConExecutive;
