"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({
  text = "Back",
  className = "",
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-200 font-medium ${className}`}
    >
      <ArrowLeft size={20} />
      <span>{text}</span>
    </button>
  );
};

export default BackButton;
