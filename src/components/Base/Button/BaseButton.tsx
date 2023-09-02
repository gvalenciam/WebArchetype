import Link from "next/link";
import Image from "next/image";
import style from "@/components/Base/Button/BaseButton.module.css";
import React, { ReactNode } from "react";

import { FC } from "react";

type StyleDict = { [key: string]: string };
export type ButtonStyle = "primary" | "secondary" | "action" | "gradient";

interface BaseButtonStyleProps {
  withRoundCorners?: boolean;
  withShadow?: boolean;
  style?: ButtonStyle;
}

export interface BaseButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  styleProps?: BaseButtonStyleProps;
  href?: string;
  iconPreSrc?: string;
  iconPostSrc?: string;
}

const setStylesWithProps = (
  props: BaseButtonStyleProps,
  styleDict: StyleDict
): string => {
  var styleArray: string[] = [];
  if (props.withRoundCorners) {
    styleArray.push("btnRounded");
  }
  if (props.withShadow) {
    styleArray.push("btnShadow");
  }
  switch (props.style) {
    case "primary":
      styleArray.push("btnPrimary");
      break;
    case "secondary":
      styleArray.push("btnSecondary");
      break;
    case "action":
      styleArray.push("btnAction");
    case "gradient":
      styleArray.push("btnGradient");
    default:
      styleArray.push("btnPrimary");
      break;
  }
  return mapStyleDictToString(styleDict, styleArray);
};

const mapStyleDictToString = (
  styleDict: StyleDict,
  styleArray: string[]
): string => {
  var styleKeys = styleArray.map((styleString) => {
    if (styleDict[styleString]) {
      return styleDict[styleString];
    }
  });
  return styleKeys.join(" ");
};

const buildChildren = (
  text: string,
  iconPreSrc?: string,
  iconPostSrc?: string
): ReactNode => {
  return (
    <>
      {iconPreSrc && (
        <Image
          src={iconPreSrc}
          height={30}
          width={30}
          style={{ objectFit: "contain" }}
          alt="pre icon"
        ></Image>
      )}
      {text}
      {iconPostSrc && (
        <Image
          src={iconPostSrc}
          className={"eml"}
          height={30}
          width={30}
          style={{ objectFit: "contain" }}
          alt="post icon"
        ></Image>
      )}
    </>
  );
};

export const BaseButton: FC<BaseButtonProps> = ({
  text,
  styleProps,
  className,
  onClick,
  href,
  iconPreSrc,
  iconPostSrc,
}) => {
  return href ? (
    <Link
      href={href}
      className={`tb40 fbc ${style.button} ${setStylesWithProps(
        styleProps ?? {},
        style
      )} ${className}`}
    >
      {buildChildren(text, iconPreSrc, iconPostSrc)}
    </Link>
  ) : (
    <div
      className={`tb40 fbc ${style.button} ${setStylesWithProps(
        styleProps ?? {},
        style
      )} ${className}`}
      onClick={onClick}
    >
      {buildChildren(text, iconPreSrc, iconPostSrc)}
    </div>
  );
};

export default BaseButton;
