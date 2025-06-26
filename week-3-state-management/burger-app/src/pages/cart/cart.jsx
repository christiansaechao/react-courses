import React from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";

const Cart = () => {
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
    </div>
  );
};

export default Cart;
