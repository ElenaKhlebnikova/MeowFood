import React from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import mainLogo from "./../../assets/meow-main-logo.png";
const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div>
        <img src={mainLogo} alt="meow food logo" className={styles.logo} />
      </div>
      <div className={styles.navOption}>
        <Link to="/about">
          <button className={styles.navBtn}>Contact us</button>
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
