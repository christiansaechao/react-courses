import React, { useState, useEffect } from "react";
import burgerStore from "../../store/burger-store";
import AddOns from "./add-ons";
import SelectSize from "./size-options";
//import navStore from "@/store/nav-store";

const BuildABurger = () => {
  const [burgerIngredients, setBurgerIngredients] = useState(null);
  const { addIngredients, removeIngredients } = burgerStore();
  //const {assignIndex} = navStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/ingredients.json");
      const json = await response.json();
      setBurgerIngredients(Object.entries(json));
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    addIngredients(item);
  };

  const removeFromCart = (item) => {
    removeIngredients(item);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-7 w-full overflow-y-auto h-full no-scrollbar p-6">
      <SelectSize/>
      <AddOns
        burgerIngredients={burgerIngredients}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default BuildABurger;
