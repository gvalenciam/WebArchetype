"use client";

import Image from "next/image";
import { FC } from "react";
import BaseLabel from "@/components/Base/Label/BaseLabel";

interface LanguageToggleProps {
  imageClassName?: string;
  language: string;
}

enum Locales {
  english = "en",
  spanish = "es",
}

const isLanguageEN = (language: string): boolean => {
  return language === Locales.english;
};

export const LanguageToggle: FC<LanguageToggleProps> = ({
  language,
  imageClassName,
}) => {
  const isEnglish = isLanguageEN(language);

  return (
    <div className="fcc gap-5">
      {/****** Globe Image ******/}
      <Image
        src="/icons/globe.svg"
        width={0}
        height={0}
        style={{ height: "auto" }}
        className={imageClassName}
        alt="globe icon"
      ></Image>
      {/****** Language options ******/}
      <div className="fcc gap-2 main-heading-font text-[18px]">
        <BaseLabel
          text="EN"
          className={`${
            isEnglish
              ? "font-bold text-white"
              : "font-normal text-textWhiteLight"
          }`}
          format="text"
        ></BaseLabel>
        <BaseLabel text="|"></BaseLabel>
        <BaseLabel
          text="ES"
          className={`${
            isEnglish
              ? "font-normal text-textWhiteLight"
              : "font-bold text-white"
          }`}
          format="text"
        ></BaseLabel>
      </div>
    </div>
  );
};

export default LanguageToggle;
