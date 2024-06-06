import { create } from "zustand";

const useCart = create((set, get) => ({
  cartItems: [],

  addItemToCart: (item, quantity = 1) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExists) {
      itemExists.quantity = (itemExists.quantity || 0) + quantity;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity }] });
    }
  },
  clearProductOrder: () => set({ cartItems: [] }),
}));

export default useCart;
