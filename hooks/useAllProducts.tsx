import ProductService from "@/services/productService";
import { useProductsStore } from "@/stores/products.store";
import { Product } from "@/types/products.type";
import { useEffect, useState } from "react";

export default function useAllProducts() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { allProducts, addProducts, addCategories } = useProductsStore();

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const allProducts = await ProductService.getAllProducts();
        addProducts(allProducts);
        const categories = new Set<string>(
          allProducts.flatMap((product: Product) => product.category)
        );
        addCategories(Array.from(categories));
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    if (allProducts.length === 0) {
      fetchAllProducts();
    }
  }, [allProducts.length, addProducts, addCategories]);

  return { allProducts, loading, error };
}
