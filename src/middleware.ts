import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "es"];
export let defaultLocale = "en";

const getLocale = (request: Request): string => {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");

  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }

  const headersObject = Object.fromEntries(headers.entries());
  // const languages = new Negotiator({ headers: headersObject }).languages();
  return match([], locales, defaultLocale);
};

export const middleware = (request: NextRequest) => {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}/${pathname}`;
  return Response.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|icons|fonts).*)"],
};
