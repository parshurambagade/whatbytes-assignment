import ProductService from "@/services/productService";
import { Product } from "@/types/products.type";
import { useEffect, useState } from "react";

export default function useProductDetails(productId: string) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const product = await ProductService.getProductById(productId);
        setProductDetails(product);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return { productDetails, loading, error };
}
