import React from "react";
import DRFooter from "@/components/DancingRivers/Layout/DRFooter";
import "../globals.css";
import { defaultLocale } from "../../middleware";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <html lang={params.lang ?? defaultLocale}>
        <body>
          {children}
          <DRFooter language={params.lang ?? defaultLocale}></DRFooter>
        </body>
      </html>
    </>
  );
}
