import { useState } from "react";
import NextButton from "../NextButton/NextButton";

function CustomerForm() {
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const nextPage = '/checkout';

  const payload = {
    fullName,
    streetAddress,
    city,
    zipCode,
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
      <input type="radio" id="css" name="fav_language" value="CSS"></input>
      <label for="css">PICKUP</label>
      <input type="radio" id="css" name="fav_language" value="CSS"></input>
      <label for="css">DELIVERY</label>
      <NextButton nextPage={nextPage} payload={payload}/>
    </form>
   
  );
}

export default CustomerForm;
