import HomePage from "./Home/page";
import { FC } from "react";

export interface pageProps {
  params: { lang: string };
}

export const page: FC<pageProps> = ({ params }) => {
  return <HomePage params={params}></HomePage>;
};

export default page;
