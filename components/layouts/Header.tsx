import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-primary w-full min-h-[64px] flex items-center justify-between px-4">
      <div>
        <Image
          src={"/whatbytes-logo.svg"}
          alt="WhatBytes Logo"
          width={140}
          height={60}
        />
      </div>
      <div className="flex items-center justify-center min-w-[50%]">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          className="border border-light text-white rounded-md px-3 py-2 max-w-md w-full text-sm"
        />
      </div>
      <div>
        <button className="text-white gap-2 px-4 py-2 rounded-lg bg-primary-hover flex items-center">
          <ShoppingCart size={16} />
          <span className="text-sm">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
