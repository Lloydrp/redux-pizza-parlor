import "./NextButton.css";

function NextButton(props) {
  return (
    <button type="submit" onClick={props.function} className="next-button">
      Next
    </button>
  );
}

export default NextButton;
