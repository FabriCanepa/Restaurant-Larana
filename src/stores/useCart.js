import { create } from "zustand";

const useCart = create((set, get) => ({
  cartItems: [],

  addItemToCart: (item) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExists) {
      itemExists.quantity = (itemExists.quantity || 0) + 1;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
  clearProductOrder: () => set({ cartItems: [] }),
}));

export default useCart;
