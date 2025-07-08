import { Product } from "./products.type";

export type ProductStore = {
  allProducts: Product[];
  addProducts: (products: Product[]) => void;
};
