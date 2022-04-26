import React from "react";

import styles from "./ErrorMessage.module.css";
import icon from "./img/death-star.png";

const ErrorMessage = () => {
  return (
    <div className={styles["error-indicator"]}>
      <img src={icon} alt="error icon" className={styles.icon} />
      <span className={styles.boom}>BOOM!</span>
      <span>something has gone terrinly wrong</span>
      <span>(but we already sent droids to fox it)</span>
    </div>
  );
};

export default ErrorMessage;
