"use client";

import useFilters from "@/hooks/useFilters";
import { useProductsStore } from "@/stores/products.store";
import React from "react";

const Categories = () => {
  const categories = useProductsStore((state) => state.categories);
  const { currentCategory, setCurrentCategory } = useFilters();

  const handleCategoryChange = (value: string) => {
    setCurrentCategory(value);
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <h3 className="text-white font-semibold">Categories</h3>
      <label htmlFor="all" className="text-white flex gap-2 items-center">
        <input
          type="radio"
          name="category"
          value="all"
          id="all"
          checked={currentCategory === "all"}
          onChange={(e) => handleCategoryChange(e.target.value)}
        />
        All
      </label>
      {categories.map((category, index) => (
        <label
          htmlFor={category}
          className="text-white flex gap-2 items-center capitalize"
          key={index}
        >
          <input
            type="radio"
            name="category"
            value={category}
            id={category}
            checked={currentCategory === category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default Categories;
