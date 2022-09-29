import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, bindActionCreators } from "redux";

function pizzaListReducer(state = [], action) {
  if (action.type === "ADD_PIZZA_LIST") {
    return action.payload;
  }
  return state;
}

function orderInformationReducer(state = {}, action) {
  if (action.type === "ADD_PIZZA_ORDER") {
  } else if (action.type === "REMOVE_PIZZA_ORDER") {
  } else if (action.type === "ADD_CUSTOMER_INFO") {
  } else if (action.type === "CLEAR_ORDER") {
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    pizzaList: pizzaListReducer,
    orderInformation: orderInformationReducer,
  })
);

ReactDOM.render(
  <Provider state={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
