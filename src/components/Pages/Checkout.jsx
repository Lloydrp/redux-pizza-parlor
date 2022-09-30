import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderInfo = useSelector((store) => store.orderInformation);
  const pizzaList = useSelector((store) => store.pizzaList);

  function clickHandler() {
    const date = new Date();
    //Post request
    orderInfo.time = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    axios
      .post("/api/order", orderInfo)
      .then((result) => {
        dispatch({ type: "CLEAR_ORDER" });
        history.replace("/");
      })
      .catch((error) => {
        console.log("error found in POST", error);
      });
  }
  console.log("history.length :>> ", history.length);

  return (
    <>
      <Header total={false} />
      <h2>Step 3: Checkout</h2>
      <div>Customer Info and Type</div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Pizza Ordered</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {orderInfo.pizzas.map((item, index) => (
              <tr key={index}>
                <td>{pizzaList[item.id - 1].name}</td>
                <td>{pizzaList[item.id - 1].price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container2">
        <div className="float-right">Total: {orderInfo.total}</div>
        <button className="float-right" onClick={clickHandler}>
          Checkout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
