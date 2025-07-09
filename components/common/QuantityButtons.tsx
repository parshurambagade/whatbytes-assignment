import { useCartStore } from "@/stores/cart.store";
import { CartItem } from "@/types/stores.type";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";

const QuantityButtons = ({ item }: { item: CartItem }) => {
  const { removeItem, addToCart, cartItems } = useCartStore();

  const existingItem: CartItem | undefined = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  return (
    <div className="flex items-center space-x-1">
      <button
        className="cursor-pointer p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        onClick={() => removeItem(item.id)}
      >
        <MinusIcon className="h-4 w-4 text-gray-600" />
      </button>
      <span className="w-8 text-center">
        {existingItem?.quantity ? existingItem?.quantity : 0}
      </span>
      <button
        className="cursor-pointer p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        onClick={() => addToCart(item)}
      >
        <PlusIcon className="h-4 w-4 text-gray-600" />
      </button>
    </div>
  );
};

export default QuantityButtons;
