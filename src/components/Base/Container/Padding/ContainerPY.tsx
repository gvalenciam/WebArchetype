import { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPYProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPY: FC<ContainerPYProps> = ({ children, className }) => {
  return (
    <BaseContainer withPaddingY className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPY;
