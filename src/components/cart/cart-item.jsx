import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import styles from "./cart-item.module.css";
import PropTypes from "prop-types";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.quantityContainer}>
          Quantity: {props.amount}
          <button className={styles.btn} onClick={() => cartCtx.addItem(props)}>
            +
          </button>
          <button
            className={styles.btn}
            onClick={() => cartCtx.removeItem(props)}
          >
            -
          </button>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>Price: {props.price} $</p>
        <p className={styles.total}>
          Total amount: {(props.price * props.amount).toFixed(2)} $
        </p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
