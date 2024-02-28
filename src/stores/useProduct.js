import { create } from "zustand";

const useProduct = create((set, get) => ({
  products: [],
  setProducts: (newProduct) => {
    const newProducts = [...get().products, newProduct];

    return set({ products: newProducts });
  },
}));

export default useProduct;
