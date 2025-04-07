import React from "react";

const NewsPreivew = ({ render_data, isImage, no_title }) => {
  return (
    <div className="reports-preview">
      {isImage ? (
        <div className="preview-image">
          <img alt="" src={render_data?.image} />
        </div>
      ) : null}

      <div className="preview-text">
        {!no_title ? <h2 className="title-text">{render_data.title}</h2> : null}

        {/* {render_data?.created_at && (
          <p className="pub-paragraph date-text">
            Date: {dateformatter(new Date(render_data?.created_at))}
          </p>
        )} */}

        {render_data.news_content ? (
          <section>
            <p
              dangerouslySetInnerHTML={{ __html: render_data.news_content }}
            ></p>
          </section>
        ) : render_data.details ? (
          <>
            {render_data.details.map((item, index) => (
              <section key={index}>
                <h4 className="details-header">
                  {item.header.length === 1 ? "" : item.header}
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.value.replaceAll(`\n`, `<br />`),
                  }}
                ></p>
              </section>
            ))}
          </>
        ) : null}

        {/* {render_data.link ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <a href={`${render_data.link}`} rel="noreferrer" target="_blank">
              Click here to Download
            </a>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default NewsPreivew;
