import { NavLink } from 'react-router-dom';
import icono from '../../assets/Logo.png';
import './NavBarFooter.css';

const NavbarLarge = () => {
  return (
    <header className='py-3 my-3' id='large'>
    <nav className="navlarge d-flex align-items-center fixed-top">
      <NavLink className={'nav-link'} to="/home">
        <img src={icono} alt="icono restaurante" width="150" height="150" />
      </NavLink>
      <ul className="list-unstyled d-flex w-100">
      <li className="flex-fill text-center navCursor">
          <NavLink className={`nav-link py-3`}  to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="flex-fill text-center navCursor">
          <NavLink className={`nav-link  py-3`} to="/products">
            Products
          </NavLink>
        </li>
        <li className="flex-fill text-center navCursor">
          <NavLink className={'nav-link  py-3'} to="/aboutUs">
            About us
          </NavLink>
        </li>
        <li className="flex-fill text-center navCursor">
          <NavLink className={'nav-link py-3'} to="/Login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default NavbarLarge;
