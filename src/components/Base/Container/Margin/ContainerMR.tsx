import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMRProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerMR: FC<ContainerMRProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginRight className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerMR;
