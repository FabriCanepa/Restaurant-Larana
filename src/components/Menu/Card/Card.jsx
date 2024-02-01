import "./Card.css";

const Card = (props) => {
  const { product, openModal } = props;

  const shortText = (text) => {
    if (text.length > 40) {
      return text.substring(0, 40) + "...";
    }
    return text;
  };

  return (
    <article className="menuCard card d-flex flex-row my-2">
      <div className="menuImage">
        <img src={product.image} className="object-fit-cover" alt={product.name} />
      </div>
      <div className="menuText p-4 flex-grow-1">
        <h5>{product.name}</h5>
        <p className="foodPrice">${product.cost}</p>
        <p className="ingredients">{shortText(product.ingredients)}</p>
      </div>
      <div className="d-flex align-items-center px-4">
        <button
          className="button-add"
          onClick={() => openModal(product)}
          data-bs-toggle="modal"
          data-bs-target="#modalCard"
        ></button>
      </div>
    </article>
  );
};

export default Card;
