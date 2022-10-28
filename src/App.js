import React, { useState } from "react";
import ListOfMeals from "./components/list-of-meals/list-of-meals";
import CartProvider from "./components/context/cart-provider";
import CartBtnOpen from "./components/cart/cart-open-btn";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import MealCard from "./components/meal-card/meal-card";
import "./App.module.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<MealCard />} />
        </Routes>
        <Header />
        <CartBtnOpen onClick={() => setCartIsShown(true)} />
        {cartIsShown && <Cart onClick={() => setCartIsShown(false)} />}
        <ListOfMeals />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
