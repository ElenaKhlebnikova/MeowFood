import React, { useContext } from "react";
import styles from "./cart.module.css";
import CartContext from "../context/cart-context";
import CartItem from "./cart-item";
import PropTypes from "prop-types";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;

  const cartItem = items.map((cartIt) => {
    return (
      <CartItem
        name={cartIt.name}
        id={cartIt.id}
        price={cartIt.price}
        amount={cartIt.amount}
        key={Math.random()}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.meals}>
          <div>{items.length === 0 ? <p>The cart is empty</p> : cartItem} </div>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={props.onClick} className={styles.btnClose}>
            <svg
              className={styles.btnIcon}
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
            >
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
            </svg>
          </button>
          <div className={styles.confirm}>
            {items.length !== 0 && (
              <div>Total amount: {cartCtx.totalAmount.toFixed(2)}$</div>
            )}
            <div>
              {items.length !== 0 ? (
                <button className={styles.btnConfirm}>Continue order</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Cart;
