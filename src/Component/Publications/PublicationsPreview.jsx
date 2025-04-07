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

        {render_data.publication_content ? (
          <>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: render_data.publication_content,
                }}
              ></p>
            </section>
          </>
        ) : null}

        {render_data.link ? (
          <a href={`${render_data.link}`} rel="noreferrer" target="_blank">
            Click here to download
          </a>
        ) : null}

        {render_data.readmore_link ? (
          <a
            href={`${render_data.readmore_link}`}
            rel="noreferrer"
            target="_blank"
          >
            click here to Read more
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default PublicationsPreview;
