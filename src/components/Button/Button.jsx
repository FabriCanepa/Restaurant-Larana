const Button = (props) => {
    const { title, className = "", type = "button", onClick } = props;
  
    return (
      <button className={`btnLg ${className}`} onClick={onClick} type={type}>
        {title}
      </button>
    );
  };
  
  export default Button;