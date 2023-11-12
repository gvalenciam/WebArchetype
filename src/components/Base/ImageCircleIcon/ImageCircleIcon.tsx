import { FC } from "react";
import Image from "next/image";

export interface ImageCircleIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  backgroundColor?: string;
  alt: string;
  imageContainerClassName?: string;
  imageClassName?: string;
}

export const ImageCircleIcon: FC<ImageCircleIconProps> = ({
  src,
  backgroundColor,
  alt,
  imageContainerClassName,
  imageClassName,
  className,
  onClick,
}) => {
  return (
    <div
      className={`fcc ${className} rounded-full ${
        backgroundColor !== ""
          ? undefined
          : `bg-gradient-to-r from-btnGradientStart to-btnGradientEnd`
      }`}
      style={{
        backgroundColor: `${
          backgroundColor !== "" ? backgroundColor : undefined
        }`,
      }}
      onClick={onClick}
    >
      {src ? (
        <div className={imageContainerClassName}>
          <Image
            src={src}
            width={0}
            height={0}
            className={`fcc ${imageClassName}`}
            style={{ width: "100%", height: "auto" }}
            alt={alt}
          ></Image>
        </div>
      ) : null}
    </div>
  );
};

export default ImageCircleIcon;
