import React, {useState} from "react";

const SelectSize = () => {
  const [burgerSize, setBurgerSize] = useState("Medium");
  const sizeOptions = [
    { name: "Small", price: 8.99 },
    { name: "Medium", price: 9.99 },
    { name: "Large", price: 10.99 },
  ];

  return (
    <>
      <div className="flex flex-col">
        <h2>Pick a Size</h2>
        {sizeOptions.map((option) => (
        <>
         <div className="flex w-full">
            <div className='flex-row'>
              <h3>{option.name}</h3>
              <span>{option.price}</span>
            </div>
            <div>
              <button onClick = {() => setBurgerSize(option.name)}> Add </button>
            </div>
          </div>
        </>
        ))}
      </div>
    </>
  );
};


export default SelectSize;
