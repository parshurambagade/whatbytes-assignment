"use client";

import ProductDetails from "@/components/product/ProductDetails";
import useProductDetails from "@/hooks/useProductDetails";
import { Product } from "@/types/products.type";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import BackButton from "@/components/common/BackButton";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { productDetails, loading, error } = useProductDetails(
    (id as string) || "1"
  );

  return (
    <main className=" w-full min-h-[65vh] px-2 md:px-4 py-6 md:py-12 bg-background">
      <div className="mb-4 px-4">
        <BackButton text="Back to Products" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {productDetails && (
        <div className="bg-white md:bg-transparent  px-4 py-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center h-full">
            <Image
              src={productDetails?.images[0] || productDetails?.thumbnail}
              alt={productDetails?.title || "Product Image"}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <ProductDetails productDetails={productDetails as Product} />
        </div>
      )}
    </main>
  );
};

export default ProductDetailsPage;
