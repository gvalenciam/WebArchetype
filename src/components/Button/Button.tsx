import { FC } from "react";
import BaseButton, { BaseButtonProps, ButtonStyle } from "./BaseButton";

interface ButtonProps extends BaseButtonProps {
  text: string;
  style?: ButtonStyle;
  withRoundCorners?: boolean;
  withShadow?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  style,
  withRoundCorners,
  withShadow,
  didTap,
}) => {
  return (
    <>
      <BaseButton
        text={text}
        didTap={didTap}
        styleProps={{
          style: style,
          withRoundCorners: withRoundCorners,
          withShadow: withShadow,
        }}
      ></BaseButton>
    </>
  );
};

export default Button;
