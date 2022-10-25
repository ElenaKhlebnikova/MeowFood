import React, { useEffect, useState } from "react";
import MealItem from "./meal-item";
import styles from "./list-of-meals.module.css";

const ListOfMeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://meals-api.onrender.com/api/meals`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  const mealItems = data.map((item) => (
    <MealItem
      img={item.strMealThumb}
      key={item.idMeal}
      id={item.idMeal}
      name={item.strMeal}
      price={+item.price}
    />
  ));

  return (
    <div className={styles.mainSection}>
      <div className={styles.container}>
        <ul className={styles.ul}>{mealItems}</ul>
      </div>
    </div>
  );
};

export default ListOfMeals;
