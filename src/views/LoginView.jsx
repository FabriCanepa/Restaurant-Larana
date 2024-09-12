
import LoginForm from "../components/Login/LoginForm";
import icono from '../assets/Logo.png'

const LoginView = () => {
  return (

    <section className="back ">
      <div className="text-center"><img className='logoLogin ' src={icono} alt="icono restaurante"/></div>
      <div className="d-flex justify-content-center text-start">
        <LoginForm />
      </div>
    </section>
  );
};
export default LoginView;

