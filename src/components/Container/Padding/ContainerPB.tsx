import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPBProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPB: FC<ContainerPBProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingBottom className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPB;
