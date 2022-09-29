import HeaderCheckoutTotal from "../HeaderCheckoutTotal/HeaderCheckoutTotal";
import "./Header.css";

function Header(props) {
  return (
    <header className="App-header">
      <h1 className="App-title">Za' Dudes Pizza</h1>
      <HeaderCheckoutTotal />
    </header>
  );
}

export default Header;
