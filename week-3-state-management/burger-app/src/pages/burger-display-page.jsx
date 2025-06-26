import React from "react";
import BurgerIcon from "@/components/burgerIcon";

const BurgerDisplayPage = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-between h-full p-6">
        <h1>Classical Cheeseburger</h1>
        <p>
          A juicy beef patty with melted cheese, crisp lettuce, ripe tomato,
          pickles, and a special sauce, all sandwiched between a toasted sesame
          bun.
        </p>
        <BurgerIcon />
        <div className="flex flex-row items-center justify-between !bg-[#4e4231] w-1/2 rounded-3xl">
          <button
            className="!bg-[#4e4231] !text-[#ebe6e0]"
            onClick={() => setCount((prev) => prev - 1)}
          >
            −
          </button>
          {count}
          <button
            className="!bg-[#4e4231] !text-[#ebe6e0]"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="!bg-[#4e4231] !text-[#ebe6e0] w-full"
          onClick={() => console.log("something")}
        >
          {" "}
          Add to Cart!{" "}
        </button>
      </div>
    </>
  );
};

export default BurgerDisplayPage;
