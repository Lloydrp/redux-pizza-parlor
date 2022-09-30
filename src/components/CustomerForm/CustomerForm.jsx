import { useState } from "react";
import NextButton from "../NextButton/NextButton";
import "./CustomerForm.css";

function CustomerForm() {
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [delivery, setDelivery] = useState("");

  const nextPage = "/checkout";

  const payload = {
    customer_name: fullName,
    street_address: streetAddress,
    city,
    zip: zipCode,
    type: delivery,
  };

  return (
    <form>
      <h1> Step 2: Customer Information </h1>
      <div className="container">
        <div className="inputs">
          <br />
          <br />
          <label>
            <input
              placeholder="Full Name"
              className="fullName"
              value={fullName}
              onChange={(evt) => setFullName(evt.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              placeholder="Address"
              className="address"
              value={streetAddress}
              onChange={(evt) => setStreetAddress(evt.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              placeholder="City"
              className="city"
              value={city}
              onChange={(evt) => setCity(evt.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              placeholder="Zip Code"
              className="zipCode"
              value={zipCode}
              onChange={(evt) => setZipCode(evt.target.value)}
            />
          </label>
        </div>
        <div className="radio_buttons">
          <div>
            <input
              checked
              name="type"
              type="radio"
              id="pickup"
              value="pickup"
              onChange={(evt) => setDelivery(evt.target.value)}
            ></input>
            <label htmlFor="pickup">PICKUP</label>
          </div>
          <br />
          <div>
            <input
              name="type"
              type="radio"
              id="delivery"
              value="delivery"
              onChange={(evt) => setDelivery(evt.target.value)}
            ></input>
            <label htmlFor="delivery">DELIVERY</label>
          </div>
        </div>
      </div>
      <div className="nextButton">
        <NextButton nextPage={nextPage} payload={payload} />
      </div>
    </form>
  );
}

export default CustomerForm;
