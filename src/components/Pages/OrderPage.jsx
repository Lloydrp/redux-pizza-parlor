import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";

function OrderPage() {
  return (
    <>
      <Header total={true} />
      <PizzaList />
    </>
  );
}

export default OrderPage;
