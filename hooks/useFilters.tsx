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
    currentPriceRange,
    setCurrentPriceRange,
  } = useProductsStore();

  useEffect(() => {
    setCurrentPriceRange([0, 2000]);
    const filterByCategory = (category: string) => {
      if (category === "all") {
        return allProducts;
      }
      return allProducts.filter((product) => product.category === category);
    };
    setFilteredProducts(filterByCategory(currentCategory));
  }, [currentCategory, allProducts, setFilteredProducts, setCurrentPriceRange]);

  useEffect(() => {
    const filterByPriceRange = (priceRange: number[]) => {
      return currentCategory === "all"
        ? allProducts.filter(
            (product) =>
              product.price >= priceRange[0] && product.price <= priceRange[1]
          )
        : allProducts.filter(
            (product) =>
              product.price >= priceRange[0] &&
              product.price <= priceRange[1] &&
              product.category === currentCategory
          );
    };
    setFilteredProducts(filterByPriceRange(currentPriceRange));
  }, [currentPriceRange, allProducts, setFilteredProducts, currentCategory]);

  return {
    filteredProducts,
    setFilteredProducts,
    currentCategory,
    setCurrentCategory,
    currentPriceRange,
    setCurrentPriceRange,
  };
}
