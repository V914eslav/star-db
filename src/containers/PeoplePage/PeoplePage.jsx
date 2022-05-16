import React, { Component } from "react";
import ItemList from "../../components/ItemList";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import Row from "../../components/Row";
import ErrorBoundry from "../../components/ErrorBoundry";

import SwapiService from "../../services/swapi-service";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {({ name, birth_year }) => `${name}  ${birth_year})`}
      </ItemList>
    );

    const personDetails = <ItemDetails personId={this.state.selectedPerson} />;
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
