import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { deleteProductsFn, putProductsFn } from "../../../api/products";
import Swal from "sweetalert2";
import { toast } from "sonner";
import Input from "../../Input/Input";
import Textarea from "../../Textarea/Textarea";

import "./AdminModal.css";

const FormModal = ({ product, closeModal }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("image", product.image);
      setValue("cost", product.cost);
      setValue("ingredients", product.ingredients);
      setValue("isAvailable", product.isAvailable);
    }
  }, [product, setValue]);

  // PUT --------------------------------------

  const { mutate: putProduct } = useMutation({
    mutationFn: putProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Edited product");
      closeModal();

      queryClient.invalidateQueries("products");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleSubmit = (data) => {
    Swal.showLoading();
    putProduct({ ...data, id: product.id });
    return closeModal();
  };

  // DELETE ----------------------------------

  const { mutate: deleteProducts } = useMutation({
    mutationFn: deleteProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Removed product");

      queryClient.invalidateQueries("products");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Disposal of the product ${product.name} is irreversible `,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Close",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProducts(product.id);
        closeModal();
      }
    });
  };

  return (
    <form
      className="card-body"
      id="formodal"
      onSubmit={onSubmitRHF(handleSubmit)}
    >
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
      <div className="container form-group my-4">
        <label htmlFor="available">Available</label>
        <input
          type="checkbox"
          id="available"
          name="isAvailable"
          {...register("isAvailable")}
          className="ms-2"
        />
      </div>
      <div className="container btn d-flex justify-content-end px-5 mb-3">
        <button
          type="submit"
          className="mx-3 btnCart"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Edit
        </button>
        <button
          type="button"
          className="btnCart"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default FormModal;
