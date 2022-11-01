import React from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navOption}>
        <Link to="/about">
          <button className={styles.navBtn}>About us</button>
        </Link>
      </div>
      <div className={styles.navOption}>
        <Link to="/meals">
          <button className={styles.navBtn}>Meals</button>
        </Link>
      </div>
      <div className={styles.navOption}>
        <Link to="/rating">
          <button className={styles.navBtn}>Rating</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
