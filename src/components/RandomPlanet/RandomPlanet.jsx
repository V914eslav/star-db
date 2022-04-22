import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import cn from "classnames";
import styles from "./RandomPlanet.module.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = 12;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter },
    } = this.state;

    return (
      <div className={cn(styles.randomPlanet, "jumbotron", "rounded")}>
        <img
          className={cn(styles.planetImage)}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className={cn(styles.items, "list-group", "list-group-flush")}>
            <li className={cn(styles.item,"list-group-item")}>
              <span className={cn(styles.term)}>Population</span>
              <span>{population}</span>
            </li>
            <li className={cn(styles.item,"list-group-item")}>
              <span className={cn(styles.term)}>Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className={cn(styles.item,"list-group-item")}>
              <span className={cn(styles.term)}>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
