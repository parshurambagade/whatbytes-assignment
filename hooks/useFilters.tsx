import { useEffect } from "react";
import useAllProducts from "./useAllProducts";
import { useProductsStore } from "@/stores/products.store";
import { useRouter, useSearchParams } from "next/navigation";

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

  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL on mount
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    const urlMinPrice = searchParams.get("minPrice");
    const urlMaxPrice = searchParams.get("maxPrice");

    setCurrentCategory(urlCategory);

    if (urlMinPrice && urlMaxPrice) {
      setCurrentPriceRange([parseInt(urlMinPrice), parseInt(urlMaxPrice)]);
    } else {
      setCurrentPriceRange([0, 2000]);
    }
  }, [searchParams, setCurrentCategory, setCurrentPriceRange]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (currentCategory !== "all") {
      params.set("category", currentCategory);
    }

    if (currentPriceRange[0] !== 0 || currentPriceRange[1] !== 2000) {
      params.set("minPrice", currentPriceRange[0].toString());
      params.set("maxPrice", currentPriceRange[1].toString());
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/?${queryString}` : "/";

    router.replace(newUrl, { scroll: false });
  }, [currentCategory, currentPriceRange, router]);

  useEffect(() => {
    const filterByCategory = (category: string) => {
      if (category === "all") {
        return allProducts;
      }
      return allProducts.filter((product) => product.category === category);
    };
    setFilteredProducts(filterByCategory(currentCategory));
  }, [currentCategory, allProducts, setFilteredProducts]);

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
