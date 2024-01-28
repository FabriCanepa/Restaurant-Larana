import RegisterForm from "../components/Register/RegisterForm";
import icono from '../assets/Logo.png'


const RegisterView = () => {
  return (
    <section className="back">
      <div><img className='w2 h2 logoRegister' src={icono} alt="icono restaurante" /></div>
      <div className="d-flex justify-content-center text-start">
        <RegisterForm />
      </div>
    </section>
  )
}
export default RegisterView