import { Product } from "./products.type";

export type ProductStore = {
  allProducts: Product[];
  addProducts: (products: Product[]) => void;
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
