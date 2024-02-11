
import "./AdminCard.css"

const AdminCard = ({ product, openModal }) => {


  return (
    <div className="card shadow col-12 col-md-2" id='containerCard'>
      <div>
        <img src={product.image} className="w-100" id='adminImg' alt={product.name} />
      </div>
      <div className="d-flex justify-content-between align-items-baseline my-3">
        <h5>{product.name}</h5>
        <p id='foodPrice'>${product.cost}</p>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn  w-100"
          id='btnEdit'
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
