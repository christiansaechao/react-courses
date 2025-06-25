import React, { useState, useEffect } from "react";
import burgerStore from "../store/Store";
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
    <div className="flex gap-7 m-5 w-full">
      {burgerIngredients?.map(([category, burgerIngredients], index) => (
        <div
          key={index}
          className="border border-black border-3 rounded rounded-xl "
        >
          <h2 className="font-extrabold border-b mb-2">{category}</h2>
          <div className="">
            {burgerIngredients?.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between align-start flex-wrap p-3">
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="italic px-2">${item.price}</span>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => addToCart(item)}>Add</button>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
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
