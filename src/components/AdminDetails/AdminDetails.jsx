import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function AdminDetails({ item }) {
  const [adminDetails, setAdminDetails] = useState([]);
  const pizzaList = useSelector((store) => store.pizzaList);

  function getAdminDetails() {
    axios
      .get("/api/order/lineitem")
      .then((result) => {
        setAdminDetails(result.data);
        console.log("result.data :>> ", result.data);
      })
      .catch((error) => {
        console.log("error caught in get lineitems :>> ", error);
      });
  }
  console.log("pizzaList :>> ", pizzaList);

  useEffect(() => {
    getAdminDetails();
  }, []);
  return (
    <div>
      {item.street_address} {item.city} {item.zip}
      <div>Pizzas Ordered:</div>
      {adminDetails.map((pizza) => (
        <li key={pizza.id}>
          {pizza.order_id === item.id ? pizzaList[pizza.pizza_id - 1].name : ""}
        </li>
      ))}
    </div>
  );
}

export default AdminDetails;
