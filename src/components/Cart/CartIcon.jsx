// src/components/CartIcon.js
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../stores/useCart";
import "./CartIcon.css"; 

const CartIcon = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <NavLink to="/cart" className="cart-icon-container">
      <FaShoppingCart className="cart-icon" />
      {totalItems > 0 && (
        <div className="cart-count">{totalItems}</div>
      )}
    </NavLink>
  );
};

export default CartIcon;
