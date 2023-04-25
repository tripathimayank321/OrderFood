import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LOGO_URL} placeholder="" className="logo"></img>
      <nav className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li className="nav-item">Login</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
