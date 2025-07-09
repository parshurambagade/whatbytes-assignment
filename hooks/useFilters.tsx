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
    searchQuery,
    setSearchQuery,
  } = useProductsStore();

  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL on mount
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    const urlMinPrice = searchParams.get("minPrice");
    const urlMaxPrice = searchParams.get("maxPrice");
    const urlQuery = searchParams.get("q") || "";

    setCurrentCategory(urlCategory);
    setSearchQuery(urlQuery);

    if (urlMinPrice && urlMaxPrice) {
      setCurrentPriceRange([parseInt(urlMinPrice), parseInt(urlMaxPrice)]);
    } else {
      setCurrentPriceRange([0, 2000]);
    }
  }, [searchParams, setCurrentCategory, setCurrentPriceRange, setSearchQuery]);

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

    if (searchQuery.trim() !== "") {
      params.set("q", searchQuery);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/?${queryString}` : "/";

    router.replace(newUrl, { scroll: false });
  }, [currentCategory, currentPriceRange, searchQuery, router]);

  // Reset filters when category changes
  useEffect(() => {
    if (currentCategory === "all") return;

    setCurrentPriceRange([0, 2000]);
    setSearchQuery("");
  }, [currentCategory, setCurrentPriceRange, setSearchQuery]);

  // Combined filtering logic
  useEffect(() => {
    let filtered = allProducts;

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (currentCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === currentCategory
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= currentPriceRange[0] &&
        product.price <= currentPriceRange[1]
    );

    setFilteredProducts(filtered);
  }, [
    allProducts,
    searchQuery,
    currentCategory,
    currentPriceRange,
    setFilteredProducts,
  ]);

  return {
    filteredProducts,
    setFilteredProducts,
    currentCategory,
    setCurrentCategory,
    currentPriceRange,
    setCurrentPriceRange,
    searchQuery,
    setSearchQuery,
  };
}
