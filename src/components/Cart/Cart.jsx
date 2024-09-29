import "./Cart.css";
import { useMutation } from "@tanstack/react-query";
import useCart from "../../stores/useCart";
import { addToCartFn } from "../../api/products";
import { NavLink, useNavigate } from "react-router-dom";
import TableNumber from "../TableNumber/TableNumber";
import Swal from "sweetalert2";
import { useSession } from "../../stores/useSession";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const { addItemToCart, cartItems, clearProductOrder, removeItemFromCart } = useCart();
  const { user } = useSession();

  if (!user || !user.id) {
    return Swal.showLoading();
  }
  const userId = user.id;

  const navigate = useNavigate();

  const { mutate: addToCart } = useMutation({
    mutationFn: addToCartFn,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Order confirmed",
        text: "Your order has been placed successfully!",
      });
      clearProductOrder();
      setTimeout(() => {
        navigate("/status");
      }, 1000);
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Order failed",
        text: error.message,
      });
    },
  });

  const handleOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your order is empty",
      });
    } else {
      Swal.fire({
        title: "Order",
        text: "Would you like to confirm the order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, confirm",
        cancelButtonText: "Cancel",
      }).then((res) => {
        if (res.isConfirmed) {
          const products = cartItems.map(({ id, ...rest }) => ({
            ...rest,
          }));
          const newOrder = {
            productsOrdered: products,
            userId: userId,
          };
          addToCart(newOrder);
        }
      });
    }
  };

  const totalProduct = Object.values(cartItems).reduce((totals, item) => {
    const productsTotal = parseFloat(item.cost) * item.quantity;
    totals[item.id] = productsTotal;
    return totals;
  }, {});

  const totalOrderCost = Object.values(cartItems).reduce(
    (total, item) => total + parseFloat(item.cost) * item.quantity,
    0
  );

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return formatter.format(value).replace("ARS", "$").replace(",00", "");
  };

  return (
    <>
      <h1 className="text-center cartSec fw-bolder">Restaurant Larana</h1>
      <section className="container text-center pt-2">
        <article className="container p-3 conteinerCard">
          <h3 className="fw-bolder my-3">Your order:</h3>
          <TableNumber />
          <div className="d-flex justify-content-end">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/menu"
            >
              <div className="d-flex gap-3 pe-3 align-items-center">
                <i className="bi bi-arrow-left fs-5 fw-bolder"></i>
                <h5 className="btnBack align-content-center">Back to menu</h5>
              </div>
            </NavLink>
          </div>

          {Object.values(cartItems).map((item) => (
            <div className="text-center" key={item.id}>
              <h4 className="py-2 borderName fw-bolder">{item.name}</h4>
              <img
                className="cartImg"
                src={item.image}
                alt="Descripción de la imagen"
              />
              <h5 className="py-2">Amount: {item.quantity}</h5>
              <h5 className="py-2 borderTotal">
                Price: {formatCurrency(item.cost)}
              </h5>
              <h5 className="py-2 borderTotal">
                Products total: {formatCurrency(totalProduct[item.id])}
              </h5>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="btnQuantity"
                >
                  <FaMinus />
                </button>
                <span className="m-4 text-light">{item.quantity}</span>
                <button
                  onClick={() => addItemToCart(item, 1)}
                  className="btnQuantity"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
          <h4 className="fw-bolder mt-4">
            Total Order Cost: {formatCurrency(totalOrderCost)}
          </h4>
        </article>
        <section className="row my-3 gap-md-0">
          <article className="col-12 col-md-6">
            <button onClick={handleOrder} className={"btnCart"}>
              Confirm
            </button>
          </article>
          <article className="col-12 col-md-6">
            <button onClick={clearProductOrder} className={"btnCart"}>
              Remove order
            </button>
          </article>
        </section>
      </section>
    </>
  );
};

export default Cart;
