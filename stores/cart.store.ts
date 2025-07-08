import { CartStore } from "@/types/stores.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  devtools((set) => ({
    cartItems: [],
    cartTotal: 0,
    addToCart: (item) =>
      set((state) => ({
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        cartTotal: state.cartTotal + item.price,
      })),
    removeFromCart: (itemId) =>
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
        cartTotal: state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity || 1,
          0
        ),
      })),
    clearCart: () => set({ cartItems: [], cartTotal: 0 }),
    getCartTotal: () =>
      set((state) => ({
        cartTotal: state.cartItems.reduce(
          (total, item) => total + item.price,
          0
        ),
      })),

    increaseCartItemQuantity: (itemId) =>
      set((state) => {
        const updatedItems = state.cartItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
        const newTotal = updatedItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0
        );
        return { cartItems: updatedItems, cartTotal: newTotal };
      }),
    decreaseCartItemQuantity: (itemId) =>
      set((state) => {
        const updatedItems = state.cartItems
          .map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
              : item
          )
          .filter((item) => item.quantity > 0);
        const newTotal = updatedItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0
        );
        return { cartItems: updatedItems, cartTotal: newTotal };
      }),
  }))
);
