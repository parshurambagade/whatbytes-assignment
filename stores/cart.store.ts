import { CartStore } from "@/types/stores.type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import toast from "react-hot-toast";

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
            set((state) => {
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
            toast.success(`Increased ${item.title} quantity in cart!`);
          } else {
            set((state) => ({
              cartItems: [...state.cartItems, { ...item, quantity: 1 }],
              cartTotal: state.cartTotal + item.price,
            }));
            toast.success(`${item.title} added to cart!`);
          }
        },
        clearItem: (itemId) =>
          set((state) => {
            const itemToRemove = state.cartItems.find(item => item.id === itemId);
            const updatedItems = state.cartItems.filter(
              (item) => item.id !== itemId
            );
            const newTotal = updatedItems.reduce(
              (total, item) => total + item.price * (item.quantity || 1),
              0
            );
            if (itemToRemove) {
              toast.success(`${itemToRemove.title} removed from cart!`);
            }
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
              
              if (updatedItems.find(item => item.id === itemId)) {
                toast.success(`Decreased ${itemToRemove.title} quantity!`);
              } else {
                toast.success(`${itemToRemove.title} removed from cart!`);
              }
              
              return { cartItems: updatedItems, cartTotal: newTotal };
            });
          }
        },
        clearCart: () => {
          set({ cartItems: [], cartTotal: 0 });
          toast.success("Cart cleared successfully!");
        },
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
