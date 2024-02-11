import { create } from "zustand";

export const useProduct = create((set, get) => ({
  products: [],
  setProducts: (newProduct) => {
    const newProducts = [...get().products, newProduct];

    return set({ products: newProducts });
  },
}));