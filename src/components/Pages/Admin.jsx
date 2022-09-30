import axios from "axios";
import { useState } from "react";
import Header from "../Header/Header";

function Admin() {
  const [adminOrders, setAdminOrders] = useState([]);

  axios
    .get("/api/order")
    .then((result) => {
      setAdminOrders(result.data);
    })
    .catch((error) => {
      console.log("error caught in order get :>> ", error);
    });
  return (
    <>
      <Header total={false} />
      <h2>AdminList Below:</h2>
      <div>
        {adminOrders.map(
          (item) =>
            `${item.customer_name} ${item.time} ${item.type} ${item.total}`
        )}
      </div>
    </>
  );
}

export default Admin;
