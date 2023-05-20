export const SelectImage = ({ image, text }) => (
  <div style={{ margin: "10px 0px" }}>
    <h4>Current {text ? text : "Image"}</h4>
    <img
      alt=""
      src={image}
      style={{ width: "100%", height: "100px", objectFit: "contain" }}
    />
  </div>
);

export const ViewSubmittedDocument = ({ link }) => (
  <div style={{ margin: "10px 0px" }}>
    <a href={link} style={{ textDecoration: "underline", cursor: "pointer" }}>
      Click here to view document, if any submitted
    </a>
  </div>
);
