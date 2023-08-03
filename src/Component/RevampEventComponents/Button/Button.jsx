import React from "react";
import "./Button.css";

const Button = ({ content, variants, onClick }) => {
  return (
    <button onClick={onClick} className={`sharedbutton ${variants}`}>
      {content}
    </button>
  );
};

export default Button;
