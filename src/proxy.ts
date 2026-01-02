import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, locales } from "./i18n/config";
import { routeMap } from "./i18n/routes";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  const pathnameParts = pathname.split("/").filter(Boolean);
  const locale = pathnameParts[0] as "en" | "es";

  if (!locales.includes(locale)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  let hasChanges = false;
  for (let i = 1; i < pathnameParts.length; i++) {
    const segment = pathnameParts[i];

    for (const key in routeMap) {
      const routes = routeMap[key as keyof typeof routeMap];
      if (routes[locale] === segment) {
        if (locale !== "es") {
          pathnameParts[i] = routes.es;
          hasChanges = true;
        }
        break;
      }
    }
  }

  if (hasChanges) {
    const newUrl = new URL(request.url);
    newUrl.pathname = "/" + pathnameParts.join("/");
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
