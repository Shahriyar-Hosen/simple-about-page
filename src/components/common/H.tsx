"use client";

import { IH } from "@/interface";

export const H = ({ variant, children, className }: IH) => {
  switch (variant) {
    case "H1":
      return <h1 className={className}>{children}</h1>;
    case "H2":
      return <h2 className={className}>{children}</h2>;
    case "H3":
      return <h3 className={className}>{children}</h3>;
    case "H4":
      return <h4 className={className}>{children}</h4>;
    case "H5":
      return <h5 className={className}>{children}</h5>;

    default:
      return <h6 className={className}>{children}</h6>;
  }
};
