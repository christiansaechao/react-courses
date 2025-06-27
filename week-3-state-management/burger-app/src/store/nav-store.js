import { create } from "zustand";

const navStore = create((set) => ({
  BurgerAppNav: 0,
  assignIndex: ({ index }) =>
    set((state) => ({
      BurgerAppNav: {
        navIndex: state.BurgerAppNav = index,
      },
    })),
}));

export default navStore;
