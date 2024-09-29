import { toast } from "sonner";
import { useForm } from "react-hook-form";

import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const userComment = () => {
    toast.success("Comment submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(userComment)}>
      <fieldset className="formGroup">
        <label htmlFor="fieldName"></label>
        <input
          type="text"
          placeholder="Name"
          id="fieldName"
          {...register("name", {
            required: "This field is required!",
            pattern: {
              value: /^[A-Za-zÀ-ÿ\s]+$/,
              message: "Only letters and spaces are allowed.",
            },
            minLength: {
              value: 3,
              message: "At least 3 characters required.",
            },
            maxLength: {
              value: 20,
              message: "This field has a maximum of 20 characters.",
            },
          })}
        />
        <p className="text-danger customError">{errors.name?.message}</p>
      </fieldset>
      <fieldset className="formGroup">
        <label htmlFor="email-input" className=""></label>
        <input
          type="email"
          id="email-input"
          placeholder="Email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <p className="text-danger customError">{errors.email?.message}</p>
      </fieldset>
      <fieldset className="formGroup">
        <label htmlFor="fieldPhone"></label>
        <input
          type="text"
          id="fieldPhone"
          placeholder="Phone number"
          {...register("phone", {
            required: "This field is required!",
            pattern: {
              value: /^\+\d{1,4}\s?\d{6,14}$/,
              message: "Please enter a valid phone number. Ex: +54 381341883",
            },
          })}
        />
        <p className="text-danger customError">{errors.phone?.message}</p>
      </fieldset>
      <fieldset className="formGroup">
        <textarea
          id="userComment"
          placeholder="Your Message!"
          rows="4"
          cols="30"
          {...register("comment", {
            required: "This field is required!",
            minLength: {
              value: 15,
              message: "Your comment should be at least 15 characters long.",
            },
            maxLength: {
              value: 400,
              message: "Your comment can't exceed 400 characters.",
            },
          })}
        ></textarea>
        <p className="text-danger customError">{errors.comment?.message}</p>
      </fieldset>
      <button type="submit" className="customFormBtn">
        Submit
      </button>
    </form>
  );
};
export default Contact;
