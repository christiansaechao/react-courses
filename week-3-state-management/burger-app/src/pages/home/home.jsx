import React from "react";
import PageHeader from "@/components/page-header";
import GenericCards from "@/components/generic-cards";
// The home page of the burger app

const Home = () => {
  return (
    <div className="p-6 overflow-y-auto h-full no-scrollbar">
      <PageHeader pageTitle="BurgerMania" showHeader={false} />
      <div>
        <img
          src="https://as1.ftcdn.net/v2/jpg/12/84/39/24/1000_F_1284392471_76S2IwiaLOSdmOiT1XcrIc139JrESyec.webp"
          alt="burger"
        />
      </div>
       <h2 className="text-black from-bold font-mono text-start text-3xl bg-gradient-to-r from-orange-500 via-[#d49c67] to-[#8d7658]">
        Popular
        </h2>
      <div className="flex flex-col gap-4">
        <GenericCards>
          <div className="flex justify-between items-center p-6">
            <h2 className="text-start from-bold font-mono text-black">
              The <br />
              Original
            </h2>
            <p className="text-black font-italic">4.99</p>
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

export default Home;
