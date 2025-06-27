import React from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";
import burgerStore from "@/store/burger-store.js";
import BurgerModel from "@/models/burgerModel.js";
//import navStore from "@/store/nav-store";

// The home page of the burger app

const Home = () => {
  const { addBurger } = burgerStore((state) => state.Burger);

  return (
    <div className="p-5 pt-0 overflow-y-auto h-full no-scrollbar ">
      <PageHeader pageTitle="BurgerMania" showHeader={false} />
      <h3 className="italic text-[#ebe6e0] underline font-mono from-bold">
        GET YO SNACK BIG BACK
      </h3>
      <div className="w-[200px] mx-auto">
        <img
          src="https://as1.ftcdn.net/v2/jpg/12/84/39/24/1000_F_1284392471_76S2IwiaLOSdmOiT1XcrIc139JrESyec.webp"
          alt="burger"
        />
      </div>
      <h2 className="text-[#ebe6e0] text-center from-bold font-mono text-3xl rounded-md bg-gradient-to-t from-orange-500 via-[#d49c67] to-[#8d7658]">
        Popular
      </h2>
      <div className="flex flex-col gap-4">
        <GenericCards>
          <div className="flex justify-between items-center p-6">
            <h2 className="text-start from-bold font-mono text-[#4e4231]">
              The <br />
              Original
            </h2>
            <div className="flex ">
              <button
                className="bg-orange-500 text-[#ebe6e0] static absolute right-0"
                onClick={() => addBurger(new BurgerModel())}>
                <span className="text-x">Add To Cart</span>
              </button>
            </div>
            <p className="font-italic text-[#4e4231]">4.99</p>
          </div>
        </GenericCards>

        <GenericCards>
          <div className="flex justify-between items-center p-6">
            <h2 className="text-start from-bold font-mono text-[#4e4231]">
              Classic <br />
              Cheeseburger
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-italic text-[#4e4231]">$8.99</p>
              <button
                className="bg-orange-500 text-[#ebe6e0] h-4 p-0 flex items-center"
                onClick={() => addBurger()}>
                <span className="text-x">Add to cart</span>
              </button>
            </div>
          </div>
        </GenericCards>
      </div>
    </div>
  );
};

export default Home;
