import { useSelector } from "react-redux";

function PizzaOrderModal() {
  const orderList = useSelector((store) => store.orderInformation);
  const pizzaList = useSelector((store) => store.pizzaList);
  return (
    <div className="pizzas-ordered">
      <h4>Ordered Pizzas:</h4>
      {orderList.pizzas.map((item) => (
        <li key={item.id}>{pizzaList[item.id - 1].name}</li>
      ))}
    </div>
  );
}

export default PizzaOrderModal;
