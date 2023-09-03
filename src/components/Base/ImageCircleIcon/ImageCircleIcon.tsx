import { FC } from "react";
import Image from "next/image";

export interface ImageCircleIconProps {
  src?: string;
  backgroundColor?: string;
  alt: string;
}

export const ImageCircleIcon: FC<ImageCircleIconProps> = ({
  src,
  backgroundColor,
  alt,
}) => {
  return (
    <div
      className={`fcc w-[135px] h-[135px] p-8 rounded-full ${
        backgroundColor
          ? undefined
          : `bg-gradient-to-r from-btnGradientStart to-btnGradientEnd`
      } }`}
      style={{
        backgroundColor: `${backgroundColor ? backgroundColor : undefined}`,
      }}
    >
      {src ? (
        <Image
          src={src}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          alt={alt}
        ></Image>
      ) : null}
    </div>
  );
};

export default ImageCircleIcon;
