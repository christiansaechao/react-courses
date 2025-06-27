import React from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";
import Total from "../Total";
import axios from "axios";
//import navStore from "@/store/nav-store.js";
import burgerStore from "../../store/burger-store";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const PUBLISH_KEY = import.meta.env.PUBLISH_KEY;
  const { totalPrice } = burgerStore((state) => state.Burger);
  const endpoint = "http://localhost:3000/checkout-session";
  async function payment(totalPrice) {
    // const stripe = await loadStripe(PUBLISH_KEY);
    try {
      const res = await axios.post(endpoint, {
        amount: totalPrice,
      });
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
        <GenericCards>
          <div className="flex justify-between items-center p-6">
            <div className="h-20 flex justify-between items-start flex-col">
              <h2 className="text-start font-semibold italic">
                Classic <br />
                Cheeseburger
              </h2>
              <p>$8.99</p>
            </div>
            <div className="w-20">
              <img
                src="https://thumbs.dreamstime.com/b/burger-icon-bbq-restaurant-fsas-food-grill-bar-cheeseburger-hamburger-vector-emblem-fast-menu-barbecue-sign-sesame-356232639.jpg"
                alt=""
              />
            </div>
          </div>
        </GenericCards>

        <GenericCards>
          <div className="flex justify-between items-center p-6">
            <div className="h-20 flex justify-between items-start flex-col">
              <h2 className="text-start font-semibold italic">
                Classic <br />
                Cheeseburger
              </h2>
              <p>$8.99</p>
            </div>
            <div className="w-20">
              <img
                src="https://thumbs.dreamstime.com/b/burger-icon-bbq-restaurant-fsas-food-grill-bar-cheeseburger-hamburger-vector-emblem-fast-menu-barbecue-sign-sesame-356232639.jpg"
                alt=""
              />
            </div>
          </div>
        </GenericCards>
      </div>
      <Total />
      <button onClick={() => payment(50000)}> PAY NOW! </button>
    </div>
  );
};

export default Cart;
