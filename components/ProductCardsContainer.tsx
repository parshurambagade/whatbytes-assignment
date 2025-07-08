"use client";

import useAllProducts from "@/hooks/useAllProducts";
import React from "react";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
  const { allProducts, loading, error } = useAllProducts();

  if (loading) {
    return <div className="text-center text-gray-500">Loading products...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }
  if (!allProducts || allProducts.length === 0) {
    return (
      <div className="text-center text-gray-500">No products available.</div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-2 gap-4">
      {allProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardsContainer;
