import React, { Component } from "react";
import Spinner from "../Spinner";

import styles from "./ItemList.module.css";
import cn from "classnames";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };
  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList: itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className={cn("list-group-item", styles["list-group-item"])}
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return (
      <ul
        className={cn(
          "item-list",
          "list-group",
          styles["item-list"],
          styles["list-group"]
        )}
      >
        {items}
      </ul>
    );
  }
}
