import React from "react";
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";
import { HashRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import "./App.css";
import CustomerForm from "../CustomerForm/CustomerForm.jsx";
import CustomerDetails from "../Pages/CustomerDetails";
import OrderPage from "../Pages/OrderPage";
import Admin from "../Pages/Admin";
import Checkout from "../Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <NavLink to="/">Za Home</NavLink>{" "}
          <NavLink to="/info">Your Info</NavLink>{" "}
          <NavLink to="/checkout">Checkout</NavLink>{" "}
          <NavLink to="/admin">Za Admin</NavLink>
        </div>
        <Switch>
          <Route path="/info">
            <CustomerDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <OrderPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
