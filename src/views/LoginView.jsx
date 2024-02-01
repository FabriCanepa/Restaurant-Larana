
import LoginForm from "../components/Login/LoginForm";
import icono from '../assets/Logo.png'

const LoginView = () => {
  return (

    <section className="back">
      <div><img className='w2 h2 logoLogin py-3' src={icono} alt="icono restaurante" /></div>
      <div className="d-flex justify-content-center text-start">
        <LoginForm />
      </div>
    </section>
  );
};
export default LoginView;

