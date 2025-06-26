import React, { useState, useEffect } from "react";
import burgerStore from "../store/burger-store";

const BuildABurger = () => {
  const [burgerIngredients, setBurgerIngredients] = useState(null);
  const { addIngredients, removeIngredients } = burgerStore();

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
      {burgerIngredients?.map(([category, burgerIngredients], index) => (
        <div
          key={index}
          className="border border-black border-3 rounded rounded-xl w-full"
        >
          <h2 className="font-extrabold border-b mb-2">{category}</h2>
          <div className="">
            {burgerIngredients?.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between align-start flex-wrap p-3">
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="italic px-2">${item.price}</span>
                </div>
                <div className="flex justify-around p-3 gap-4">
                  <button className="w-1/2" onClick={() => addToCart(item)}>Add</button>
                  <button className="w-1/2" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildABurger;
