import './Modal.css'

const Modal = (props) => {

  const { product } = props

  const handleSubmit = () => {
    const productInCart = {
      id: product.id,
      name: product.name,
      price: product.cost,
      ingredients: product.ingredients,
    };
 
    console.log(productInCart);
  }
  return (
    <div
        className="modal fade"
        id={`modal-${product.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={"-1"}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="text-end me-3">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="card customModal mb-1 mx-3">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="scrollText">
                  <p className="card-text">{product.ingredients}</p>
                </div>
                <h6 className="foodPrice mt-2">{product.cost}</h6>
                <div className="text-center">
                  <button
                    className="customBtnModal"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal