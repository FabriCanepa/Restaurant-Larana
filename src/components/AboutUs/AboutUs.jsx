import "./AboutUs.css";

const AboutUs = ({ name, role, description, imageUrl }) => {
  return (
    <article className="cardEmployee">
      <div className="imgContainer">
        <img
          className="imgEmployee"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="aboutEmployee">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default AboutUs;
