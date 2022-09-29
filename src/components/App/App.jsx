import React from "react";
import Header from "../Header/Header";
import CustomerDetails from "../Pages/CustomerDetails";
import PizzaList from "../PizzaList/PizzaList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomerDetails  />
      <PizzaList />
    </div>
  );
}

export default App;
