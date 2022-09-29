import { useDispatch } from 'react-redux';
import { useState } from 'react';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

function CustomerForm() {
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const dispatch = useDispatch;
 const handleSubmit =(event) => {
  event.preventDefault();
 }

 const addCustomer = () => {
  dispatch({
    type: 'ADD_CUSTOMER_INFO',
    payload:{ 
    fullName,
    streetAddress,
    city, 
    zipCode}
  })
  applyMiddleware(logger)
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
      <button onClick={addCustomer}> NEXT </button>
      </form>
  );
}

export default CustomerForm;
