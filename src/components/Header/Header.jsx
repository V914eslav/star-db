import React from "react";

import styles from "./Header.module.css";
// import cn from "classnames";
const links = ["People", "Planets", "Starships"];
const Header = () => {
  const navLinks = links.map((link, index) => {
    return (
      <li className={styles.link} key={index}>
        {link}
      </li>
    );
  });
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Star DB</div>
      <ul className={styles.nav}>{navLinks}</ul>
    </header>
  );
};

export default Header;
