import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMTProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMT: FC<ContainerMTProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginTop className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMT;
