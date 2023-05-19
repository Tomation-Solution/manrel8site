import React from "react";
import BackDrop from "../../BackDrop/BackDrop";
import "./PaidPublicationPreview.scss";
import { formatMoney } from "../../../utils/money-formatter";

const PaidPublicationsPreview = ({ openPayModal, closefn, data }) => {
  console.log(data);
  return (
    <BackDrop>
      <div className="paid-publication-preview">
        <div className="close-btn">
          <button
            onClick={() => {
              closefn();
              openPayModal();
            }}
          >
            proceed to pay
          </button>
          <button onClick={closefn}>close</button>
        </div>
        <img alt="" src={data.image} />
        <div className="text-section">
          <p>
            <span className="darken">Title: </span>
            {data.title}
          </p>
          <p>
            <span className="darken">Name: </span>
            {data.name}
          </p>
          <p>
            <span className="darken">Price: </span>
            {formatMoney(data.price)}
          </p>
        </div>
      </div>
    </BackDrop>
  );
};

export default PaidPublicationsPreview;
