import { useDispatch } from "react-redux";
import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function CustomerForm() {
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const dispatch = useDispatch;

  const addCustomer = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CUSTOMER_INFO",
      payload: {
        fullName,
        streetAddress,
        city,
        zipCode,
      },
    });
  };

  return (
    <form onSubmit={addCustomer}>
      <h1> Step 2: Customer Information </h1>
      <div>
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(evt) => setFullName(evt.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Address"
          value={streetAddress}
          onChange={(evt) => setStreetAddress(evt.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="City"
          value={city}
          onChange={(evt) => setCity(evt.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Zip Code"
          value={zipCode}
          onChange={(evt) => setZipCode(evt.target.value)}
        />
      </div>
      <NextButton />
    </form>
  );
}

export default CustomerForm;
