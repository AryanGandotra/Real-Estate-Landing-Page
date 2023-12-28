import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="headerTitle">HOMEZ</h1>
      <div className="headerNavigation">
        <ul className="headerList">
          <li className="headerListItem">
            <a href="#">Home</a>
          </li>
          <li className="headerListItem">
            <a href="#">About</a>
          </li>
          <li className="headerListItem">
            <a href="#">Home</a>
          </li>
          <li className="headerListItem">
            <a href="#">About</a>
          </li>
        </ul>
        <a href="#" className="contactLink">
          <div className="contact">Contact</div>
        </a>
      </div>
    </header>
  );
};

export default Header;
