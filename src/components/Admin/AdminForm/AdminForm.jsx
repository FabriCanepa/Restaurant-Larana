import { useForm } from "react-hook-form";

import { toast } from "sonner";
import Swal from "sweetalert2";

import Input from "../../Input/Input.jsx";
import Textarea from "../../Textarea/Textarea.jsx";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch.jsx";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProductsFn } from "../../../api/products.js";

import "./AdminForm.css";

const AdminForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();
 
  const queryClient = useQueryClient();

  const { mutate: postProducts } = useMutation({
    mutationFn: postProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Producto guardado correctamente");

      reset();

      queryClient.invalidateQueries("products")
    },
    onError: () => {
      Swal.close();
      toast.error("Hubo un error al guardar el producto");
    },
  });

  const handleSubmit = (data) => {
    console.log(data);
    Swal.showLoading();
    postProducts(data);
  };

  return (
    <form className="productForm py-5" onSubmit={onSubmitRHF(handleSubmit)}>
      <h1 className="py-4 adminTitle text-center">Create new menu</h1>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
        }}
        className="my-4"
        type="url"
        label="Image"
        name="image"
        error={!!errors.image}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        className="my-4"
        label="Name"
        name="name"
        error={!!errors.name}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 1,
          maxLength: 30,
        }}
        className="my-4"
        type="number"
        label="Cost USD"
        name="cost"
        error={!!errors.cost}
      />
      <Textarea
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLength: 3000,
        }}
        className="my-4"
        label="Ingredients"
        name="ingredients"
        error={!!errors.ingredients}
      />
      <ToggleSwitch
        register={register}
        options={{
          required: false,
        }}
        className="my-4"
        name="available"
        error={!!errors.available}
      />
      <button className="btn" id="btnProduct" type="submit">
        Create new menu
      </button>
    </form>
  );
};

export default AdminForm;
