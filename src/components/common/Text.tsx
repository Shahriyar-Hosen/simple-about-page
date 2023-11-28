"use client";

import { FC } from "react";

import { ICommonText } from "@/interface";
import { cn } from "@/utils";

export const Text: FC<ICommonText> = ({ children, className }) => (
  <p className={cn("text-black text-sm font-normal", className)}>{children}</p>
);
