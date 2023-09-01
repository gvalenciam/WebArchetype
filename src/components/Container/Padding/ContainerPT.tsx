import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPTProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPT: FC<ContainerPTProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingTop className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPT;
