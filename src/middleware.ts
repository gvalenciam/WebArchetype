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
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.nextUrl)
    );
  }
};

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|icons|fonts).*)"],
};
