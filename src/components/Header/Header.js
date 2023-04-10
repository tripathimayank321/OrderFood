const Header = () => {
  return (
    <header className="header-container">
      <img
        src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"
        placeholder=""
        className="logo"
      ></img>
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
