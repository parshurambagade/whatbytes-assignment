import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductStore } from "@/types/stores.type";

export const useProductsStore = create<ProductStore>()(
  devtools((set) => ({
    allProducts: [],
    filteredProducts: [],
    setFilteredProducts: (products) => set({ filteredProducts: products }),
    currentCategory: "all",
    setCurrentCategory: (category) => set({ currentCategory: category }),
    categories: [],
    addProducts: (products) => set({ allProducts: products }),
    addCategories: (categories) => set({ categories: categories }),
  }))
);
