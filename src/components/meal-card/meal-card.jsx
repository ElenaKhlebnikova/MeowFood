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

  const item = {
    img: data.strMealThumb,
    id: +data.idMeal,
    name: data.strMeal,
    area: data.strArea,
    category: data.strCategory,
    ingredients: Array(
      data.strIngredient1,
      data.strIngredient2,
      data.strIngredient3,
      data.strIngredient4,
      data.strIngredient5,
      data.strIngredient6,
      data.strIngredient7,
      data.strIngredient8,
      data.strIngredient9,
      data.strIngredient10,
      data.strIngredient11,
      data.strIngredient12,
      data.strIngredient13,
      data.strIngredient14,
      data.strIngredient15,
      data.strIngredient16,
      data.strIngredient17,
      data.strIngredient18,
      data.strIngredient19,
      data.strIngredient20
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
