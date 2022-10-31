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

  const [selected, setSelect] = useState("No category");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <div className={styles.select}>
        <label htmlFor="category">Select a category:</label>

        <select name="category" id="category" onChange={handleSelect}>
          <option value="No category">-</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <ul className={styles.ul}>
            {data
              .filter(
                (item) =>
                  selected === "No category" || item.category === selected
              )
              .map((item) => (
                <MealItem
                  img={item.strMealThumb}
                  key={item.idMeal}
                  id={item.idMeal}
                  name={item.strMeal}
                  price={+item.price}
                  category={item.category}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListOfMeals;
