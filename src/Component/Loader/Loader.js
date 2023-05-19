import BarLoader from "react-spinners/BarLoader";
import BackDrop from "../BackDrop/BackDrop";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: `#2b3513`,
};

const Loader = ({ light, loading }) => {
  return (
    <>
      {loading && (
        <BackDrop>
          <BarLoader
            color={light ? "#fff" : "#2b3513"}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </BackDrop>
      )}
    </>
  );
};

export default Loader;
