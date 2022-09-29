import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function pizzaListReducer(state = [], action) {
  if (action.type === "ADD_PIZZA_LIST") {
    return action.payload;
  }
  return state;
}

const defaultOrder = {
  fullName: "",
  streetAddress: "",
  city: "",
  zipCode: 0,
  total: 0,
  pizzas: [],
};

function orderInformationReducer(state = defaultOrder, action) {
  if (action.type === "ADD_PIZZA_ORDER") {
    return {
      ...state,
      pizzas: [
        ...state.pizzas,
        { id: action.payload.id, quantity: action.payload.quantity },
      ],
      total: (Number(state.total) + Number(action.payload.total)).toFixed(2),
    };
  } else if (action.type === "REMOVE_PIZZA_ORDER") {
    //Need to find out how David is sending id - assuming he is just sending an ID
    let newPizzaList = [...state.pizzas];
    newPizzaList = newPizzaList.filter((item) => item.id !== action.payload);
    return {
      ...state,
      pizzas: newPizzaList,
      total: (Number(state.total) - Number(action.payload.total)).toFixed(2),
    };
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
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
