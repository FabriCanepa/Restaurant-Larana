import { create } from "zustand";
import { addToCartFn } from "../api/products.js";

const useCart = create((set, get) => ({
  cartItems: [],

  addItemToCart: async (item) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExists) {
      itemExists.quantity = (itemExists.quantity || 0) + 1;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }

    const sendToServer = async () => {
      await addToCartFn(get().cartItems);
    };

    // Llama a la función asíncrona
    await sendToServer();
  },
}));


export default useCart;
