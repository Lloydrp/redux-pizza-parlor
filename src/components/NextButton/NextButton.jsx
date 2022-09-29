import "./NextButton.css";

function NextButton(props) {
  return (
    <button onClick={props.function} className="next-button">
      Next
    </button>
  );
}

export default NextButton;
