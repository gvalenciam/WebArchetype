import { LinearGradient } from "react-text-gradients";
import theme from "@/utils/themeUtils";
import { FC } from "react";
import DRTextLabel from "../Label/DRTextLabel";
import DRImageCircleIcon from "../DRImageCircleIcon/DRImageCircleIcon";

interface StatisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  numberText: string;
  circleClassName?: string;
}

export const StatisticCard: FC<StatisticCardProps> = ({
  text,
  numberText,
  className,
  circleClassName,
}) => {
  return (
    <div className={`fccc gap-5 max-w-[235px] ${className} `}>
      {/****** Circle ******/}
      <DRImageCircleIcon
        src="/icons/buttonArrow.svg"
        alt="circle-icon"
        className={circleClassName}
      ></DRImageCircleIcon>
      {/****** Text ******/}
      <DRTextLabel text={text} className="text-center"></DRTextLabel>
      {/****** Number (Gradient) ******/}
      <LinearGradient
        className="h40 -mt-4"
        gradient={[
          "to right",
          `${theme.colors.btnGradientStart}, ${theme.colors.btnGradientEnd}`,
        ]}
      >
        {numberText}
      </LinearGradient>
    </div>
  );
};

export default StatisticCard;
