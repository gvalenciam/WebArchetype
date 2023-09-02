import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerMLProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerML: FC<ContainerMLProps> = ({ children, className }) => {
  return (
    <BaseContainer withMarginLeft className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerML;
