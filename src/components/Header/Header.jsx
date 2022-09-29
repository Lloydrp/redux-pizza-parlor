import HeaderCheckoutTotal from "../HeaderCheckoutTotal/HeaderCheckoutTotal";
import "./Header.css";

function Header({ total }) {
  return (
    <header className="App-header">
      <h1 className="App-title">Za' Dudes Pizza</h1>
      {total && <HeaderCheckoutTotal />}
    </header>
  );
}

export default Header;
