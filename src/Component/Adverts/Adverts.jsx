import React from "react";
import styles from "./Adverts.module.css";
import { useCustomFetcher } from "../../utils/customfetcher";
import { getAllAdverts } from "../../utils/csm-api-calls";
import EmptyState from "../EmptyState/EmptyState";

function Adverts({ image, text }) {
  const { loadingState, isError, data } = useCustomFetcher(
    "all-adverts",
    getAllAdverts,
    (data) => data.data[0]
  );

  if (loadingState) {
    return <EmptyState header={"Loading data"} />;
  }

  if (data?.length <= 0) {
    return <EmptyState header={"Oops there seems to be nothing here"} />;
  }

  if (isError || !data) {
    return (
      <EmptyState
        header={"Oops something  went wrong"}
        subHeader={"try again later"}
      />
    );
  }

  return (
    <section className={styles.advert__container}>
      <img src={data?.image} alt="advert" />
      <p>{data?.text}</p>
    </section>
  );
}

export default Adverts;
