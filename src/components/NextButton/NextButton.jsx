import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./NextButton.css";


function NextButton({nextPage, payload}) {
  // get the history to push to routes.
  const history = useHistory();
  const dispatch = useDispatch();

  // on click move to next page/route and call a props function.
  const handleClick = (event) => {
    event.preventDefault();
    // call function
    if(nextPage === '/checkout'){
      if(!payload.customer_name || !payload.street_address || !payload.city || !payload.zip) {
        alert('Please fill in the form.');
      } else {
        dispatch({
          type: "ADD_CUSTOMER_INFO",
          payload
        });
        // only if the form is filled then push to next page.
        history.push(nextPage);
      }
    } else {
      // for any other page push to next page on click.
      history.push(nextPage);
    }
  }

  return (
    <button onClick={handleClick} className="next-button">
      Next 🤌
    </button>
  );
}

export default NextButton;
