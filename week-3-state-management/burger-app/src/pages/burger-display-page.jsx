import React from "react";
import BurgerIcon from "@/components/burgerIcon";

const BurgerDisplayPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-full">
        <h2>Classical Cheeseburger</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          mauris vitae sapien tristique maximus.{" "}
        </p>
        <BurgerIcon />
        <div className="flex flex-row items-center justify-evenly">
        <button className="!bg-[#4e4231] !text-[#ebe6e0]">−</button>{0}<button className="!bg-[#4e4231] !text-[#ebe6e0]">+</button>
        </div>
          <button className="!bg-[#4e4231] !text-[#ebe6e0]" onClick={() => console.log("clicking")}> Add to Cart! </button>
      </div>
    </>
  );
};

export default BurgerDisplayPage;
