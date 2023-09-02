import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMYProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMY: FC<ContainerMYProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginY className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMY;
