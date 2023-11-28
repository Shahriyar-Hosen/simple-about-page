"use client";

import { ILinkButton } from "@/interface";
import Link from "next/link";
import { FC } from "react";
import { Button } from ".";

export const LinkButton: FC<ILinkButton> = ({
  href,
  children,
  ...btnProps
}) => (
  <Link href={href}>
    <Button {...btnProps}>{children}</Button>
  </Link>
);
