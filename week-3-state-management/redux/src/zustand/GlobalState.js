import { create } from "zustand";

const initialState = {
  number: 0,
};

export const numberStore = create((set) => ({
  state: initialState,
  increment: () =>
    set((state) => {
      return { number: state.staenumber + 1 };
    }),
  decrement: () => set((state) => ({ number: state.number - 1 })),
}));
