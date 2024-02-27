import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addProductToCart: (product) => {
    console.log("Adding product to cart", product);
    set((state) => ({ cart: [...state.cart, product] }));
  },
}));

export default useCart;
