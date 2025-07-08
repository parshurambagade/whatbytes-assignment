import ProductService from "@/services/productService";
import { useProductsStore } from "@/stores/products.store";
import { useEffect, useState } from "react";

export default function useAllProducts() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { allProducts, addProducts } = useProductsStore();

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const allProducts = await ProductService.getAllProducts();
        addProducts(allProducts);
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
  }, [allProducts.length, addProducts]);

  return { allProducts, loading, error };
}
