"use client";

import { Trash2Icon, ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/stores/cart.store";
import { CartItem } from "@/types/stores.type";
import Image from "next/image";
import QuantityButtons from "@/components/common/QuantityButtons";

export default function CartPage() {
  const { cartItems, clearCart, cartTotal, clearItem } = useCartStore();

  const handleClearItem = (item: CartItem) => {
    clearItem(item.id);
  };

  return (
    <div className="container mx-auto max-w-4xl min-h-[calc(100vh-64px)] px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between border-b py-4 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mb-4 sm:mb-0">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="w-full md:w-24 lg:w-20 md:h-24 lg:h-20 object-cover rounded mb-2 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="font-bold text-primary">
                    ₹{Number(item.price)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <QuantityButtons item={item} />
                <button
                  className="cursor-pointer p-1 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-200"
                  onClick={() => handleClearItem(item)}
                >
                  <Trash2Icon className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total Amount */}
      <div className="text-right mb-6">
        <p className="text-xl font-bold text-gray-800">
          Total: <span className="text-primary">₹{cartTotal.toFixed(2)}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
        <button
          className="w-full cursor-pointer sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-200"
          onClick={clearCart}
          disabled={!cartItems.length}
        >
          Clear Cart
        </button>
        <button
          disabled={cartItems.length === 0}
          className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
        >
          <ShoppingCartIcon className="mr-2 h-5 w-5" /> Checkout
        </button>
      </div>
    </div>
  );
}
