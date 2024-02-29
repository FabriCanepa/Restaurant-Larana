import { NavLink, useNavigate } from "react-router-dom";

import "./NavBarFooter.css";
import { useSession } from "../../stores/useSession";
import Swal from "sweetalert2";
import { toast } from "sonner";


import { FaHome, FaShoppingCart, FaUser, FaHeadphones } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";


import "./NavBarFooter.css";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Atención",
      text: "Estás por cerrar tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Canselar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada. ¡Hasta luego!");
        logout();
        navigate("/");
      }
    });
  };

  return (
    <header id="mobile">
  <div className="fixed-top d-flex justify-content-end p-2">
        {isLoggedIn && (
          <button  className="btn" id="styleLogout" type="button" onClick={handleLogout}> <MdLogout />
          </button>
           )}
     </div>
    <nav className="navbar fixed-bottom" >
      <ul className="list-unstyled d-flex w-100 justify-content-around">
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} aria-current="page" to="/menu">
            <FaHome />
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/cart">
            <FaShoppingCart/>
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/contact">
            <FaHeadphones/>
          </NavLink>
        </li>
                {user?.isAdmin && (
                  <li className="flex-fill text-center">
              <NavLink className={"nav-link"} to="/admin">
                <RiAdminFill/>
              </NavLink>
            </li>
          )}
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/profile">
            <FaUser />
          </NavLink>
        </li>
     </ul>
    </nav>
          </header>
  );
};

export default Navbar;