import Image from "next/image";
import { FC } from "react";
import BaseLabel from "../Label/BaseLabel";

interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  imageContainerClassName: string;
  imageClassName?: string;
  text: string;
  textClassName?: string;
  alt: string;
  iconOnClick?: () => void;
  containerOnClick?: () => void;
}

export const IconText: FC<IconTextProps> = ({
  src,
  imageContainerClassName,
  imageClassName,
  text,
  textClassName,
  alt,
  className,
  iconOnClick,
  containerOnClick,
}) => {
  return (
    <div className={`fsc gap-5 ${className}`} onClick={containerOnClick}>
      <div className={imageContainerClassName} onClick={iconOnClick}>
        <Image
          src={src}
          width={0}
          height={0}
          style={{ height: "auto" }}
          className={`${imageClassName ? imageClassName : "w-3 h-3"}`}
          alt={alt}
        ></Image>
      </div>
      <BaseLabel
        text={text}
        className={textClassName}
        format="text"
      ></BaseLabel>
    </div>
  );
};

export default IconText;
