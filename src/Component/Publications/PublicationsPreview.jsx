import React from "react";
import "../Reports/ReportsPreview/ReportsPreview.scss";
import { dateformatter } from "../../utils/date-formatter";

const PublicationsPreview = ({ render_data, isImage, no_title }) => {
  return (
    <div className="reports-preview">
      {isImage ? (
        <div className="preview-image">
          <img alt="" src={render_data?.image} />
        </div>
      ) : null}
      <div className="preview-text">
        {!no_title ? <h2 className="title-text">{render_data.title}</h2> : null}
        {render_data?.created_at && (
          <p className="pub-paragraph date-text">
            Date: {dateformatter(new Date(render_data?.created_at))}
          </p>
        )}
        {render_data.details ? (
          <>
            {render_data.details.map((item, index) => (
              <section key={index}>
                <h4 className="details-header">{item.header}</h4>
                <p>{item.value}</p>
              </section>
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

export default PublicationsPreview;
