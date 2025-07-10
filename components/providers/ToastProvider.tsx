"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "white",
          color: "#1F2937",
          marginTop: "4rem",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        success: {
          iconTheme: {
            primary: "#0057D9",
            secondary: "white",
          },
        },
        error: {
          iconTheme: {
            primary: "#DC2626",
            secondary: "white",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
