import React from "react";
import "./ReportsPreview.scss";

const ReportsPreview = ({ render_data }) => {
  return (
    <div className="reports-preview">
      <div className="preview-image">
        <img alt="" src={render_data?.image} />
      </div>
      <div className="preview-text">
        <h2>{render_data.title}</h2>
        {render_data?.date && (
          <p className="pub-paragraph">Date: {render_data?.date}</p>
        )}
        {render_data.freetext ? (
          <>
            {render_data.freetext.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        ) : null}
        <a href={`${render_data.link}`} rel="noreferrer" target="_blank">
          Click here to download or Read more
        </a>
      </div>
    </div>
  );
};

export default ReportsPreview;
