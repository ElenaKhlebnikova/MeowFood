import React, { useState } from "react";
import ListOfMeals from "./components/list-of-meals/list-of-meals";
import CartProvider from "./components/context/cart-provider";
import CartBtnOpen from "./components/cart/cart-open-btn";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import "./App.module.css";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <div>
      <CartProvider>
        <Header />
        <CartBtnOpen onClick={() => setCartIsShown(true)} />
        {cartIsShown && <Cart onClick={() => setCartIsShown(false)} />}
        <ListOfMeals />
      </CartProvider>
    </div>
  );
};

export default App;
