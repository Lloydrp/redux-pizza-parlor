import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";

function OrderPage() {
  return (
    <>
      <Header total={true} />
      <PizzaList />
      <Footer />
    </>
  );
}

export default OrderPage;
