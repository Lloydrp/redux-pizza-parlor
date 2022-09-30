import CustomerForm from "../CustomerForm/CustomerForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function CustomerDetails() {

  return ( 
    <>
  <Header total={true} />
  <CustomerForm />
  <Footer />
  </>
  )
}

export default CustomerDetails;
