import { Product } from "@/types/products.type";
import { Star } from "lucide-react";
import React from "react";
import AddToCartButton from "../common/AddToCartButton";
import QuantityButtons from "../common/QuantityButtons";

const ProductDetails = ({ productDetails }: { productDetails: Product }) => {
  const { title, description, price, category, rating } = productDetails || {};
  return (
    <div className="flex flex-col gap-4 h-full justify-center lg:mr-16">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg font-semibold">${price}</p>
      <p className="flex items-center gap-1">
        <Star className="text-yellow-500" fill="currentColor" size={14} />
        <span className="sr-only">Rating:</span>
        {rating}
      </p>
      <p>{description}</p>
      <p className="capitalize">
        Category - <span className="font-medium">{category}</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <QuantityButtons item={productDetails} />
        <AddToCartButton item={productDetails} />
      </div>
    </div>
  );
};

export default ProductDetails;
