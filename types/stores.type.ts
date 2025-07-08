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
};

interface CartItem extends Product {
  quantity: number;
}

export type CartStore = {
  cartItems: CartItem[];
  cartTotal: number;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getCartTotal: (state: CartStore) => number;
  increaseCartItemQuantity: (itemId: number, quantity: number) => void;
  decreaseCartItemQuantity: (itemId: number, quantity: number) => void;
};
