import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

function pizzaListReducer(state = [], action) {
  if (action.type === "ADD_PIZZA_LIST") {
    return action.payload;
  }
  return state;
}

function orderInformationReducer(state = {}, action) {
  if (action.type === "ADD_PIZZA_ORDER") {
    return { ...state, pizzas: [...state.pizzas, action.payload] };
  } else if (action.type === "REMOVE_PIZZA_ORDER") {
    //Need to find out how David is sending id - assuming he is just sending an ID
    let newPizzaList = [...state.pizzas];
    newPizzaList = newPizzaList.filter((item) => item.id !== action.payload);
    return { ...state, pizzas: newPizzaList };
  } else if (action.type === "ADD_CUSTOMER_INFO") {
    return { ...state, ...action.payload };
  } else if (action.type === "CLEAR_ORDER") {
    return {};
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
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
