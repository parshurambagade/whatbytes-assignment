import { useCartStore } from "@/stores/cart.store";
import { Product } from "@/types/products.type";
import React from "react";

const AddToCartButton = ({ item }: { item: Product }) => {
  const { addToCart } = useCartStore();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(item);
  };
  return (
    <button
      onClick={(e) => handleAddToCart(e)}
      className="w-full mt-2 bg-primary cursor-pointer text-white py-1 px-4 rounded-lg"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
