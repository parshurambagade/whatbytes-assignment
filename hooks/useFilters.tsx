import { useEffect } from "react";
import useAllProducts from "./useAllProducts";
import { useProductsStore } from "@/stores/products.store";

export default function useFilters() {
  const { allProducts } = useAllProducts();

  const {
    setFilteredProducts,
    filteredProducts,
    currentCategory,
    setCurrentCategory,
  } = useProductsStore();

  useEffect(() => {
    const filterByCategory = (category: string) => {
      if (category === "all") {
        return allProducts;
      }
      return allProducts.filter((product) => product.category === category);
    };
    setFilteredProducts(filterByCategory(currentCategory));
  }, [currentCategory, allProducts, setFilteredProducts]);

  return {
    filteredProducts,
    setFilteredProducts,
    currentCategory,
    setCurrentCategory,
  };
}
