import React from "react";
import CarouselIndicator from "./CarouselIndicator";

function Card() {
  return (
    <>
      <div className="mt-28">
        <div className="w-[367px] h-[371px] relative rounded-tl-none rounded-tr-[53px] rounded-br-[42px] rounded-bl-[100px] border-black border">
          <span className="absolute py-1 px-2 text-[11px] bg-black text-white">
            Taqdimot
          </span>
        </div>
        <p className="text-[16px] mt-4">Turdaliyeva.M.M 2023</p>
        <h4 className="text-[24px]">Tipografik chizmachilik </h4>
      </div>
      <div className="flex justify-center items-center my-20 bg-gray-100">
        <CarouselIndicator />
      </div>
    </>
  );
}

export default Card;
