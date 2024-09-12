import { create } from "zustand";

const persistTableNumber = (set) => ({
  tableNumber: JSON.parse(localStorage.getItem("tableNumber")) || null,
  isTableNumberSet: !!localStorage.getItem("tableNumber"),
  
  setTableNumber: (number) => {
    localStorage.setItem("tableNumber", JSON.stringify(number));
    set({ tableNumber: number, isTableNumberSet: true });
  },
  
  clearTableNumber: () => {
    localStorage.removeItem("tableNumber");
    set({ tableNumber: null, isTableNumberSet: false });
  }
});

export const useTableNumber = create(persistTableNumber);

