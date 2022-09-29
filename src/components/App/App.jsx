import React from "react";
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";
import "./App.css";
import CustomerForm from "../CustomerForm/CustomerForm.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomerForm />
      <PizzaList />
    </div>
  );
}

export default App;
