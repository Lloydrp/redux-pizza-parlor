import { useState } from "react";
import { useDispatch } from "react-redux";


function PizzaListItem({za}) {
  // local use state to check if a za item was added to cart.
  const [added, setAdded] = useState(true); //defualt state is true before re-render.
  const dispatch = useDispatch();

  // run functions on click of add/remove button.
  const handleClick = () => {
    // set added to the inverse of itself.
    setAdded(!added);
    // console.log(added); // current state of added at this point.
    // set up the object to be dispatched.
    const newZa = {
      id: za.id,
      quantity: za.quantity
    }
    // handle dispatch based on boolean added.
    if(added === true) {
      // payload of the id of the za to be added and
      // the quantity of the za.
      dispatch({
        type: 'ADD_PIZZA_ORDER',
        payload: newZa
      });
    } else if (added === false) {
      // payload of the id of the za to be removed.
      dispatch({
        type: 'REMOVE_PIZZA_ORDER',
        payload: za.id
      });
    }
  }

  // console.log(added);

  return (
    <div className="za-container">
      <p>{za.name}</p>
      <img src={za.image_path} alt="Just a spicy pic of some za."/>
      <p>{za.description}</p>
      <p>{za.price}</p>
      <button onClick={() => handleClick()}>{added ? 'Add' : 'Remove'}</button>
    </div>
  )
}

export default PizzaListItem;
