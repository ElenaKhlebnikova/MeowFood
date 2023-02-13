import React, { useState } from "react";
import MealItem from "./meal-item";
import styles from "./list-of-meals.module.css";
import useMealFetcher from "../use-fetch-hook";
import Loading from "../loading-error/loading";
import Error from "../loading-error/error";

const ListOfMeals = () => {
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useMealFetcher("", category, order, page);

  const handleSelect = function (e) {
    setCategory(e.target.value);
  };
  const handleChangeOrder = function (e) {
    setOrder(e);
  };

  return (
    <>
      <div className={styles.menuBox}>
        <div className={styles.select}>
          <label htmlFor="category">Select a category:</label>
          <select name="category" id="category" onChange={handleSelect}>
            <option value="All">No category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div className={styles.price}>
          <p>Sort by price:</p>
          <button className={styles.btn} onClick={() => handleChangeOrder(1)}>
            &uarr;
          </button>
          <button className={styles.btn} onClick={() => handleChangeOrder(-1)}>
            &darr;
          </button>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.container}>
          <ul className={isLoading || error ? styles.ulLoading : styles.ul}>
            {isLoading && (
              <div className={styles.loadingContainer}>
                <Loading />
              </div>
            )}
            {error && (
              <div>
                <Error />
                <h3 className={styles.errorText}>Something went wrong...</h3>
              </div>
            )}
            {data.map((item) => (
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
      <div className={styles.pagesContainer}>
        <div className={styles.pages}>
          {page !== 1 ? (
            <button className={styles.btn} onClick={() => setPage(page - 1)}>
              &larr;
            </button>
          ) : (
            ""
          )}
          <p>{page}</p>
          {data.length !== 0 ? (
            <button className={styles.btn} onClick={() => setPage(page + 1)}>
              &rarr;
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ListOfMeals;
