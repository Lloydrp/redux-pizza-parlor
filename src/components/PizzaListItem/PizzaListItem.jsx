import { useState } from "react";
import { useDispatch } from "react-redux";
import './PizzaListItem.css';

function PizzaListItem({ za }) {
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
      total: za.price,
      quantity: 1,
    };
    // handle dispatch based on boolean added.
    if (added === true) {
      // payload of the id of the za to be added and
      // the quantity of the za.
      dispatch({
        type: "ADD_PIZZA_ORDER",
        payload: newZa,
      });
    } else if (added === false) {
      // payload of the id of the za to be removed.
      dispatch({
        type: "REMOVE_PIZZA_ORDER",
        payload: {
          id: za.id,
          total: za.price,
        },
      });
    }
  };

  // console.log(added);

  return (
    <div className="za-item-container">
      <div className="za-content-container">
        <img src={za.image_path} alt="Just a spicy pic of some za." />
        <hr />
        <div className="za-item-textbox">
            <h3 className="za-content-header">{za.name}</h3>
            <p>{za.description}</p>
            <p className="price">{za.price}</p>
        </div>
      </div>
      <button onClick={() => handleClick()}>{added ? "Add" : "Remove"}</button>
    </div>
  );
}

export default PizzaListItem;
