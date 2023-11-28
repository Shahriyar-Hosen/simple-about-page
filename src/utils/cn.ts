import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type CnInput = string | undefined | null | { [key: string]: boolean };

export const cn = (...inputs: CnInput[]): string => {
  const mergedInputs = twMerge(clsx(inputs));
  return mergedInputs;
};
