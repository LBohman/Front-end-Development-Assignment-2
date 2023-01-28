import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar">
      <h1 className="navbar-header">Lost in translation</h1>
      {user !== null && (
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/translate">Translate</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;