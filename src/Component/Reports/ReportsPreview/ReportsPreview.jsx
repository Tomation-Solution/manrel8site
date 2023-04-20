import React from "react";
import "./ReportsPreview.scss";

const ReportsPreview = ({ render_data, isImage, no_title }) => {
  return (
    <div className="reports-preview">
      {isImage ? (
        <div className="preview-image">
          <img alt="" src={render_data?.image} />
        </div>
      ) : null}
      <div className="preview-text">
        {no_title ? <h2>{render_data.title}</h2> : null}
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
        {render_data.link ? (
          <a href={`${render_data.link}`} rel="noreferrer" target="_blank">
            Click here to download or Read more
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ReportsPreview;
