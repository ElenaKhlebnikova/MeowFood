import styles from "./about-us.module.css";
import React, { useState } from "react";
import Map from "./Map/map";
const AboutUs = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidComment, setInvalidComment] = useState(false);
  const [messageIsShown, setMessageIsShown] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (
      email.match(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setInvalidEmail(false);
      setEmail(e.target.value);
      return true;
    } else {
      setInvalidEmail(true);
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
    setInvalidEmail(false);
    setInvalidComment(false);
    setEmail("");
    setComment("");
    setMessageIsShown(true);
  };

  return (
    <div className={styles.mainSection}>
      <div className={styles.mealItemContainer}>
        <div className={styles.formContainer}>
          <h3>Any questions? Contact us!</h3>

          {messageIsShown && (
            <div className={styles.confirmContainer}>
              <p>Thank you for your message! We will reply to you in 24h.</p>
              <button
                onClick={() => setMessageIsShown(false)}
                className={styles.btn}
              >
                OK
              </button>
            </div>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.mail}>
              <label htmlFor="e-mail">e-mail:</label>
              <input
                onChange={(e) => validateEmail(e)}
                className={styles.mailInput}
                type="e-mail"
                id="e-mail"
                value={email}
              ></input>
              <div className={styles.span}>
                <span>{invalidEmail ? "Please, enter valid e-mail" : ""}</span>
              </div>
            </div>
            <div className={styles.questionContainer}>
              <label htmlFor="question">your question:</label>
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
                invalidEmail || invalidComment || email === "" || comment === ""
                  ? styles.btnInactive
                  : styles.btn
              }
              type="submit"
              value="Send"
              disabled={
                invalidEmail || invalidComment || email === "" || comment === ""
                  ? true
                  : false
              }
            />
          </form>
        </div>

        <div className={styles.address}>
          <div id="map" className={styles.mapContainer}>
            <Map />
          </div>

          <div className={styles.addressContainer}>
            <div>
              2601 Shobe Lane, <br />
              Vail
            </div>
            <div>
              <strong> Mon. - Fri.</strong> 10:00 - 22:00 <br />
              <strong>Sat. - Sun.</strong> 10:00 - 21:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
