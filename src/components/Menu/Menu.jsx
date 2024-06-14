import Swal from "sweetalert2";
import useCart from "../../stores/useCart.js";
import { useTableNumber } from "../../stores/useTableNumber.js";


import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

import "./Menu.css";

const Menu = (props) => {
  const { product } = props;
  const { addItemToCart } = useCart();
  const { tableNumber } = useTableNumber();

  const [productQuantity, setProductQuantity] = useState(0);

  const onAddToCart = () => {
    if (!tableNumber) {
      Swal.fire({
        icon: "error",
        title: "Table number not set",
        text: "Please enter your table number before adding items to the cart.",
      });
      return;
    }
    if (productQuantity > 0) {
      addItemToCart(product, productQuantity);

      Swal.fire({
        icon: "success",
        title: "Product added to cart!",
        text: `${productQuantity} ${product.name}(s) has been added to your cart.`,
      });
      setProductQuantity(0);
    } else {
      Swal.fire({
        icon: "error",
        title: "No quantity selected",
        text: "Please select at least one item to add to your cart.",
      });
    }
  };

  const incrementQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decrementQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const shortText = (text) => {
    if (text.length > 90) {
      return text.substring(0, 90) + "...";
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
          <p className="foodPrice">${product.cost}</p>
        </div>
        <div className="menuImage">
          <img src={product.image} alt={product.name} />
        </div>
      </article>

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
                <h6 className="foodPrice mt-2">${product.cost}</h6>
                <div className="text-center">
                  <div>
                    <button onClick={decrementQuantity} className="btnQuantity">
                      <FaMinus />
                    </button>
                    <span className="m-4 text-light">{productQuantity}</span>
                    <button onClick={incrementQuantity} className="btnQuantity">
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    className="customBtnModal"
                    type="submit"
                    onClick={onAddToCart}
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
