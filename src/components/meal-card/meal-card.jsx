import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// import CartContext from "../context/cart-context";
import styles from "./meal-card.module.css";

const MealCard = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://meals-api.onrender.com/api/meals`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  const item = data.map((item) => {
    const itemToDisplay = {
      img: item.strMealThumb,
      key: +item.idMeal,
      id: +item.idMeal,
      name: item.strMeal,
      price: +item.price,
    };
    console.log(itemToDisplay);
  });

  return (
    <div className={styles.back}>
      <div className={styles.test}>
        <p className={styles.name}>{item.name}</p>
        <button onClick={() => navigate(-1)}> BACK!!!!!!!!!</button>
      </div>
    </div>
  );
};

export default MealCard;
