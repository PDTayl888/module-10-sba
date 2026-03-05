import { Link } from "react-router-dom";

const linkStyle = {
  color: '#43213d',
 fontWeight: '700'  
}

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link style={linkStyle} to="/">RECIPE FINDER</Link>
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
