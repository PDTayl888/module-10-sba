import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">RECIPE FINDER</Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">FAVORITES</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
