"use client";

import { useCartStore } from "@/stores/cart.store";
import { useProductsStore } from "@/stores/products.store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { cartItems } = useCartStore();
  const { searchQuery, setSearchQuery } = useProductsStore();
  return (
    <header className="bg-primary w-full min-h-[64px] flex items-center justify-between px-4">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={"/whatbytes-logo.svg"}
          alt="WhatBytes Logo"
          width={140}
          height={60}
        />
      </Link>
      <div className="flex items-center justify-center min-w-[50%]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search for products..."
          className="border border-light text-white rounded-md px-3 py-2 max-w-md w-full text-sm"
        />
      </div>
      <div className="relative">
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white rounded-full px-1 text-xs">
            {cartItems.length}
          </span>
        )}
        <button
          onClick={() => router.push("/cart")}
          className="cursor-pointer text-white gap-2 px-4 py-2 rounded-lg bg-primary-hover flex items-center"
        >
          <ShoppingCart size={16} />
          <span className="text-sm">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
