import React from "react";
import useMealFetcher from "../use-fetch-hook";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as GlobeIcon } from "./../../assets/svg_globe.svg";
import { ReactComponent as MealIcon } from "./../../assets/svg_meal.svg";
import styles from "./meal-card.module.css";

import Loading from "./../loading-error/loading";
import Error from "./../loading-error/loading";
const MealCard = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  // extract data fetching, loading state and error handling into a custom hook called useMealFetcher
  const { data, error, isLoading } = useMealFetcher(id);
  console.log(data);
  const meal = data;

  const item = {
    img: meal.strMealThumb,
    id: +meal.idMeal,
    name: meal.strMeal,
    area: meal.strArea,
    category: meal.strCategory,
    ingredients: Array(
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
      meal.strIngredient10,
      meal.strIngredient11,
      meal.strIngredient12,
      meal.strIngredient13,
      meal.strIngredient14,
      meal.strIngredient15,
      meal.strIngredient16,
      meal.strIngredient17,
      meal.strIngredient18,
      meal.strIngredient19,
      meal.strIngredient20
    ),
  };

  let ingr = [];
  item.ingredients
    .filter((ingr) => ingr !== "" && ingr !== null)
    .map((el) => {
      if (el !== undefined) {
        ingr.push(el);
      }
    });

  let ingArr = ingr.map(
    (el) =>
      String(el).charAt(0).toUpperCase() + String(el).slice(1).toLowerCase()
  );

  if (isLoading) {
    return (
      <div className={styles.background}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.background}>
        <Error />
      </div>
    );
  }

  return (
    <div className={styles.background}>
      <div
        className={styles.mealCard}
        style={{
          backgroundImage: `url('${item.img}')`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ingContainer}>
          <div className={styles.genInfo}>
            <div>
              <button className={styles.back} onClick={() => navigate(-1)}>
                &larr;
              </button>
            </div>
            <div>
              <h3 className={styles.name}>{item.name}</h3>
            </div>
            <div>
              <div className={styles.CategArea}>
                <div className={styles.desc}>
                  <GlobeIcon />
                  <span> {item.area}</span>
                </div>

                <div className={styles.desc}>
                  <MealIcon />
                  <span> {item.category}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ingredients}>
            <ul>
              {ingArr.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
