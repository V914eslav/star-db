import React from "react";

import styles from "./Header.module.css";
import cn from "classnames";
const links = ["People", "Planets", "Starships"];
const Header = () => {
  const navLinks = links.map((link, index) => {
    return (
      <li className={styles.linkItem} key={index}>
        <a href="#" className={styles.link}>
          {link}
        </a>
      </li>
    );
  });
  return (
    <header className={cn("d-flex", styles.header)}>
      <div className={styles.logo}>Star DB</div>
      <ul className={cn("d-flex", styles.nav)}>{navLinks}</ul>
    </header>
  );
};

export default Header;
