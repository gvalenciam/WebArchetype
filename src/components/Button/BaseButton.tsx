import style from "@/components/Button/BaseButton.module.css";
import { MouseEventHandler } from "react";

import { FC } from "react";

type StyleDict = { [key: string]: string };
export type ButtonStyle = "primary" | "secondary" | "action";

interface BaseButtonStyleProps {
  withRoundCorners?: boolean;
  withShadow?: boolean;
  style?: ButtonStyle;
}

export interface BaseButtonProps {
  text: string;
  styleProps?: BaseButtonStyleProps;
  didTap?: MouseEventHandler<HTMLDivElement>;
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

export const BaseButton: FC<BaseButtonProps> = ({
  text,
  didTap,
  styleProps,
}) => {
  return (
    <div
      className={`tl20 ${style.button} ${setStylesWithProps(
        styleProps ?? {},
        style
      )}`}
      onClick={didTap}
    >
      {text}
    </div>
  );
};

export default BaseButton;
