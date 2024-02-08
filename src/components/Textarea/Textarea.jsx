import "./Textarea.css";

const Textarea = (props) => {
  const { label, name, options = {}, register, className = "" } = props;

  return (
    <fieldset className={`container  px-5 ${className}`}>
      <textarea
        className="form-control"
        id={`${name}-textarea`}
        {...register(name, options)}
        placeholder=""
      />
      <label className="textarea-label" htmlFor={`${name}-textarea`}>
        {label}
      </label>
    </fieldset>
  );
};

export default Textarea;