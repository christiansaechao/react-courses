import React from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";
import Total from "../Total";
import axios from "axios";
import BurgerCards from "@/components/burger-cards"
import burgerStore from "../../store/burger-store";
//import navStore from "@/store/nav-store.js";


const Cart = () => {
  const burgers = burgerStore((state) => state.Burger.burgers)
  const PUBLISH_KEY = import.meta.env.PUBLISH_KEY;
  const { totalPrice } = burgerStore((state) => state.Burger);
  const endpoint = "http://localhost:3000/checkout-session";

  async function payment(totalPrice) {
    try {
      console.log("Step1");
      const res = await axios.post(endpoint, {
        amount: totalPrice,
      });
      console.log("Step2");
      console.log(res);
      window.location.href=res.data.url
      console.log(res);
    } catch (error) {
      throw new Error("Payment failed: " + error.message);
    }
  }

  return (
    <div className="p-6">
      <PageHeader pageTitle="Cart" showHeader={true} />
      <div className="flex flex-col gap-4">
        {burgers.map(( burger )=>{
          return (
            <BurgerCards burgerInfo = {burger} />
          )
        })}
      </div>
      <Total />
      <button onClick={() => payment(Number(totalPrice * 100))}> PAY NOW! </button>
    </div>
  );
};

export default Cart;
