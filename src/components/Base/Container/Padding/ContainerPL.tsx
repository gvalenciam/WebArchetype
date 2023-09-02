import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPLProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPL: FC<ContainerPLProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingLeft className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPL;
