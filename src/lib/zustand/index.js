import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    mobileNavbar: false,
    setMobileNavbar() {
      return set((state) => {
        return { mobileNavbar: !state.mobileNavbar };
      });
    },
  };
});
