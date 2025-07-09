"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import useFilters from "@/hooks/useFilters";

const ProductCardsContainer = () => {
  const { filteredProducts } = useFilters();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-2 gap-4 min-w-full">
      {!filteredProducts || filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 w-full">
          No products available.
        </div>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))
      ) : null}
    </div>
  );
};

export default ProductCardsContainer;
