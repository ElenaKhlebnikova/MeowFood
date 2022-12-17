import styles from "./header.module.css";
import mainPic from "../../assets/MainPic.jpg";
import mainPicSmall from "../../assets/MainPic_small.jpg";
import mainPicMedium from "../../assets/MainPic_medium.jpg";
// eslint-disable-next-line no-unused-vars
import useMediaQueryHook, { SIZES } from "../use-media-query-hook";
import React from "react";

const Header = () => {
  const picture = () => {
    if (SIZES.BIG_DESKTOP) {
      return mainPic;
    }
    if (SIZES.MOBILE) {
      return mainPicSmall;
    }
    if (SIZES.DESKTOP) {
      return mainPicMedium;
    }
  };

  return (
    <div>
      <div className={styles.container}>
        Delivering delicious meals to your door
      </div>
      <img
        className={styles.img}
        src={picture()}
        alt="Picture of tasty food"
      ></img>
    </div>
  );
};

export default Header;
