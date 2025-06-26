import { create } from "zustand";

const pageCounter = create((set) => ({
  BurgerAppNav: 0,
  increaseIndex: ({ index }) =>
    set((state) => ({
      BurgerAppNav: {
        navIndex: state.BurgerAppNav + index,
      },
    })),
  decreaseIndex: ({ index }) =>
    set((state) => ({
      BurgerAppNav: {
        navIndex: state.BurgerAppNav - index,
      },
    })),
}));

export default pageCounter;
