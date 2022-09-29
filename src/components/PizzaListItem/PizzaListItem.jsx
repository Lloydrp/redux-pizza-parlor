import { useState } from "react";


function PizzaListItem({za}) {
  const [added, setAdded] = useState(false);

  return (
    <div className="za-container">
      <p>{za.name}</p>
      <img src={za.image_path} alt="Just a spicy pic of some za."/>
      <p>{za.description}</p>
      <p>{za.price}</p>
      <button></button>
    </div>
  )
}

export default PizzaListItem;
