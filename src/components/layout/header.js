import styles from "./header.module.css";
import mainPic from "../../assets/MainPic.jpg";
import React from "react";

const Header = () => (
  <div>
    <div className={styles.container}>
      Delivering delicious meals to your door
    </div>
    <img className={styles.img} src={mainPic} alt="Picture of tasty food"></img>
  </div>
);

export default Header;
