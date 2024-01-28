import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { toast } from "sonner";

import { postUserFn } from "../../api/users";
import { useSession } from "../../stores/useSession";

import Input from "../Input/Input";
import "./register.css"


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
    <div>
      <form onSubmit={onSubmitRHF(handleSubmit)} className="formsRegister p-4">
        <h4 className="text-center mb-3">Welcome to LARANA</h4>
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

        <Input
          label="Nombre de usuario"
          name="username"
          register={register}
          error={!!errors?.username}
          className="my-2"
          options={{
            minLength: 3,
            maxLength: 25,
            required: true,
          }}
        />
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
        <Input
          label="Contraseña"
          type="password"
          name="password"
          register={register}
          error={!!errors?.password}
          className="mb-2"
          options={{
            minLength: 8,
            maxLength: 15,
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
            },
            required: true,
          }}
        />
        <p>
          La contraseña debe contener al menos una letra minúscula, una letra
          mayúscula y tener una longitud entre 8 y 15 caracteres.
        </p>
        <button
          type="submit"
          className="btn bg-primary w-100 button btn-user"
        >
          Sing Up
        </button>
        <p className="my-2 text-center">
          Do you already have an accountt?<Link to="/register"> Log in </Link>
        </p>
      </form>
    </div>
  );
};
export default RegisterForm;