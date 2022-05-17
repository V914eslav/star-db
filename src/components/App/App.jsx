import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../../containers/PeoplePage/PeoplePage";

import ErrorBoundry from "../ErrorBoundry";
import ErrorButton from "../ErrorButton/ErrorButton";
import ItemDetails from "../ItemDetails/ItemDetails";

import SwapiService from "../../services/swapi-service";
import { Record } from "../ItemDetails/ItemDetails";

import styles from "./App.module.css";
import cn from "classnames";
import Row from "../Row";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: 3,
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

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="cost_in_credits" label={"Cost"} />
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
// {planet}
// <div
//   className={cn("row", "mb2", "button-row", styles["button-wrapper"])}
// >
//   <button
//     className={cn("toggle-planet", "btn", "btn-warning", "btn-lg")}
//     onClick={this.toggleRandomPlanet}
//   >
//     Toggle Random Planet
//   </button>
//   <ErrorButton />
// </div>

// <PeoplePage />
