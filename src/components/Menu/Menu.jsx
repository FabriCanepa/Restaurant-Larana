import Swal from "sweetalert2";

import { addToCartFn } from "../../api/products";

import useCart from "../../stores/useCart";

import "./Menu.css";

const Menu = (props) => {
  const { product } = props;

  const addProductToCart = useCart((state) => state.addProductToCart);
  const cart = useCart((state) => state.cart);

  const handleSubmit = async () => {
    // llevo producto a json server (cart)
    addProductToCart(product);

    const res = await addToCartFn(cart);
    console.log(res);
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Added product!",
    });
  };

  const shortText = (text) => {
    if (text.length > 40) {
      return text.substring(0, 40) + "...";
    }
    return text;
  };

  return (
    <div className="cardContainer">
      <article
        className="menuCard gap-2 mb-4"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${product.id}`}
      >
        <div className="menuText ms-3">
          <h5 className="foodTitle">{product.name}</h5>
          <p className="foodInfo">{shortText(product.ingredients)}</p>
          <p className="foodPrice">{product.cost}</p>
        </div>
        <div className="menuImage">
          <img src={product.image} alt={product.name} />
        </div>
      </article>
      <div />

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
    </div>
  );
};

export default Menu;
