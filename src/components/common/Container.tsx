"use client";

import { IChildrenWithClassName } from "@/interface";
import { cn } from "@/utils";

export const Container = ({ children, className }: IChildrenWithClassName) => (
  <div
    className={cn("container w-full px-4 xl:px-8 max-w-7xl mx-auto", className)}
  >
    {children}
  </div>
);
