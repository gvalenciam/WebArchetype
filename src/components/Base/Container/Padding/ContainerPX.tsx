import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPXProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPX: FC<ContainerPXProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingX className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPX;
