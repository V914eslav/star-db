import React, { Component } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";

import SwapiService from "../../services/swapi-service";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

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
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, birth_year, gender }) =>
          `${name}  (${gender}, ${birth_year})`
        }
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
