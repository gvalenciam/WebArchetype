import { FC } from "react";
import BaseButton, {
  BaseButtonProps,
} from "@/components/Base/Button/BaseButton";

interface DRButtonLinkProps extends BaseButtonProps {}

export const DRButtonLink: FC<DRButtonLinkProps> = ({ text, href }) => {
  return (
    <BaseButton
      text={text}
      href={href}
      iconPostSrc="/icons/buttonArrow.svg"
      styleProps={{ style: "gradient", withRoundCorners: true }}
    ></BaseButton>
  );
};

export default DRButtonLink;
