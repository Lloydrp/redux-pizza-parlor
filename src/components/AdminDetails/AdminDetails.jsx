function AdminDetails({ item, adminDetails, localPizzaList, clicked }) {
  return (
    item.id === clicked && (
      <div>
        {item.street_address} {item.city} {item.zip}
        <div>Pizzas Ordered:</div>
        {adminDetails.map(
          (pizza) =>
            pizza.order_id === item.id && (
              <li key={pizza.id}>{localPizzaList[pizza.pizza_id - 1].name}</li>
            )
        )}
      </div>
    )
  );
}

export default AdminDetails;
