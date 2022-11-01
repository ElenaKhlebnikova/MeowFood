import styles from "./loading_error.module.css";
import { ReactComponent as ErrorIcon } from "./../../assets/svg_error.svg";
import React from "react";

const Error = () => {
  return (
    <div>
      <ErrorIcon className={styles.error} />
      <h3>Sonething went wrong...</h3>
    </div>
  );
};

export default Error;
