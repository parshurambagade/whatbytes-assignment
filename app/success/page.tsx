"use client";

import { useEffect, useRef, useState } from "react";
import { HashLoader, PropagateLoader } from "react-spinners";
import { useCartStore } from "@/stores/cart.store";
import { useRouter } from "next/navigation";

const Success = () => {
  const [loading, setLoading] = useState<boolean>(true);
  // prevent two times cart clear
  const isInitialRender = useRef(true);
  const { clearCart } = useCartStore();
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear cart only on initial render
    if (isInitialRender.current) {
      isInitialRender.current = false;
      setTimeout(() => {
        clearCart();
        router.push("/");
      }, 7000);
      return;
    }
  }, [clearCart, router]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
      {loading ? (
        <PropagateLoader color="#0557a7" />
      ) : (
        <div className="text-center flex items-center justify-center flex-col">
          <HashLoader color="#0557a7" />
          <h1 className="font-bold text-3xl mb-4 mt-6">Order Successful!</h1>
          <p className="text-gray-600">
            Your order has been placed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
