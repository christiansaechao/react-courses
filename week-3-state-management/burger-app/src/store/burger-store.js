import { create } from "zustand";
import BurgerModel from "@/models/burgerModel";
// cart number of ingredients
// figure out the total price
// function getTotalHamburgerPrice
// const ingredients = await fetch("/ingrediants.json")

const initialState = {
  burgers: [],
  totalPrice: 0,
  currentBurger: undefined,
};

const burgerStore = create((set) => ({
  Burger: initialState,
  addBurger:({ newburger })=>
    set((state)=>({
      Burger:{
        Burgers:[...state.Burger.burgers, newburger],
        totalPrice: state.Burger.totalPrice + newburger.price,
        currentBurger: newburger,
      },
  })),
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
