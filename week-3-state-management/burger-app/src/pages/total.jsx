import React from "react";
import burgerStore from "../store/Store";

const Total = () => {
  const { ingredients, totalPrice } = burgerStore((state) => state.Burger);

  const countedIngredients = ingredients.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  return (
    <div className="bg-white text-black/50 rounded-2xl text-3xl font-bold">
      <div>
        Items:
        <div className="flex flex-col justify-between gap-2 text-black text-left p-2">
          <ul className="p-2">
            {Object.entries(countedIngredients).map(([key, value]) => (
              <li className="flex justify-between">
                <span>{key}:</span>
                <span>x{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t black">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Total;
