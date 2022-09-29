import React from "react";
import PizzaList from "../PizzaList/PizzaList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <PizzaList />
    </div>
  );
}

export default App;
