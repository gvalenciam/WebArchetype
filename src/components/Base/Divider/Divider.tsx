import { FC } from "react";

interface DividerProps {
  opacity?: number;
  width?: number;
}

export const Divider: FC<DividerProps> = ({ opacity, width }) => {
  return (
    <div
      className="bg-black h-[1px]"
      style={{
        opacity: `${opacity ? opacity : 20}%`,
        width: `${width ? width : 100}%`,
      }}
    ></div>
  );
};

export default Divider;
