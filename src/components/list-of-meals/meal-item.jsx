import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import styles from "./meal-item.module.css";
import { Link } from "react-router-dom";

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
        <h3>{props.name}</h3>

        <div className={styles.priceContiner}>
          <Link to={`meals/${props.id}`}>
            <button className={styles.ingredientsBtn}>
              Ingredients &rarr;
            </button>
          </Link>
          <p className={styles.price}>{props.price}$</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={props.img} alt="image of the meal" />
        <button
          className={styles.addToCartBtn}
          onClick={() => addToCart(props)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default MealItem;
