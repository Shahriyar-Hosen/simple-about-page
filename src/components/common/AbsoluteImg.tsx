"use client";

import { IAbsoluteImg } from "@/interface";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const AbsoluteImg: FC<IAbsoluteImg> = ({
  img,
  className,
  alt,
  width,
  zIndex = "z-0",
}) => (
  <section
    className={twMerge(`absolute ${width || "w-auto"} ${zIndex}`, className)}
  >
    <Image src={img} className="inset-0" alt={alt || "absolute img"} />
  </section>
);
