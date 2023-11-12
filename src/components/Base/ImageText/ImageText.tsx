import BaseLabel from "../Label/BaseLabel";
import Image from "next/image";
import { FC } from "react";

interface ImageTextProps extends React.HTMLAttributes<HTMLDivElement> {
  imageWidth?: number;
  imageWidthPercentage?: number;
  text?: string;
  src: string;
  imageClassName?: string;
  priority?: boolean;
  minWidthPX?: number;
}

export const ImageText: FC<ImageTextProps> = ({
  imageWidth,
  imageWidthPercentage,
  text,
  src,
  imageClassName,
  className,
  priority,
  minWidthPX,
}) => {
  return (
    <div className={`${className} w-full ${text ? `fccc gap-2` : ""}`}>
      <div className={`fcc ${imageClassName} w-full`}>
        <Image
          src={src}
          width={imageWidth ? imageWidth : 0}
          height={0}
          style={{
            width: `${
              imageWidth
                ? `${
                    imageWidth *
                    (imageWidthPercentage ? imageWidthPercentage / 100 : 1)
                  }px`
                : "auto"
            }`,
            minWidth: `${
              minWidthPX
                ? `${
                    minWidthPX *
                    (imageWidthPercentage ? imageWidthPercentage / 100 : 1)
                  }px`
                : "auto"
            }`,
            minHeight: "auto",
          }}
          alt={text ? text : ""}
          priority={priority}
        ></Image>
      </div>
      {text ? (
        <BaseLabel
          text={text}
          className="tl10 opacity-60 text-center"
          style={{
            width: `${
              imageWidth
                ? `${
                    imageWidth *
                    (imageWidthPercentage ? imageWidthPercentage / 100 : 1)
                  }px`
                : "auto"
            }`,
          }}
        ></BaseLabel>
      ) : null}
    </div>
  );
};

export default ImageText;
