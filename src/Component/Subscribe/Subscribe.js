import React from "react";
import Image from "../../images/div-sub.png";
import { useUIContext } from "../../Ui";
import CloseIcon from "@mui/icons-material/Close";
import "./Subscribe.scss";

function Subscribe() {
  const { subscribe, setSubscribe } = useUIContext();
  return (
    subscribe && (
      <div className="Subscribe">
        <div className="cover">
          <CloseIcon
            onClick={() => setSubscribe(false)}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          />
          <div className="left">
            <img src={Image} alt="" />
          </div>
          <div className="right">
            <div className="huo">
              <h1>Subscribe to our Newsletter</h1>
              <div>
                <input type="email" placeholder="Email Address" />
              </div>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Subscribe;
