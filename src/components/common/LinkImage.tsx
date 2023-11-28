"use client";

import { ILinkImage } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const LinkImage: FC<ILinkImage> = ({ href, src, alt, className }) => (
  <Link href={href}>
    <Image src={src} className={className} alt={alt} />
  </Link>
);
