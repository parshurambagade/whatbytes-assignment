import ProductService from "@/services/productService";
import { Product } from "@/types/products.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
        console.error("Failed to fetch product details:", error);
        const errorMessage = "Failed to fetch product details";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return { productDetails, loading, error };
}
