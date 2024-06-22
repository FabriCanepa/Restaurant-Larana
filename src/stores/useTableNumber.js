import { create } from "zustand";

export const useTableNumber = create((set) => ({
  tableNumber: null,
  isTableNumberSet: false,
  setTableNumber: (number) => set({ tableNumber: number, isTableNumberSet: true }),
  clearTableNumber: () => set({ tableNumber: null, isTableNumberSet: false }),
}));
