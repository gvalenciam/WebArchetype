import { FC } from "react";
import Image from "next/image";

export interface ImageCircleIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  backgroundColor?: string;
  alt: string;
}

export const ImageCircleIcon: FC<ImageCircleIconProps> = ({
  src,
  backgroundColor,
  alt,
  className,
}) => {
  return (
    <div
      className={`fcc ${className} rounded-full ${
        backgroundColor
          ? undefined
          : `bg-gradient-to-r from-btnGradientStart to-btnGradientEnd`
      }`}
      style={{
        backgroundColor: `${backgroundColor ? backgroundColor : undefined}`,
      }}
    >
      {src ? (
        <Image
          src={src}
          width={0}
          height={0}
          className="fcc"
          style={{ width: "100%", height: "auto" }}
          alt={alt}
        ></Image>
      ) : null}
    </div>
  );
};

export default ImageCircleIcon;
