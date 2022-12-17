import styles from "./footer.module.css";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.text}>
        <p>
          Made with <BsFillHeartFill className={styles.icon} />
        </p>
      </div>
      <div className={styles.iconContainer}></div>
    </div>
  );
};

export default Footer;
