import { FC } from "react";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseLabel from "@/components/Base/Label/BaseLabel";
import { pageProps } from "../page";

interface MainPageProps extends pageProps {}

export const MainPage: FC<MainPageProps> = ({ params }) => {
  return (
    <>
      <ContainerPadding className="relative">
        <BaseLabel
          text={`Hello World! Language: ${params.lang}`}
          format="text"
        ></BaseLabel>
      </ContainerPadding>
    </>
  );
};

export default MainPage;
