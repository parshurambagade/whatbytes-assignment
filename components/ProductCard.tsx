import { Product } from "@/types/products.type";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article
      aria-label={"Product: " + product?.title}
      key={product?.id}
      className="bg-white p-3 flex flex-col gap-0.5 items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
        <button className="w-full mt-2 bg-primary cursor-pointer text-white py-1 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
