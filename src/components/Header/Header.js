import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LOGO_URL} placeholder="" className="logo"></img>
      <nav className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
