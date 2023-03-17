import React from "react";
import BackDrop from "../BackDrop/BackDrop";

import "./MpdclModal.scss";

const MpdclModal = ({ name, details, closefn }) => {
  return (
    <BackDrop>
      <div className="modal">
        <h1>{name}</h1>

        {details.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <div className="btn-container">
          <button onClick={closefn}>close</button>
        </div>
      </div>
    </BackDrop>
  );
};

export default MpdclModal;
