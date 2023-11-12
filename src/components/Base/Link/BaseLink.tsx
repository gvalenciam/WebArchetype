import { FC } from "react";
import Link from "next/link";

type NavigationType = "internal" | "external";

interface BaseLinkProps extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
  href: string;
  navigation: NavigationType;
}

const baseClassName =
  "text-txt tt10 underline underline-offset-4 decoration-txt/90 opacity-90";

export const BaseLink: FC<BaseLinkProps> = ({
  text,
  href,
  navigation,
  className,
}) => {
  return navigation === "internal" ? (
    <Link href={href}>
      <span
        className={`${
          className ? `${className} ${baseClassName}` : baseClassName
        }`}
      >
        {text}
      </span>
    </Link>
  ) : (
    <a href={href} target="_blank">
      <span
        className={`${
          className ? `${className} ${baseClassName}` : baseClassName
        }`}
      >
        {text}
      </span>
    </a>
  );
};

export default BaseLink;
