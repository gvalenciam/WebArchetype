import { FC } from "react";
import Image from "next/image";
import ContainerPadding from "../../Base/Container/Padding/ContainerPadding";
import DRImageCircleIcon from "../DRImageCircleIcon/DRImageCircleIcon";
import IconText from "../../Base/IconText/IconText";
import DRTextLabel from "../Label/DRTextLabel";
import BaseContainer from "../../Base/Container/BaseContainer";
import Link from "next/link";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

interface DRFooterProps {
  language: string;
}

export const DRFooter: FC<DRFooterProps> = ({ language }) => {
  return (
    <BaseContainer className="px-[160px] py-[100px] bg-black fbs">
      <div className="fccs gap-16 px-5">
        <Image
          src="/images/DR_Logo_Blanco.svg"
          width={0}
          height={0}
          style={{ width: "80%", height: "auto" }}
          alt="logo-blanco"
        ></Image>
        {/****** Contact Info ******/}
        <div className="fccs gap-9">
          <IconText
            src="/icons/buttonArrow.svg"
            imageClassName="w-7 h-7"
            text="Jr. Medrano Silva 165 Barranco"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/buttonArrow.svg"
            imageClassName="w-7 h-7"
            text="(01) 2305020 Anexo 4295"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/buttonArrow.svg"
            imageClassName="w-7 h-7"
            text="cita.utec.edu.pe"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
          <IconText
            src="/icons/buttonArrow.svg"
            imageClassName="w-7 h-7"
            text="cita@utec.edu.pe"
            textClassName="text-textWhiteLight tt10"
            alt="Address icon"
          ></IconText>
        </div>
        {/****** Copyright ******/}
        <DRTextLabel
          text={`${new Date().getFullYear()}`}
          className="text-textWhiteLight"
        >
          &copy; Centro de Investigación y Tecnología del Agua - UTEC
        </DRTextLabel>
      </div>
      <div className="fcce gap-12">
        {/****** Social ******/}
        <div className="fcc gap-8 py-9">
          <Link href="">
            <DRImageCircleIcon
              src="/icons/buttonArrow.svg"
              backgroundColor="#FFFFFF"
              className="p-2 h-12 w-12"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/buttonArrow.svg"
              backgroundColor="#FFFFFF"
              className="p-2 h-12 w-12"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/buttonArrow.svg"
              backgroundColor="#FFFFFF"
              className="p-2 h-12 w-12"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
          <Link href="">
            <DRImageCircleIcon
              src="/icons/buttonArrow.svg"
              backgroundColor="#FFFFFF"
              className="p-2 h-12 w-12"
              alt="facebook link"
            ></DRImageCircleIcon>
          </Link>
        </div>
        {/****** Language ******/}
        <div>
          <LanguageToggle
            language={language}
            imageClassName="w-9 h-9"
          ></LanguageToggle>
        </div>
      </div>
    </BaseContainer>
  );
};

export default DRFooter;
