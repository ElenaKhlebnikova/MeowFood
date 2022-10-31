import CartContext from "../context/cart-context";
import React, { useReducer } from "react";
import PropTypes from "prop-types";

const cartReducer = (state, action) => {
  const updatedItems = [...state.items];

  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );

  switch (action.type) {
    case "ADD": {
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push(action.item);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price,
      };
    }
    case "REMOVE":
      {
        if (action.item.amount > 1) {
          const updatedItem = {
            ...action.item,
            amount: action.item.amount - 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;

          return {
            ...state,
            items: updatedItems,
            totalAmount: state.totalAmount - action.item.price,
          };
        }

        if (action.item.amount === 1) {
          return {
            ...state,
            items: updatedItems.filter((item) => item.id !== action.item.id),
            totalAmount: state.totalAmount - action.item.price,
          };
        }
      }
      break;
    default:
      defaultCartState;
  }
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => dispatchCartAction({ type: "ADD", item }),
    removeItem: (item) => dispatchCartAction({ type: "REMOVE", item }),
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
