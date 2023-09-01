import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMBProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMB: FC<ContainerMBProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginBottom className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMB;
