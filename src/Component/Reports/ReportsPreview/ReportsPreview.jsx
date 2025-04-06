import React from "react";
import "./ReportsPreview.scss";
import { dateformatter } from "../../../utils/date-formatter";

const ReportsPreview = ({ render_data, isImage, no_title }) => {
  console.log(render_data);

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

        {render_data.report_content ? (
          <>
            <section style={{ padding: "1.5rem", marginBottom: "3rem" }}>
              <p
                dangerouslySetInnerHTML={{ __html: render_data.report_content }}
              ></p>
            </section>
          </>
        ) : null}

        {render_data.link ? (
          <a href={`${render_data.link}`} rel="noreferrer" target="_blank">
            click here to download or Read more
          </a>
        ) : null}

        {render_data.readmore_link ? (
          <a
            href={`${render_data.readmore_link}`}
            rel="noreferrer"
            target="_blank"
          >
            click here to download or Read more
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ReportsPreview;
