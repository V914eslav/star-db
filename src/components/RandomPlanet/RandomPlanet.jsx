import React from "react";

import styles from "./RandomPlanet.module.css";
const RandomPlanet = () => {
  return (
    <div className={styles.randomPlanet}>
      <img
        src="https://starwars-visualguide.com
        "
        alt="planet"
        className={styles.planetImage}
      />
    </div>
  );
};

export default RandomPlanet;
