import { FC } from "react";
import BaseLabel, { BaseLabelProps } from "@/components/Base/Label/BaseLabel";

interface DRTextLabelProps extends BaseLabelProps {}

export const DRTextLabel: FC<DRTextLabelProps> = ({
  text,
  className,
  children,
}) => {
  return (
    <BaseLabel
      text={text}
      format="text"
      className={`tt10 opacity-90 leading-10 ${className}`}
    >
      {children}
    </BaseLabel>
  );
};

export default DRTextLabel;
