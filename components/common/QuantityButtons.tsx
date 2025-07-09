import { useCartStore } from "@/stores/cart.store";
import { CartItem } from "@/types/stores.type";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";

const QuantityButtons = ({ item }: { item: CartItem }) => {
  const { removeItem, addToCart } = useCartStore();
  return (
    <>
      <button
        className="cursor-pointer p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        onClick={() => removeItem(item.id)}
      >
        <MinusIcon className="h-4 w-4 text-gray-600" />
      </button>
      <span className="w-8 text-center">{item.quantity}</span>
      <button
        className="cursor-pointer p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        onClick={() => addToCart(item)}
      >
        <PlusIcon className="h-4 w-4 text-gray-600" />
      </button>
    </>
  );
};

export default QuantityButtons;
