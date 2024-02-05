import "./Input.css";

const Input = (props) => {
  const {
    label,
    type = "text",
    name,
    options = {},
    register,
    className = "",
    error = false,
    readOnly = false,
    inputRef,
  } = props;

  return (
    <fieldset className={`container ${className}`}>
      <input
      ref={inputRef}
        type={type}
        id={`${name}-input`}
        className={`form-control ${error ? "is-invalid" : ""} `}
        placeholder=""
        {...(register ? register(name, { ...options, readOnly }) : {})}
        readOnly={readOnly}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      {error && options.errorMessage && (
        <p className="error-message">{options.errorMessage}</p>
      )}
    </fieldset>
  );
};

export default Input;