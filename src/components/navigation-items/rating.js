import styles from "./rating.module.css";
import React, { useState } from "react";
import uuid from "react-uuid";
import { FaPaw } from "react-icons/fa";
const Rating = () => {
  const [invalidName, setInvalidName] = useState(false);
  const [invalidComment, setInvalidComment] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback] = useState([
    {
      name: "Yahia",
      comment: "Meow meow meow woof woof woof!",
      rating: 4,
      id: uuid(),
    },

    { name: "Lena", comment: "Meow meow meow!", rating: 5, id: uuid() },

    {
      name: "Umka",
      comment: "Meow meow meow mrrraaayyy!",
      rating: 5,
      id: uuid(),
    },
  ]);
  const initialState = [
    {
      star: 1,
      selectedStar: false,
    },
    {
      star: 2,
      selectedStar: false,
    },
    {
      star: 3,
      selectedStar: false,
    },
    {
      star: 4,
      selectedStar: false,
    },
    {
      star: 5,
      selectedStar: false,
    },
  ];
  const [ratingArr, setRatingArr] = useState(initialState);

  const averageRating = () => {
    const summ = feedback
      .map((it) => it.rating)
      .reduce((prev, curr) => prev + curr, 0);
    return (summ / feedback.length).toFixed(2);
  };

  averageRating();
  const validateName = (e) => {
    setName(e.target.value);

    if (name.length > 2) {
      setInvalidName(false);
      setName(e.target.value);
      return true;
    } else {
      setInvalidName(true);
      return false;
    }
  };

  const validateComment = (e) => {
    setComment(e.target.value);
    if (comment.trim().length > 10) {
      setComment(e.target.value);
      setInvalidComment(false);
      return true;
    } else {
      setInvalidComment(true);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setComment("");
    setRatingArr(initialState);
    setRating(0);

    const feedbackItem = {
      name: name,
      comment: comment,
      rating: rating,
      id: uuid(),
    };

    feedback.push(feedbackItem);
  };

  const handleSetBtn = (item) => {
    const number = item.star;
    const newArr = ratingArr.map((it) => {
      if (it.star <= number) {
        it.selectedStar = true;
        return it;
      } else {
        it.selectedStar = false;
        return it;
      }
    });
    setRatingArr(newArr);
    setRating(number);
  };

  return (
    <div className={styles.mainSection}>
      <div className={styles.mealItemContainer}>
        <div className={styles.formContainer}>
          <h3>Your feedback:</h3>
          <ul className={styles.ratingList}>
            {ratingArr.map((item) => {
              return (
                <form key={uuid()}>
                  <button
                    className={styles.btnPaw}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSetBtn(item);
                    }}
                  >
                    {item.selectedStar ? (
                      <FaPaw className={styles.pawIconSelected} />
                    ) : (
                      <FaPaw className={styles.pawIcon} />
                    )}
                  </button>
                </form>
              );
            })}
          </ul>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.name}>
              <label htmlFor="name">name:</label>
              <input
                onChange={(e) => validateName(e)}
                className={styles.nameInput}
                type="name"
                id="name"
                value={name}
              ></input>
              <div className={styles.span}>
                <span>
                  {invalidName
                    ? "Name should be at least 3 character long"
                    : ""}
                </span>
              </div>
            </div>
            <div className={styles.questionContainer}>
              <label htmlFor="question">your comment:</label>
              <input
                onChange={(e) => validateComment(e)}
                type="text"
                id="question"
                value={comment}
                className={styles.question}
              ></input>

              {invalidComment && (
                <span className={styles.span}>
                  Your message should be at least 10 characters long
                </span>
              )}
            </div>
            <input
              className={
                invalidName ||
                invalidComment ||
                name === "" ||
                comment === "" ||
                rating === 0
                  ? styles.btnInactive
                  : styles.btn
              }
              type="submit"
              value="Send"
              disabled={
                invalidName ||
                invalidComment ||
                name === "" ||
                comment === "" ||
                rating === 0
                  ? true
                  : false
              }
            />
          </form>
        </div>
        <div className={styles.feedbckContainer}>
          <div>Average rating: {averageRating()}</div>
          {feedback.map((item) => (
            <div className={styles.feedbackItem} key={item.id}>
              <h3>{item.name}</h3>

              <p>{item.comment}</p>
              <h4>{item.rating}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
