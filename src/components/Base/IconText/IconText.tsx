import Image from "next/image";
import { FC } from "react";
import BaseLabel from "../Label/BaseLabel";

interface IconTextProps {
  src: string;
  imageClassName?: string;
  text: string;
  textClassName?: string;
  alt: string;
}

export const IconText: FC<IconTextProps> = ({
  src,
  imageClassName,
  text,
  textClassName,
  alt,
}) => {
  return (
    <div className="fsc gap-5">
      <Image
        src={src}
        width={0}
        height={0}
        style={{ height: "auto" }}
        className={imageClassName}
        alt={alt}
      ></Image>
      <BaseLabel
        text={text}
        className={textClassName}
        format="text"
      ></BaseLabel>
    </div>
  );
};

export default IconText;
