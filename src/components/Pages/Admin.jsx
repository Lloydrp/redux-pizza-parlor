import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AdminDetails from "../AdminDetails/AdminDetails";
import Header from "../Header/Header";

function Admin() {
  const [adminOrders, setAdminOrders] = useState([]);
  const [clicked, setClicked] = useState("");
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
    fetchZa();
    getAdminDetails();
  }, []);
  return (
    <>
      <Header total={false} />
      <h2>AdminList Below:</h2>
      <div>
        {adminOrders.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              clicked === item.id ? setClicked("") : setClicked(item.id)
            }
          >
            {item.customer_name} {item.time} {item.type} {item.total}
            <AdminDetails
              adminDetails={adminDetails}
              localPizzaList={localPizzaList}
              item={item}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
