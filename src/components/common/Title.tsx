"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ITitle } from "@/interface";
import { H } from "./H";

export const Title: FC<ITitle> = ({ children, className, variant }) => {
  const h1 = "text-[38px] lg:text-[58px] leading-[44px] lg:leading-[60px]";
  const h2 = "text-[28px] lg:text-[40px] leading-[34px] lg:leading-[50px]";
  const h3 = `text-[24px] lg:text-[28px] leading-[30px] lg:leading-[48px]`;
  const h4 = `text-[20px] lg:text-[25px] leading-[26px] lg:leading-[36px]`;
  const h5 = "text-[16px] lg:text-[18px] leading-[20px] lg:leading-[26px]";

  const titleVariant =
    (variant === "H1" && h1) ||
    (variant === "H2" && h2) ||
    (variant === "H3" && h3) ||
    (variant === "H4" && h4) ||
    (variant === "H5" && h5);

  return (
    <H
      variant={variant}
      className={twMerge(`font-medium text-center ${titleVariant}`, className)}
    >
      {children}
    </H>
  );
};
