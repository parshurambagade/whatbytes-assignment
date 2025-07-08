import React from "react";
import Categories from "./Categories";

const FilterSidebar = () => {
  return (
    <aside className="w-1/4 p-4 bg-primary shadow-md rounded-lg h-max min-w-max">
      <h2 className="text-xl font-bold text-white">Filters</h2>

      <Categories />
    </aside>
  );
};

export default FilterSidebar;
