import React from "react";
import "../globals.css";
import { defaultLocale } from "@/middleware";

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
          {/****** Footer ******/}
        </body>
      </html>
    </>
  );
}
