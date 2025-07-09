"use client";

import { useProductsStore } from "@/stores/products.store";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { categories } = useProductsStore();
  return (
    <footer className=" p-8 pb-4 lg:px-24  bg-[var(--primary-hover)] text-white text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-semibold">Filters</h2>
          <ul className="flex flex-col gap-3 mt-2">
            <li>
              <Link href={"/"}>All</Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/?category=${category}`}
                  className="hover:underline capitalize"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <ul className="flex flex-col gap-3 mt-2">
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <ul className="flex items-center gap-3 mt-2">
            <li className="cursor-pointer bg-primary p-2 rounded-full">
              <Facebook size={16} />
            </li>
            <li className="cursor-pointer bg-primary p-2 rounded-full">
              <Twitter size={16} />
            </li>
            <li className="cursor-pointer bg-primary p-2 rounded-full">
              <Instagram size={16} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className=" text-sm mt-6">
          &copy; {new Date().getFullYear()} WhatBytes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
