import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../../containers/PeoplePage/PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import ErrorMessage from "../ErrorMessage";
import ErrorButton from "../ErrorButton/ErrorButton";

import SwapiService from "../../services/swapi-service";

import styles from "./App.module.css";
import cn from "classnames";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <div
          className={cn("row", "mb2", "button-row", styles["button-wrapper"])}
        >
          <button
            className={cn("toggle-planet", "btn", "btn-warning", "btn-lg")}
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
