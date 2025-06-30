import React from "react";
import GenericCards from "@/components/generic-cards";
import burgerStore from "../../store/burger-store";
const BurgerCards = ({ burgerInfo }) => {
  const { addBurger } = burgerStore();
  return (
    <GenericCards>
      <div className="flex justify-between items-center p-6">
        <h2 className="text-start from-bold font-mono text-[#4e4231]">
          {burgerInfo.name}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="font-italic text-[#4e4231]">${burgerInfo.price}</p>
        </div>
      </div>
    </GenericCards>
  );
};

export default BurgerCards;
