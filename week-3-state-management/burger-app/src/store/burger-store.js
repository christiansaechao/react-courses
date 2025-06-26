import { create } from "zustand";
// cart number of ingredients
// figure out the total price
// function getTotalHamburgerPrice
// const ingredients = await fetch("/ingrediants.json");

const initialState = {
  ingredients: [],
  totalPrice: 0,
};

const burgerStore = create((set) => ({
  Burger: initialState,
  addIngredients: ({ name, price }) =>
    set((state) => ({
      Burger: {
        ingredients: [...state.Burger.ingredients, name],
        totalPrice: state.Burger.totalPrice + price,
      },
    })),
  removeIngredients: ({ name, price }) =>
    set((state) => {
      const index = state.Burger.ingredients.indexOf(name);
      const array = state.Burger.ingredients;
      
      if (index > -1) {
        array.splice(index, 1);
      }

      return {
        Burger: {
          ingredients: array,
          totalPrice: state.Burger.totalPrice - price,
        },
      };
    }),
}));

export default burgerStore;
