import { PropsWithChildren } from "react";
import { IColor, IText } from "./common";

export interface IClassName {
  className?: string;
}

export interface IChildrenWithClassName extends PropsWithChildren, IClassName {}

export interface IChildrenWithTitle extends IChildrenWithClassName {
  title: string;
  icon?: boolean;
  time?: boolean;
}

export interface ISlugParams {
  params: {
    slug: string;
  };
}
export interface IIdParams {
  params: {
    id: string;
  };
}

export interface ISlugId extends ISlugParams {
  params: {
    slug: string;
    id: string;
  };
}

export interface ITitleVariant {
  variant: "H1" | "H2" | "H3" | "H4" | "H5";
}

export interface ITitle extends IChildrenWithClassName, ITitleVariant {
  color?: IColor;
}

export interface IH extends IChildrenWithClassName, ITitleVariant {}

export interface ICommonText extends IChildrenWithClassName {}

export interface ILabelText extends IText, IChildrenWithClassName {
  color?: IColor;
  uppercase?: boolean;
}

export interface ICTA extends IChildrenWithClassName {}

export interface IButton extends IChildrenWithClassName {
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "accent";
}

export interface ILinkButton extends IButton {
  href: string;
}

export interface IBgContainer
  extends IChildrenWithClassName,
    IBackgroundImage {}

export interface IBackgroundImage extends IChildrenWithClassName {
  img: StaticImageData;
  mobImg?: StaticImageData;
  overflow?: boolean;
  overlay?: boolean;
}

export interface IAbsoluteImg extends IClassName {
  img: StaticImageData;
  alt?: string;
  width?: string;
  zIndex?: string;
}

export interface ILinkImage extends IClassName {
  href: string;
  src: StaticImageData;
  alt: string;
}
