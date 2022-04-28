import React, { Component } from "react";

import cn from "classnames";
import styles from "./PersonDetails.module.css";
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: 0,
  };
  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }
  render() {
    if (!this.state.person) {
      return <span>Selected a person from a list</span>;
    }
    const {
      person: { id, name, gender, birthYear, eyeColor },
    } = this.state;
    return (
      <div className={cn(styles.personDetails, "card")}>
        <img
          className={cn(styles.personImage)}
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className={cn("card-body")}>
          <h4>
            {name}
            {this.props.personId}
          </h4>
          <ul className={cn("list-group", "list-group-flush")}>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Gender</span>
              <span>{gender}</span>
            </li>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
