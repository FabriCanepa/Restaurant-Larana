import './Footer.css'; 
import icono from '../../assets/Logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mb-3 py-3'>
      <section className='container mb-4'>   
        <div className='row'>
          <div className='col-sm-12 col-md-4 text-center'>
            <img className='w2 h2' src={icono} alt="icono restaurante" />
          </div>
          <div className='col-sm-12 col-md-4 my-3 text-center'>
            <div className='my-3'>
              <Link to="">Home</Link>
            </div>
            <div className='my-3'>
              <Link to="">About us</Link>
            </div>
            <div className='my-3'>
              <Link to="">Contact us</Link>
            </div>
            <div className='my-3'>
              <Link to="">Cookies policy</Link>
            </div>
            <div className='my-3'>
              <Link to="">Privacy policy</Link>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 text-center my-3'>
            <h3 className='my-3'>Follow in</h3>
            <Link to="https://www.instagram.com/" className='mx-3'><FaInstagram /></Link>
            <Link to="https://www.facebook.com/"><FaFacebook /></Link>
            <Link to="https://www.twitter.com/" className='mx-3'><FaTwitter /></Link>
          </div>
        </div>
        <div className='my-3'>
        <p className= "fs-2 py-3 text-center">&copy; Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;