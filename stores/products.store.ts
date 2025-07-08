import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductStore } from "@/types/stores.type";

export const useProductsStore = create<ProductStore>()(
  devtools((set) => ({
    allProducts: [],
    addProducts: (products) => set({ allProducts: products }),
  }))
);
