import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function AdminDetails({ item }) {
  const [adminDetails, setAdminDetails] = useState([]);
  const [localPizzaList, setLocalPizzaList] = useState([]);

  const fetchZa = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        setLocalPizzaList(response.data);
      })
      .catch((err) => console.log("Error getting za", err));
  };

  function getAdminDetails() {
    axios
      .get("/api/order/lineitem")
      .then((result) => {
        setAdminDetails(result.data);
      })
      .catch((error) => {
        console.log("error caught in get lineitems :>> ", error);
      });
  }

  useEffect(() => {
    fetchZa();
    getAdminDetails();
  }, []);
  return (
    <div>
      {item.street_address} {item.city} {item.zip}
      <div>Pizzas Ordered:</div>
      {adminDetails.map(
        (pizza) =>
          pizza.order_id === item.id && (
            <li key={pizza.id}>{localPizzaList[pizza.pizza_id - 1].name}</li>
          )
      )}
    </div>
  );
}

export default AdminDetails;
