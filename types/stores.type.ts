import { Product } from "./products.type";

export type ProductStore = {
  allProducts: Product[];
  addProducts: (products: Product[]) => void;
  categories: string[];
  addCategories: (categories: string[]) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  currentPriceRange: number[];
  setCurrentPriceRange: (priceRange: number[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export interface CartItem extends Product {
  quantity: number;
}

export type CartStore = {
  cartItems: CartItem[];
  cartTotal: number;
  addToCart: (item: Product) => void;
  clearItem: (itemId: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  getCartTotal: (state: CartStore) => number;
  decreaseCartItemQuantity: (itemId: number, quantity: number) => void;
};
