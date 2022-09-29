import React from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  function getPizzaList() {
    axios
      .get("/api/pizza")
      .then((result) => {
        console.log("result.data :>> ", result.data);
        dispatch({ type: "ADD_PIZZA_LIST", payload: result.data });
      })
      .catch((err) => {
        console.log("error caught in GET PIZZA LIST :>> ", err);
      });
  }

  useEffect(() => {
    getPizzaList();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
