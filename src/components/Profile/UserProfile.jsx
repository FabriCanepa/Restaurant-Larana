import { TiEdit } from "react-icons/ti";
import { useSession, useUser } from "../../stores/useSession";

import { toast } from "sonner";
import Swal from "sweetalert2";
import { putUserFn } from "../../api/users";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import "./UserProfile.css";

const Profile = () => {
  //-----------------------Zustand----------------------------------------------
  const { user, isLoggedIn, logout } = useSession();
  const { clearUser } = useUser();
  const navigate = useNavigate();
  //-----------------------RHF----------------------------------------------
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    //reset,
  } = useForm();

  const [editingFields, setEditingFields] = useState({});
  const [userName, setUserName] = useState(user.firstname);

  useEffect(() => {
    if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("email", user.email);
      setUserName(user.firstname);
    }
  }, [user, setValue]);

  //-----------------------TQUERY----------------------------------------------

  const { mutate: putUser } = useMutation({
    mutationFn: putUserFn,
    onSuccess: () => {
      // mensaje de exito
      Swal.close();
      toast.success("Usuario actualizado");
      //limpiar estado global
      clearUser();
      setEditingFields({});
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrió un error al guardar el usuario");
    },
  });
  //-----------------------HANDLERS----------------------------------------------

  //edición
  const handleEditField = (fieldName) => {
    setEditingFields((prevFields) => ({
      ...prevFields,
      [fieldName]: !prevFields[fieldName],
    }));
  };

  // Submit
  const handleSubmit = (data) => {
    Swal.showLoading();
    const newData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: user.password,
      isAdmin: user.isAdmin,
      id: user.id,
    };

    putUser(newData);
    setUserName(data.firstname);
    return;
  };
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
    <section className="container perfilContainer text-center">
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
          alt=""
          className="profileImg my-4"
        />
        <h1>Welcome {userName}</h1>
        <article className="text-center ">
          <div>
            <div className="d-flex">
              <Input
                name="firstname"
                register={register}
                error={!!errors?.firstname}
                className="my-2"
                options={{
                  minLength: 3,
                  maxLength: 25,
                  required: true,
                }}
                readOnly={!editingFields.firstname}
              />
              <button
                type="button"
                className="btnEdit btn"
                onClick={() => handleEditField("firstname")}
              >
                <TiEdit />
              </button>
            </div>
            <div className="d-flex">
              <Input
                name="lastname"
                register={register}
                error={!!errors?.lastname}
                className="my-2"
                options={{
                  minLength: 3,
                  maxLength: 25,
                  required: true,
                }}
                readOnly={!editingFields.lastname}
              />
              <button
                type="button"
                className="btnEdit btn"
                onClick={() => handleEditField("lastname")}
              >
                <TiEdit />
              </button>
            </div>
            <div className="d-flex">
              <Input
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
                readOnly={!editingFields.email}
              />
              <button
                type="button"
                className="btnEdit btn"
                onClick={() => handleEditField("email")}
              >
                <TiEdit />
              </button>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn" id="btnSave">
                Save
              </button>
            </div>
            {isLoggedIn && (
              <button
                className="mt-2 w-50 btn"
                id="btnLogoutMovil"
                type="button"
                onClick={handleLogout}
              >
                {" "}
                <MdLogout /> Sign off
              </button>
            )}
          </div>
        </article>
      </form>
    </section>
  );
};

export default Profile;
