import React, { useState } from "react";
import ListOfMeals from "./components/list-of-meals/list-of-meals";
import CartProvider from "./components/context/cart-provider";
import CartBtnOpen from "./components/cart/cart-open-btn";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import MealCard from "./components/meal-card/meal-card";
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import Rating from "./components/navigation-items/rating";
import AboutUs from "./components/navigation-items/about-us";
import Footer from "./components/layout/footer";
import styles from "./App.module.css";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  console.log("Yahia is a horny girrrrrrrrllllll");
  return (
    <CartProvider>
      <BrowserRouter>
        <div className={styles.main}>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/meals" element={<ListOfMeals />} />
            <Route path="/meals/meals/:id" element={<MealCard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/rating" element={<Rating />} />
          </Routes>
          <Footer />
        </div>
        <CartBtnOpen onClick={() => setCartIsShown(true)} />
        {cartIsShown && <Cart onClick={() => setCartIsShown(false)} />}
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
