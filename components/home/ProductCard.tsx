import { Product } from "@/types/products.type";
import Image from "next/image";
import React from "react";
import AddToCartButton from "../common/AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article
      aria-label={"Product: " + product?.title}
      key={product?.id}
      className="bg-white p-3 flex flex-col gap-0.5 items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
    >
      <Image
        src={product?.thumbnail}
        alt="Product Image"
        width={300}
        height={300}
        className="w-full h-auto object-cover"
      />
      <div className="w-full">
        <h2 className="text-base font-semibold mt-2">{product?.title}</h2>
        <p className="text-sm">${product?.price}</p>
        <AddToCartButton item={product} />
      </div>
    </article>
  );
};

export default ProductCard;
