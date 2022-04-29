import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner";

import cn from "classnames";
import styles from "./RandomPlanet.module.css";
import ErrorMessage from "../ErrorMessage";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className={cn(styles.randomPlanet, "jumbotron", "rounded")}>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className={cn(styles.planetImage)}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className={cn(styles.items, "list-group", "list-group-flush")}>
          <li className={cn(styles.item, "list-group-item")}>
            <span className={cn(styles.term)}>Population</span>
            <span>{population}</span>
          </li>
          <li className={cn(styles.item, "list-group-item")}>
            <span className={cn(styles.term)}>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className={cn(styles.item, "list-group-item")}>
            <span className={cn(styles.term)}>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
