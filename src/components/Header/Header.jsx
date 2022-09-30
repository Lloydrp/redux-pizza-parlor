import HeaderCheckoutTotal from "../HeaderCheckoutTotal/HeaderCheckoutTotal";
import "./Header.css";

function Header({ total, setIsHovering }) {
  return (
    <header className="App-header">
      <h1 className="App-title">Za' Dudes Pizza</h1>
      <span
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {total && <HeaderCheckoutTotal />}
      </span>
    </header>
  );
}

export default Header;
