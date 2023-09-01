import { FC } from "react";
import BaseLabel, { BaseLabelProps, LabelFormat } from "./BaseLabel";

interface LabelProps extends BaseLabelProps {
  text: string;
  format?: LabelFormat;
}

export const Label: FC<LabelProps> = ({ text, format, className }) => {
  return (
    <BaseLabel text={text} format={format} className={className}></BaseLabel>
  );
};

export default Label;
