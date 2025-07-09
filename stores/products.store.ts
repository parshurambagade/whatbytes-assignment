import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductStore } from "@/types/stores.type";

export const useProductsStore = create<ProductStore>()(
  devtools((set) => ({
    allProducts: [],
    categories: [],
    filteredProducts: [],
    currentCategory: "all",
    currentPriceRange: [0, 2000],
    searchQuery: "",
    setCurrentCategory: (category) => set({ currentCategory: category }),
    setCurrentPriceRange: (priceRange) =>
      set({ currentPriceRange: priceRange }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setFilteredProducts: (products) => set({ filteredProducts: products }),
    addProducts: (products) => set({ allProducts: products }),
    addCategories: (categories) => set({ categories: categories }),
  }))
);
