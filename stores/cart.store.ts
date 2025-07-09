import { CartStore } from "@/types/stores.type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],
        cartTotal: 0,
        addToCart: (item) => {
          const exhistingItem = get().cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          if (exhistingItem) {
            // If the item already exists in the cart, increase its quantity
            return set((state) => {
              const updatedItems = state.cartItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                  : cartItem
              );
              const newTotal = updatedItems.reduce(
                (total, cartItem) =>
                  total + cartItem.price * (cartItem.quantity || 1),
                0
              );
              return { cartItems: updatedItems, cartTotal: newTotal };
            });
          }
          set((state) => ({
            cartItems: [...state.cartItems, { ...item, quantity: 1 }],
            cartTotal: state.cartTotal + item.price,
          }));
        },
        clearItem: (itemId) =>
          set((state) => {
            const updatedItems = state.cartItems.filter(
              (item) => item.id !== itemId
            );
            const newTotal = updatedItems.reduce(
              (total, item) => total + item.price * (item.quantity || 1),
              0
            );
            return { cartItems: updatedItems, cartTotal: newTotal };
          }),
        removeItem: (itemId) => {
          const itemToRemove = get().cartItems.find(
            (item) => item.id === itemId
          );
          if (itemToRemove) {
            set((state) => {
              const updatedItems = state.cartItems
                .map((item) =>
                  item.id === itemId
                    ? {
                        ...item,
                        quantity: Math.max((item.quantity || 1) - 1, 0),
                      }
                    : item
                )
                .filter((item) => (item?.quantity ? item.quantity > 0 : false));
              const newTotal = updatedItems.reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0
              );
              return { cartItems: updatedItems, cartTotal: newTotal };
            });
          }
        },
        clearCart: () => set({ cartItems: [], cartTotal: 0 }),
        getCartTotal: () => {
          const items = get().cartItems;
          const total = items.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
          );
          set({ cartTotal: total });
        },
      }),
      {
        name: "cart-storage", // localStorage key
        partialize: (state) => ({
          cartItems: state.cartItems,
          cartTotal: state.cartTotal,
        }),
      }
    )
  )
);
