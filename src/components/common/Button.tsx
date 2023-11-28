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
    (variant === "primary" && "") ||
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
        `text-sm text-white text-center font-sora font-semibold transition-all delay-75 ${btnVariant}
        bg-[#1d5dd7] hover:bg-[#1d4fd7] px-10 py-2 white rounded-md
        `,
        className
      )}
    >
      {children}
    </button>
  );
};
