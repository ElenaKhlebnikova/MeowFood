/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

// import CartContext from "../context/cart-context";
import { ReactComponent as GlobeIcon } from "./../../assets/svg_globe.svg";
import { ReactComponent as MealIcon } from "./../../assets/svg_meal.svg";
import { ReactComponent as ErrorIcon } from "./../../assets/svg_error.svg";
import styles from "./meal-card.module.css";

const MealCard = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingState(true);
        const response = await axios.get(
          `https://meals-api.onrender.com/api/meals/${id}`
        );

        setData(response.data);
        setLoadingState(false);
      } catch {
        setError(true);

        console.error("Failed to load");
      }
    };
    fetchData();
  }, []);

  const item = {
    img: data.strMealThumb,
    id: +data.idMeal,
    name: data.strMeal,
    area: data.strArea,
    category: data.strCategory,
    ingredients: Array(
      data.strIngredient1 + " ",
      data.strIngredient2 + " ",
      data.strIngredient3 + " ",
      data.strIngredient4 + " ",
      data.strIngredient5 + " ",
      data.strIngredient6 + " ",
      data.strIngredient7 + " ",
      data.strIngredient8 + " ",
      data.strIngredient9 + " ",
      data.strIngredient10 + " ",
      data.strIngredient11 + " ",
      data.strIngredient12 + " ",
      data.strIngredient13 + " ",
      data.strIngredient14 + " ",
      data.strIngredient15 + " ",
      data.strIngredient16 + " ",
      data.strIngredient17 + " ",
      data.strIngredient18 + " ",
      data.strIngredient19 + " ",
      data.strIngredient20 + " "
    ),
  };

  const ing = item.ingredients.map((el) => {
    if (el.valueOf() !== " ") {
      return <li key={Math.random()}>{el}</li>;
    } else return;
  });

  console.log(loadingState, error);

  if (loadingState) {
    return (
      <div className={styles.background}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.background}>
        <ErrorIcon className={styles.error} />
      </div>
    );
  }
  // setLoadingState(true);
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
            <ul>{ing}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
