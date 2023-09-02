import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMXProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMX: FC<ContainerMXProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginX className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMX;
