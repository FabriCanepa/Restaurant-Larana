import "./Login.css";
import classNames from "classnames";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useSession } from "../../stores/useSession";

import Input from "../Input/Input";

import { postLoginFn } from "../../api/auth";
import { toast } from "sonner";
import { useState } from "react";

const LoginForm = () => {
  //ZUSTAND----------------------------------------------------------------

  const { login } = useSession();

  //RRD ----------------------------------------------------------------

  const navigate = useNavigate();

  //RHF  ----------------------------------------------------------------
  const [showPwd, setShowPwd] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  // TQUERY----------------------------------------------------------------
  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      //msj exito
      Swal.close();
      toast.success("Bienvenido");

      // Loguear al usuario
      login(data);

      // Navegar a inicio pero estando logueado
      navigate("/user");
    },
    onError: (err) => {
      Swal.close();
      toast.error(err.message);
    },
  });

  // HANDLERS---------------------------------------------------------------

  const handleSubmit = (data) => {
    Swal.showLoading();
    postLogin(data);
    console.log(data)
  };

  // RENDER -----------------------------------------------------------

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <h4 className="text-center">Welcome to Larana</h4>
      <div className="d-flex align-items-baseline">
        <Input
          type="email"
          label="Email"
          placeholder="Ingrese su email"
          name="email"
          register={register}
          error={!!errors?.email}
          className="my-1 fildsetLogin"
          options={{
            minLength: 3,
            maxaLength: 25,
            required: true,
          }}
        />
      </div>
      <div className="d-flex focus align-items-baseline">
        <Input
          label="Contraseña"
          type={showPwd ? "text" : "password"}
          placeholder="Ingrese su contraseña"
          name="password"
          className="w-100 fildsetLogin"
          register={register}
          error={!!errors?.password}
          options={{
            minLength: 8,
            maxaLength: 15,
            required: true,
            message: "UAU",
          }}
        />
        <span
          className={classNames("eye", { "is-invalid": errors?.password })}
          onClick={() => setShowPwd(!showPwd)}
        >
          {showPwd ? (
            <i className="bi bi-eye"></i>
          ) : (
            <i className="bi bi-eye-slash"></i>
          )}
        </span>
      </div>
      <div className="loguinButton my-2">
        <button
          type="submit"
          className="btn btnLogin w-100 button btn-user"
        >
          Log in
        </button>
      </div>
      <p className="text-center">
        Dont have an account?<Link to="/register"> Sign up </Link>
      </p>
      <p className="text-center">
        Forgot Password? Get in<Link to="/register"> Ingresa </Link>
      </p>
    </form>
  );
};
export default LoginForm;
