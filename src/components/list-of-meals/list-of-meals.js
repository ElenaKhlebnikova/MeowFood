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
      category={item.category}
    />
  ));

  console.log(mealItems);
  const [selected, setSelect] = useState("No category");
  // const [list, setList] = useState(mealItems);

  const selection = (e) => {
    let select = e.target.value;
    setSelect(select);
  };
  // let filteredBreakfast = data
  //   .filter((item) => item.category === "Breakfast")
  //   .map((item) => (
  //     <MealItem
  //       img={item.strMealThumb}
  //       key={item.idMeal}
  //       id={item.idMeal}
  //       name={item.strMeal}
  //       price={+item.price}
  //       category={item.category}
  //     />
  //   ));
  // let filteredVegetarian = data
  //   .filter((item) => item.category === "Vegetarian")
  //   .map((item) => (
  //     <MealItem
  //       img={item.strMealThumb}
  //       key={item.idMeal}
  //       id={item.idMeal}
  //       name={item.strMeal}
  //       price={+item.price}
  //       category={item.category}
  //     />
  //   ));
  // let filteredVegan = data
  //   .filter((item) => item.category === "Vegan")
  //   .map((item) => (
  //     <MealItem
  //       img={item.strMealThumb}
  //       key={item.idMeal}
  //       id={item.idMeal}
  //       name={item.strMeal}
  //       price={+item.price}
  //       category={item.category}
  //     />
  //   ));

  return (
    <>
      <div className={styles.select}>
        <label htmlFor="category">Select a category:</label>

        <select name="category" id="category" onChange={selection}>
          <option value="No category">-</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <ul className={styles.ul}>
            {mealItems}
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

          {/* {selected === "No category" && (
            <ul className={styles.ul}>{mealItems}</ul>
          )}
          {selected === "Breakfast" && (
            <ul className={styles.ul}>{filteredBreakfast}</ul>
          )}
          {selected === "Vegan" && (
            <ul className={styles.ul}>{filteredVegan}</ul>
          )}
          {selected === "Vegetarian" && (
            <ul className={styles.ul}>{filteredVegetarian}</ul>
          )} */}
        </div>
      </div>
    </>
  );
};

export default ListOfMeals;
