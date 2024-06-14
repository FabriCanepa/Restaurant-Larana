import { create } from "zustand";

export const useTableNumber = create((set) => ({
  tableNumber: null,
  setTableNumber: (tableOrder) => set({ tableNumber: tableOrder }),
  clearTableNumber: () => set({ tableNumber: null }),
}));
