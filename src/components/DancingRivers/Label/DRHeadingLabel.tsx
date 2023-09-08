import BaseLabel, { BaseLabelProps } from "@/components/Base/Label/BaseLabel";
import { LinearGradient } from "react-text-gradients";
import style from "@/components/DancingRivers/Label/DRHeadingLabel.module.css";
import theme from "@/utils/themeUtils";
import { FC } from "react";

interface DRHeadingLabelProps extends BaseLabelProps {
  gradientText: string;
  gradientStartColor?: string;
  gradientEndColor?: string;
}

export const DRHeadingLabel: FC<DRHeadingLabelProps> = ({
  text,
  gradientText,
  gradientStartColor,
  gradientEndColor,
  className,
}) => {
  return (
    <BaseLabel
      text={text}
      format="heading1"
      className={`h40 leading-tight ${style.h1Label} ${className}`}
    >
      <LinearGradient
        gradient={[
          "to right",
          `${
            gradientStartColor
              ? gradientStartColor
              : theme.colors.btnGradientStart
          }, ${
            gradientEndColor ? gradientEndColor : theme.colors.btnGradientEnd
          }`,
        ]}
      >
        {gradientText}
      </LinearGradient>
    </BaseLabel>
  );
};

export default DRHeadingLabel;
