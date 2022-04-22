import React from "react";

import Header from "../Header";
import ItemList from "../ItemList/ItemList";
import RandomPlanet from "../RandomPlanet";
import PersonDetails from "../PersonDetails";

// import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
