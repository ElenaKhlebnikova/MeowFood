import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";
import CartContext from "../context/cart-context";
import styles from "./meal-item.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (item) => {
    cartCtx.addItem({
      img: item.img,
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  return (
    <div className={styles.mealItemContainer}>
      <div className={styles.container}>
        <li className={styles.listItem}>
          <h3>{props.name}</h3>
          <p className={styles.description}>{props.description}</p>
        </li>
        <div className={styles.priceContiner}>
          <p className={styles.price}>{props.price}$</p>

          <button
            className={styles.addToCartBtn}
            onClick={() => addToCart(props)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={props.img} alt="image of the meal" />
      </div>
    </div>
  );
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default MealItem;
