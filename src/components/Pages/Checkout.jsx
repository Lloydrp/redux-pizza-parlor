import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderInfo = useSelector((store) => store.orderInformation);
  const pizzaList = useSelector((store) => store.pizzaList);

  function clickHandler() {
    //Post request
    //Admin
    dispatch({
      type: "ADMIN_ADD",
      payload: {
        name: orderInfo.customer_name,
        time: DateTime.Now.ToString("ddd, dd MMM yyy HH':'mm':'ss 'CST'"),
        type: orderInfo.type,
        cost: orderInfo.total,
      },
    });
    //Clear State
    dispatch({ type: "CLEAR_ORDER" });
    //History Push
    history.replace("/");
  }

  return (
    <>
      <Header total={false} />
      <h2>Step 3: Checkout</h2>
      <div>Customer Info and Type</div>
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
      <div>Total: {orderInfo.total}</div>
      <button onClick={clickHandler}>Checkout</button>
    </>
  );
}

export default Checkout;
