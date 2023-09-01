import Button from "@/components/Button/Button";
import ContainerMargin from "@/components/Container/Margin/ContainerMargin";
import Label from "@/components/Label/Label";
import { FC } from "react";

interface pageProps {}

export const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContainerMargin className="fccc">
        <h1 className="h30 text-txt">Heading</h1>
        <p className="tr10 text-subtxt">Subtext</p>
        <Button style="primary" text="Boton"></Button>
        <Label text="Label" format="text" className="tb20"></Label>
      </ContainerMargin>
    </>
  );
};

export default page;
