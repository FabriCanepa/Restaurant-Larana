import { NavLink } from 'react-router-dom';
import icono from '../../assets/Logo.png';
import './NavBarFooter.css';

const NavbarLarge = () => {
  return (
    <header className='py-3 my-3' id='large'>
    <nav className="navlarge d-flex align-items-center fixed-top">
      <div>
        <img src={icono} alt="icono restaurante" width="150" height="150" />
      </div>
      <ul className="list-unstyled d-flex w-100 mx-1">
      <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={`nav-link`} to="/products">
            Products
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={'nav-link'} to="/aboutUs">
            About us
          </NavLink>
        </li>
        <li className="flex-fill text-center">
          <NavLink className={'nav-link'} to="/Login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default NavbarLarge;
