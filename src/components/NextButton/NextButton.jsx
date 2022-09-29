import { useHistory } from "react-router-dom";
import "./NextButton.css";


function NextButton({nextPage}) {
  // get the history to push to routes.
  const history = useHistory();

  // on click move to next page/route and call a props function.
  const handleClick = () => {
    history.push(nextPage);
    // call function
    
  }

  return (
    <button type="submit" onClick={handleClick} className="next-button">
      Next 🤌
    </button>
  );
}

export default NextButton;
