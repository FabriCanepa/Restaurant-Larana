import { create } from "zustand";

export const useSession = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: (newUser) => set({ user: newUser, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export const useUser = create((set) => ({
  user: null,
  setUserToEdit: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));