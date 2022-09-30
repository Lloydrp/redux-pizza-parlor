import { useState } from "react";
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";
import PizzaOrderModal from "../PizzaOrderModal/PizzaOrderModal";

function OrderPage() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Header total={true} setIsHovering={setIsHovering} />
      {isHovering && <PizzaOrderModal />}
      <PizzaList />
    </>
  );
}

export default OrderPage;
