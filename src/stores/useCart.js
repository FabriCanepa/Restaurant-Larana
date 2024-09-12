import { create } from "zustand";

export const useCart = create((set, get) => ({
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

  removeItemFromCart: (itemId) => {
    set((state) => {
      const updatedItems = state.cartItems.reduce((acc, item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      return { cartItems: updatedItems };
    });
  },

  clearProductOrder: () => set({ cartItems: [] }),
}));

export default useCart;
