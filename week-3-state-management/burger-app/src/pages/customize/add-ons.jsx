import React from "react";

const AddOns = ({ burgerIngredients, addToCart, removeFromCart }) => {
  return (
    <>
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
                  <button className="w-1/2 bg-black" onClick={() => addToCart(item)}>
                    Add
                  </button>
                  <button
                    className="w-1/2 bg-black"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddOns;
