import React, { Component } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";

class PeoplePage extends Component {
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
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
