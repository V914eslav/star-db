import React, { Component } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";

import SwapiService from "../../services/swapi-service";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, birth_year, gender }) =>
              `${name}  (${gender}, ${birth_year})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
