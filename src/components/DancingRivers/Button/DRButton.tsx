import BaseButton, {
  BaseButtonProps,
} from "@/components/Base/Button/BaseButton";
import { FC } from "react";

interface DRButtonProps extends BaseButtonProps {}

export const DRButton: FC<DRButtonProps> = ({
  text,
  styleProps,
  onClick,
  href,
  iconPreSrc,
  iconPostSrc,
}) => {
  return (
    <BaseButton
      text={text}
      styleProps={styleProps}
      onClick={onClick}
      href={href}
      iconPreSrc={iconPreSrc}
      iconPostSrc={iconPostSrc}
    ></BaseButton>
  );
};

export default DRButton;
