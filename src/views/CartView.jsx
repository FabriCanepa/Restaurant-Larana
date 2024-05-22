import { useMutation } from "@tanstack/react-query";
import useCart from "../stores/useCart";
import { addToCartFn } from "../api/products";
// import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import Swal from "sweetalert2";

const CartView = () => {
  const { cartItems, clearProductOrder } = useCart();

  // const navigate = useNavigate();

  const { mutate: postOrders } = useMutation({
    mutationFn: addToCartFn,
    onSuccess: () => {
      toast.success("Your order was succesfully placed.");
      setTimeout(() => {
        // navigate("/orderstatus");
      }, 2000);
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const hadleOrden = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your order is empty",
      });
    } else {
      Swal.fire({
        title: "Order",
        text: "¿Would you like to confirm the order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, confirm",
        cancelButtonText: "Cancel",
      }).then((res) => {
        if (res.isConfirmed) {
          const products = cartItems.map((products) => ({
            ...products,
            id: undefined,
          }));
          const newOder = {
            cartItems: products,
          };
          postOrders(newOder);
          clearProductOrder();
        }
      });
    }
  };

  return (
    <>
      <h1 className="fs-1 fw-bold py-4 text-center">Restaurant Larana</h1>
      <h4 className="fw-bold lead text-center">Order</h4>
      <div className="checkout-container container-fluid pt-5">
        <div className="d-flex justify-content-end">
          <div className="d-flex gap-3 pe-3">
            <i className="bi bi-arrow-left mt-1 fs-5 fw-bolder"></i>
            <h5 className="btn btn-outline-dark">Back to menu</h5>
          </div>
        </div>

        <h5 className="ms-5 fw-bolder mt-2">Order</h5>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.cost}</p>
          </div>
        ))}
        <button
          title={"Confirm order"}
          onClick={hadleOrden}
          className={"w-100 fs-5 p-3"}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};
export default CartView;
