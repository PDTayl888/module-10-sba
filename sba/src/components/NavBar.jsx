import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">RECIPE APP</Link>
            </div>

        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/Seafood">SEAFOOD</Link>
        </li>
        <li>
          <Link to="/favorites">FAVORITES</Link>
        </li>
      </ul>
        </nav>
    )
};

export default NavBar;