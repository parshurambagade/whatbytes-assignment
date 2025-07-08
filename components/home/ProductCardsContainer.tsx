"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import useFilters from "@/hooks/useFilters";

const ProductCardsContainer = () => {
  const { filteredProducts } = useFilters();

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-500">No products available.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-2 gap-4">
      {filteredProducts?.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductCardsContainer;
