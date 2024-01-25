import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaPlus, FaUser } from "react-icons/fa";

import Cart from "../Cart/Cart"

import "./Navbar.css";

const Navbar = ({ countProducts }) => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <ul className="list-unstyled d-flex w-100 justify-content-around">
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} aria-current="page" to="/login">
            <FaHome />
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink to="/admin">
            <div className="container-icon">
              <div
                className="container-cart-icon"
                onClick={() => setActive(!active)}
              >
                <FaShoppingCart />
                <div className="count-products">
                  <span id="contador-productos">{countProducts}</span>
                </div>
              <Cart/>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/add">
            <FaPlus />
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/user">
            <FaUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
