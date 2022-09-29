import { useState } from 'react'

function CustomerForm({addCustomer}) {
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
 
 const handleSubmit =(event) => {
  event.preventDefauly();
 }
  return (
    <form>
      <input 
        placeholder="Full Name" 
        value={fullName} 
        onChange={(evt) => setFullName(evt.target.value)} 
      />
      <input 
        placeholder="Address" 
        value={streetAddress} 
        onChange={(evt) => setSteetAddress(evt.target.value)} 
      />
      <input 
        placeholder="City" 
        value={city} 
        onChange={(evt) => setCity(evt.target.value)} 
      />
      <input 
        placeholder="Job Title" 
        value={zipCode} 
        onChange={(evt) => setZipCode(evt.target.value)}
      /> 
      <input type="submit" value="Submit" />
      </form>
  );
}

export default CustomerForm;
