import React, { Component } from "react";

import cn from "classnames";
import styles from "./PersonDetails.module.css";

export default class PersonDetails extends Component {
  render() {
    return (
      <div className={cn(styles.personDetails, "card")}>
        <img
          className={cn(styles.personImage)}
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
        />

        <div className={cn("card-body")}>
          <h4>R2-D2</h4>
          <ul className={cn("list-group", "list-group-flush")}>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Gender</span>
              <span>male</span>
            </li>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Birth Year</span>
              <span>43</span>
            </li>
            <li className={cn("list-group-item", styles.item)}>
              <span className={cn(styles.term)}>Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
