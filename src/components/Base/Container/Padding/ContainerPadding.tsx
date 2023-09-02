import React, { FC } from "react";
import BaseContainer from "../BaseContainer";

interface ContainerPaddingProps extends React.ComponentPropsWithoutRef<"div"> {}

export const ContainerPadding: FC<ContainerPaddingProps> = ({
  children,
  className,
}) => {
  return (
    <BaseContainer withPaddingX withPaddingY className={className}>
      {children}
    </BaseContainer>
  );
};

export default ContainerPadding;
