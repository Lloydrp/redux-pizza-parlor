import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function CustomerForm() {
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [delivery, setDelivery] = useState("");

  const nextPage = '/checkout';

  const payload = {
    customer_name: fullName,
    street_address: streetAddress,
    city,
    zip: zipCode,
    type: delivery
  }

  return (
    <form>
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
      <input checked name="type"type="radio" id="pickup" value="pickup" onChange={(evt) => setDelivery(evt.target.value)}></input>
      <label htmlFor="pickup">PICKUP</label>
      <input name="type" type="radio" id="delivery" value="delivery" onChange={(evt) => setDelivery(evt.target.value)}></input>
      <label htmlFor="delivery">DELIVERY</label>
      <NextButton nextPage={nextPage} payload={payload} />
    </form>

  );
}

export default CustomerForm;
