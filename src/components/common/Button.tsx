"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IButton } from "@/interface";

export const Button: FC<IButton> = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
}) => {
  const btnVariant =
    (variant === "primary" &&
      "bg-transparent hover:bg-secondary px-7 py-3 border border-white rounded-md") ||
    (variant === "secondary" &&
      "px-3 py-1.5 bg-accent hover:bg-primary rounded") ||
    (variant === "accent" &&
      "px-2 py-1 bg-secondary hover:bg-primary rounded font-medium");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        `text-sm text-white text-center font-sora font-semibold transition-all delay-75 ${btnVariant}`,
        className
      )}
    >
      {children}
    </button>
  );
};
