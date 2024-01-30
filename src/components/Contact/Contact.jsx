import "./Contact.css";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userComment = () => {
    console.log("enviado");
  };

  return (
    <>
      <section className="contactSec">
        <h2>Contact Us</h2>
        <article className="formContact">
          <p className="titleForm">We are interested in your opinion</p>
          <form onSubmit={handleSubmit(userComment)}>
            <fieldset className="formGroup">
              <label htmlFor="fieldName"></label>
              <input
                className={errors.name ? "custom-input-error" : ""}
                type="text"
                placeholder="Name"
                id="fieldName"
                {...register("name", {
                  required: "Este campo es requerido!",
                  minLength: {
                    value: 3,
                    message: "Este campo tiene un mínimo de 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Este campo tiene un máximo de 20 caracteres",
                  },
                })}
              />

            </fieldset>

            <fieldset className="formGroup">
              <label htmlFor="email-input" className=""></label>
              <input
                type="email"
                id="email-input"
                className={`${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Este campo es requerido.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Debe ingresar un mail válido.",
                  },
                })}
              />
              <p className="text-danger customError">{errors.email?.message}</p>
            </fieldset>

            {/* <fieldset className="formGroup">
              <label htmlFor="fieldEmail"></label>
              <input type="email" placeholder="Email" id="fieldEmail" />
            </fieldset> */}
            <fieldset className="formGroup">
              <label htmlFor="fieldPhone"></label>
              <input type="text" placeholder="Cell Phone" id="fieldPhone" />
            </fieldset>
            <fieldset className="formGroup">
              <textarea
                id="userComment"
                placeholder="Message"
                rows="5"
                cols="30"
              ></textarea>
            </fieldset>
            <button type="button" className="customFormBtn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  );
};
export default Contact;
