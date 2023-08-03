import "./Inputlabel.css";

const Inputlabel = ({ label, type, placeholder }) => {
  return (
    <div className="inputlabelcontainer">
      <label>{label}</label>
      <br />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Inputlabel;
