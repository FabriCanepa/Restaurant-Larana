import "./Cart.css";
import { useMutation } from "@tanstack/react-query";
import useCart from "../../stores/useCart";
import { addToCartFn } from "../../api/products";
import { NavLink, useNavigate } from "react-router-dom";
import TableNumber from "../TableNumber/TableNumber";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, clearProductOrder } = useCart();

  const navigate = useNavigate();

  const { mutate: postOrders } = useMutation({
    mutationFn: addToCartFn,
    onSuccess: () => {
      toast.success("Your order was successfully placed.");
      setTimeout(() => {
        navigate("/status");
      }, 1000);
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleOrder = () => {
    if (Object.keys(cartItems).length === 0) {
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
          const products = Object.values(cartItems).map((product) => ({
            ...product,
            id: undefined,
          }));
          const newOrder = {
            cartItems: products,
          };
          postOrders(newOrder);
          clearProductOrder();
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
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return formatter.format(value).replace("ARS", "$").replace(",00", "");
  };

  return (
    <>
      <h1 className="text-center fw-bolder">Restaurant Larana</h1>
      <section className="container text-center pt-2">
        <article className="container p-3 containerCard">
          <h3 className="fw-bolder my-3">Your order:</h3>
          <TableNumber />
          <div className="d-flex justify-content-end">
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
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
              <img className="cartImg" src={item.image} alt="Descripción de la imagen" />
              <h5 className="py-2">Amount: {item.quantity}</h5>
              <h5 className="py-2 borderTotal">Price: {formatCurrency(item.cost)}</h5>
              <h5 className="py-2 borderTotal">
                Products total: {formatCurrency(totalProduct[item.id])}
              </h5>
            </div>
          ))}
          <h4 className="fw-bolder mt-4">Total Order Cost: {formatCurrency(totalOrderCost)}</h4>
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
