function AdminDetails({ item }) {
  console.log("item :>> ", item);
  return (
    <div>
      {item.street_address} {city} {zip}
      <div>Pizzas Ordered:</div>
      {item.pizzas.map((pizza) => (
        <li>{pizza.id}</li>
      ))}
    </div>
  );
}

export default AdminDetails;
