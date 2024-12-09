"use client";

import { useState } from "react";

const CarouselIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 5;

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-[26px] h-[26px] rounded-full border-2 transition-all ${
            activeIndex === index
              ? "bg-black border-black scale-110"
              : "bg-white border-gray-400"
          }`}></button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
