import Button from "../RevampEventComponents/Button/Button";
import styles from "./EmptyState.module.css";

function EmptyState({ header, subHeader, refreshHandler }) {
  return (
    <div className={styles.EmptyStateContainer}>
      <h1>{header}</h1>
      <p>{subHeader}</p>
      {refreshHandler && <Button onClick={refreshHandler}>Refresh Page</Button>}
    </div>
  );
}

export default EmptyState;
