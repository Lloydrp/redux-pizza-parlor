import React from "react";
import { HashRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import "./App.css";
import CustomerDetails from "../Pages/CustomerDetails";
import OrderPage from "../Pages/OrderPage";
import Admin from "../Pages/Admin";
import Checkout from "../Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
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
