import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaPlus, FaUser } from "react-icons/fa";


import "./NavBarFooter.css";

const Navbar = () => {

  return (
    <nav className="navbar fixed-bottom" id="mobile">
      <ul className="list-unstyled d-flex w-100 justify-content-around">
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} aria-current="page" to="/login">
            <FaHome />
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink to="/admin">
            <div className="container-icon">
                <FaShoppingCart />
            </div>
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/add">
            <FaPlus />
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/profile">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;