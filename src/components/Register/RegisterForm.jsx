import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { toast } from "sonner";

import { postUserFn } from "../../api/users";
import { useSession } from "../../stores/useSession";

import Input from "../Input/Input";
import "./register.css";
import icono from '../../assets/Logo.png'

const RegisterForm = () => {
  //ZUSTAND----------------------------------------------------------------

  const { login } = useSession();

  //RRD ----------------------------------------------------------------

  const navigate = useNavigate();

  //RHF  ----------------------------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  // TQUERY----------------------------------------------------------------
  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      //msj exito
      Swal.close();
      toast.success("Bienvenido");

      // Loguear al usuario
      login({ ...data });

      // Navegar a inicio pero estando logueado
      navigate("/");
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrio un error al registrar un usuario");
    },
  });

  // HANDLERS---------------------------------------------------------------
  const handleSubmit = (data) => {
    Swal.showLoading();
    postUser({ ...data, isAdmin: false });
  };
  // RENDER --------------------------------------------------------------
  return (
    <section>
      <form onSubmit={onSubmitRHF(handleSubmit)} className="formsRegister p-4">
      <div className="text-center"><img className='w2 h2 logoRegister py-3' src={icono} alt="icono restaurante" /></div>
        <h4 className="text-center mb-4">Welcome to Larana</h4>
        <article className="row">
          <div className="col-12 col-md-6">
            <Input
              label="Nombre"
              name="firstname"
              register={register}
              error={!!errors?.firstname}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              label="Apellido"
              name="lastname"
              register={register}
              error={!!errors?.lastname}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              label="Email"
              type="email"
              name="email"
              register={register}
              error={!!errors?.email}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              label="Contraseña"
              type="password"
              name="password"
              register={register}
              error={!!errors?.password}
              className="my-2"
              options={{
                minLength: 8,
                maxLength: 15,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                },
                required: true,
              }}
            />{" "}
          </div>
        </article>
        <p>
          La contraseña debe contener al menos una letra minúscula, una letra
          mayúscula y tener una longitud entre 8 y 15 caracteres.
        </p>
        <div className="registerButton">
        <button type="submit" className="btn w-100 button" id="registerBtn">
          Sing Up
        </button>
        </div>
        <p className="my-2 text-center">
          Do you already have an accountt?<Link to="/register" className="link"> Log in </Link>
        </p>
      </form>
    </section>
  );
};
export default RegisterForm;
