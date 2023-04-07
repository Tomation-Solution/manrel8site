export const ServiceHelper = ({ details, color, others }) => {
  return (
    <div
      className="core-values-item"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className="right">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "60px" }}>{others}</span>
          <p style={{ lineHeight: "20px", marginTop: "30px" }}>{details}</p>
          {/* <p className="uppercase-first">{details}</p> */}
        </div>
      </div>
    </div>
  );
};
export const ServiceHelperCentered = ({ details, color, others }) => {
  return (
    <div
      className="core-values-item centered"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "60px" }}>{others}</span>
        <p style={{ lineHeight: "20px", marginTop: "30px" }}>{details}</p>
        {/* <p className="uppercase-first">{details}</p> */}
      </div>
    </div>
  );
};
