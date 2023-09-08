import { FC } from "react";
import ContainerPadding from "@/components/Base/Container/Padding/ContainerPadding";
import BaseLabel from "@/components/Base/Label/BaseLabel";
import { pageProps } from "../page";

interface HomePageProps extends pageProps {}

export const HomePage: FC<HomePageProps> = ({ params }) => {
  return (
    <>
      <ContainerPadding className="relative">
        <BaseLabel
          text={`Hello World! ${params.lang}`}
          format="text"
        ></BaseLabel>
      </ContainerPadding>
    </>
  );
};

export default HomePage;
