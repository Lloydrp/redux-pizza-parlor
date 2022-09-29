import React from "react";
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";
import { HashRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import "./App.css";
import CustomerForm from "../CustomerForm/CustomerForm.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="nav-bar">
          <NavLink to="/">Za Home</NavLink>{" "}
          <NavLink to="/info">Your Info</NavLink>{" "}
          <NavLink to="/checkout">Checkout</NavLink>{" "}
          <NavLink to="/admin">Za Admin</NavLink>
        </div>
        <Switch>
          <Route path="/info">
            <CustomerForm />
          </Route>
          <Route path="/checkout">
            {/* insert checkout component here */}
          </Route>
          <Route path="/admin">
            {/* insert admin component here */}
          </Route>
          <Route path="/">
            <PizzaList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
