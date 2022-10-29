import styles from "./header.module.css";
import mainPic from "../../assets/MainPic.jpg";
import mainPicSmall from "../../assets/MainPic_small.jpg";
import mainPicMedium from "../../assets/MainPic_medium.jpg";
import mediaQuery from "./../media-query";
import React from "react";

const Header = () => {
  const smallDesktop = mediaQuery("(max-width: 900px, min-width: 500px)");
  const mobile = mediaQuery("(max-width: 500px)");

  const picture = () => {
    if (mobile) {
      return mainPicSmall;
    }
    if (smallDesktop) {
      return mainPicMedium;
    }

    return mainPic;
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
