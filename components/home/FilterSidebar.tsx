import React from "react";
import Categories from "./Categories";
import PriceRangeSliderContainer from "./PriceRangeSliderContainer";

const FilterSidebar = () => {
  return (
    <aside className="w-full sm:w-1/5 p-4 bg-primary shadow-md rounded-lg h-max min-w-max">
      <h2 className="text-xl font-bold text-white">Filters</h2>

      <Categories />
      <PriceRangeSliderContainer />
    </aside>
  );
};

export default FilterSidebar;
