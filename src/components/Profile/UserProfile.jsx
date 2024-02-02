import { TiEdit } from "react-icons/ti";
import { useSession, useUser } from "../../stores/useSession";

import { toast } from "sonner";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { putUserFn } from "../../api/users";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useEffect, useState } from "react";

import './UserProfile.css'

const Profile = () => {
  //-----------------------Zustand----------------------------------------------
  const { user, isLoggedIn, logout } = useSession();
  const { clearUser } = useUser();

  //-----------------------RHF----------------------------------------------
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    //reset,
  } = useForm();

  const [editingFields, setEditingFields] = useState({});

  useEffect(() => {
    if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("username", user.username);
      setValue("email", user.email);
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
      username: data.username,
      email: data.email,
      password: user.password,
      isAdmin: user.isAdmin,
      id: user.id,
    };

    putUser(newData);

    return;
  };
  //Logout
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
      }
    });
  };

  return (
    <section className="container perfilContainer">
        <form onSubmit={onSubmitRHF(handleSubmit)}>
        <article className="text-center row perfil">
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
              name="username"
              register={register}
              error={!!errors?.username}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
              readOnly={!editingFields.username}
            />
            <button
              type="button"
              className="btnEdit btn"
              onClick={() => handleEditField("username")}
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
          </article>
        </form>
        {isLoggedIn && (
          <button
            type="button"
            className="btn w-100 my-3"
            id="btnLogout"
            onClick={handleLogout}
          >
            <MdLogout /> Sign off
          </button>
        )}
    </section>
  );
};

export default Profile;