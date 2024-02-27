import { NavLink, useNavigate } from "react-router-dom";
import icono from "../../assets/Logo.png";
import "./NavBarFooter.css";
import { useSession } from "../../stores/useSession";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { MdLogout } from "react-icons/md";

const NavbarLarge = () => {
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
    <header className="py-4 my-5" id="large">
      <nav className="navlarge d-flex align-items-center fixed-top">
        <div>
          <img src={icono} alt="icono restaurante" width="140" height="140" />
        </div>
        <ul className="list-unstyled d-flex w-100 mx-1">
          <li className="flex-fill text-center navCursor">
            <NavLink className={`nav-link`} to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="flex-fill text-center navCursor">
            <NavLink className={"nav-link"} to="/aboutUs">
              About us
            </NavLink>
          </li>
          <li className="flex-fill text-center navCursor">
            <NavLink className={"nav-link"} to="/contact">
            Contact
            </NavLink>
          </li>
          <li className="flex-fill text-center navCursor">
            <NavLink className={"nav-link"} to="/cart">
             Cart
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li className="flex-fill text-center navCursor">
              <NavLink className={"nav-link"} to="/Login">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className="flex-fill text-center navCursor">
              <NavLink className={"nav-link"} to="/profile">
                Profile
              </NavLink>
            </li>
          )}
          {user?.isAdmin && (
            <li className="flex-fill text-center navCursor">
              <NavLink className={"nav-link"} to="/admin">
                Admin
              </NavLink>
            </li>
          )}
        </ul>
        <div className="mb-3 w-50">
        {isLoggedIn && (
          <button  className="btn" id="btnLogout" type="button" onClick={handleLogout}> <MdLogout /> Sign off
          </button>
           
        )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarLarge;
