import { create } from "zustand";
const initialState = {
  number: 0,
  name: "Manny",
  age: '18',
  yearBorn: '3090'
};

const numberStore = create((set) => ({
  person: initialState,
  increment: () =>
    set(({ person }) => ({
      person: {
        ...person,
        number: person.number + 1,
      },
    })),
  decrement: () =>
    set(({ person }) => ({
      person: {
        ...person,
        number: person.number - 1,
      },
    })),
}));

export default numberStore;
