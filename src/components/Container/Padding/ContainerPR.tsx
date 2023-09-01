import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPRProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPR: FC<ContainerPRProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingRight className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPR;
