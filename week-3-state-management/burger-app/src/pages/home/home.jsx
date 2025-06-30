import React, { useState, useEffect } from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";
import burgerStore from "@/store/burger-store.js";
import BurgerCards from "../../components/burger-cards";
//import navStore from "@/store/nav-store";

const Home = () => {
  const { addBurger } = burgerStore((state) => state.Burger);
  const [burgers, setBurgers] = useState();

  async function fetchData() {
    const response = await fetch("/burgers.json");
    const data = await response.json();
    setBurgers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="flex flex-col gap-4 py-4">
        {burgers?.map((burger) => {
          return <BurgerCards burgerInfo={burger} addBurger={addBurger} />;
        })}
      </div>
    </div>
  );
};

export default Home;
