import MainPage from "./main/page";
import { FC } from "react";

export interface pageProps {
  params: { lang: string };
}

export const page: FC<pageProps> = ({ params }) => {
  return <MainPage params={params}></MainPage>;
};

export default page;
