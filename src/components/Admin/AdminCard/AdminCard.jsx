import "./AdminCard.css";

const AdminCard = ({ product, openModal }) => {
  return (
    <div className="card shadow col-sm-12 col-md-3 col-lg-2" id="containerCard">
      <div>
        <img src={product.image} className="w-100" id="adminImg" alt={product.name} />
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center my-3">
        <div>
          <h5>{product.name}</h5>
          <p id="foodPrice">${product.cost}</p>
        </div>
      </div>
      <div className="mt-auto">
        <button
          className="btn w-100"
          id="btnEdit"
          onClick={() => openModal(product)}
          data-bs-toggle="modal"
          data-bs-target="#modalCard"
          >
          Editar
        </button>
          </div>
    </div>
  );
};

export default AdminCard;

