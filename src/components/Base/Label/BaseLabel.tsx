import { FC } from "react";
import style from "@/components/Base/Label/BaseLabel.module.css";

export type LabelFormat =
  | "text"
  | "textClean"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading1Clean";

export interface BaseLabelProps extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
  format?: LabelFormat;
}

export const BaseLabel: FC<BaseLabelProps> = ({
  text,
  format,
  children,
  ...props
}) => {
  switch (format) {
    case "text":
      return (
        <p
          className={`${
            props.className
              ? `${props.className} ${style.txtLabel}`
              : style.txtLabel
          }`}
          style={props.style}
        >
          {text} {children}
        </p>
      );
    case "textClean":
      return (
        <p
          className={`${
            props.className ? `${props.className}` : style.txtLabel
          }`}
          style={props.style}
        >
          {text} {children}
        </p>
      );
    case "heading1":
      return (
        <h1
          className={`${
            props.className
              ? `${props.className} ${style.h1Label}`
              : style.h1Label
          }`}
          style={props.style}
        >
          {text} {children}
        </h1>
      );
    case "heading1Clean":
      return (
        <h1
          className={`${
            props.className ? `${props.className}` : style.h1Label
          }`}
          style={props.style}
        >
          {text} {children}
        </h1>
      );
    case "heading2":
      return (
        <h2
          className={`${
            props.className
              ? `${props.className} ${style.h2Label}`
              : style.h2Label
          }`}
          style={props.style}
        >
          {text} {children}
        </h2>
      );
    case "heading3":
      return (
        <h3
          className={`${
            props.className
              ? `${props.className} ${style.h3Label}`
              : style.h3Label
          }`}
          style={props.style}
        >
          {text} {children}
        </h3>
      );
    default:
      return (
        <p
          className={`${
            props.className
              ? `${props.className} ${style.txtLabel}`
              : style.txtLabel
          }`}
          style={props.style}
        >
          {text} {children}
        </p>
      );
  }
};

export default BaseLabel;
