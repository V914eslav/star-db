import React, { Component } from "react";

import Header from "../Header";
import ItemList from "../ItemList/ItemList";
import RandomPlanet from "../RandomPlanet";
import PersonDetails from "../PersonDetails";
// import ErrorMessage from "../ErrorMessage";

// import styles from "./App.module.css";
import cn from "classnames";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
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
    return (
      <div>
        <Header />
        {planet}
        <button
          className={cn("toggle-planet", "btn", "btn-warning", "btn-lg")}
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
