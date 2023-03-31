export const ServiceHelper = ({ details, color }) => {
  return (
    <div
      className="core-values-item"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className="right">
        <p className="uppercase-first">{details}</p>
      </div>
    </div>
  );
};
export const ServiceHelperCentered = ({ details, color }) => {
  return (
    <div
      className="core-values-item centered"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className="right">
        <p className="uppercase-first">{details}</p>
      </div>
    </div>
  );
};
