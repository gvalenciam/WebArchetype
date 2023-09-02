import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMarginProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMargin: FC<ContainerMarginProps> = ({
  children,
  className,
}) => {
  return (
    <BaseContainer withMarginX withMarginY className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMargin;
