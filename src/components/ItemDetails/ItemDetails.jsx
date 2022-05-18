import React, { Children, Component } from "react";

import cn from "classnames";
import styles from "./ItemDetails.module.css";
import SwapiService from "../../services/swapi-service";

import ErrorButton from "../ErrorButton";

const Record = ({ item, field, label }) => {
  return (
    <li className={cn("list-group-item", styles.item)}>
      <span className={cn(styles.term)}>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };
export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: 0,
    image: null,
  };
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }
  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Selected a person from a list</span>;
    }
    const {
      item: { id, name, gender, birthYear, eyeColor },
    } = this.state;
    return (
      <div className={cn(styles.personDetails, "card")}>
        <img className={cn(styles.personImage)} src={image} alt="img" />

        <div className={cn("card-body")}>
          <h4>{name}</h4>
          <ul className={cn("list-group", "list-group-flush")}>
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
