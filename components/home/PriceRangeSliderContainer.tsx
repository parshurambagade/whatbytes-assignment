"use client";

import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import useFilters from "@/hooks/useFilters";

const PriceRangeSliderContainer = () => {
  const { currentPriceRange, setCurrentPriceRange } = useFilters();

  return (
    <div className="mt-4 flex flex-col gap-3 max-w-full">
      <h3 className=" text-white font-semibold">Price</h3>
      <PriceRangeSlider
        values={currentPriceRange}
        setValues={setCurrentPriceRange}
      />
      <div className="flex mx-2 justify-between text-white">
        <p>{currentPriceRange[0]}</p>
        <p>{currentPriceRange[1]}</p>
      </div>
    </div>
  );
};

export default PriceRangeSliderContainer;
