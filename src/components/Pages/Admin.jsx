import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AdminDetails from "../AdminDetails/AdminDetails";
import Header from "../Header/Header";

function Admin() {
  const [adminOrders, setAdminOrders] = useState([]);
  const [clicked, setClicked] = useState(false);

  function getAdminOrders() {
    axios
      .get("/api/order")
      .then((result) => {
        setAdminOrders(result.data);
      })
      .catch((error) => {
        console.log("error caught in order get :>> ", error);
      });
  }
  useEffect(() => {
    getAdminOrders();
  }, []);
  return (
    <>
      <Header total={false} />
      <h2>AdminList Below:</h2>
      <div>
        {adminOrders.map((item) => (
          <div key={item.id} onClick={() => setClicked(!clicked)}>
            {item.customer_name} {item.time} {item.type} {item.total}
            {clicked && <AdminDetails item={item} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
