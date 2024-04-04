import Swal from "sweetalert2";
import useCart from "../../stores/useCart.js";

const Menu = (props) => {
  const { product } = props;
  const { addItemToCart } = useCart();

  const onAddToCart = () => {
    addItemToCart(product);
    Swal.fire({
      icon: "success",
      title: "Product added to cart!",
      text: `${product.name} has been added to your cart.`,
    });
  };

  const shortText = (text) => {
    if (text.length > 90) {
      return text.substring(0, 90) + "...";
    }
    return text;
  };

  return (
    <div className="cardContainer">
      <article className="menuCard gap-2 mb-4">
        <div className="menuText ms-3">
          <h5 className="foodTitle">{product.name}</h5>
          <p className="foodInfo">{shortText(product.ingredients)}</p>
          <p className="foodPrice">${product.cost}</p>
        </div>
        <div className="menuImage">
          <img src={product.image} alt={product.name} />
        </div>
      </article>

      <div className="text-center">
        <button
          className="customBtnModal"
          type="button"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Menu;
