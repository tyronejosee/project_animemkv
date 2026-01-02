import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

import { Locale } from "@/i18n/config";
import { routeMap } from "@/i18n/routes";
import { cn } from "@/lib/utils";

interface FooterProps {
  dictionary: {
    brandTitle: string;
    disclaimer: string;
    infoTitle: string;
    terms: string;
    privacy: string;
    about: string;
    followUs: string;
    rightsReserved: string;
  };
  locale: Locale;
}

export function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold tracking-tight">
              {dictionary.brandTitle}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {dictionary.disclaimer}
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">{dictionary.infoTitle}</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href={`/${locale}/${routeMap.terms[locale]}`}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                {dictionary.terms}
              </Link>
              <Link
                href={`/${locale}/${routeMap.privacy[locale]}`}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                {dictionary.privacy}
              </Link>
              <Link
                href={`/${locale}/sobre-animemkv`}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                {dictionary.about}
              </Link>
            </nav>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">{dictionary.followUs}</h4>
            <div className="flex gap-2">
              <a
                href="#"
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "h-9 w-9 bg-muted text-muted-foreground",
                  "transition-colors hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "h-9 w-9 bg-muted text-muted-foreground",
                  "transition-colors hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "h-9 w-9 bg-muted text-muted-foreground",
                  "transition-colors hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "h-9 w-9 bg-muted text-muted-foreground",
                  "transition-colors hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {dictionary.brandTitle}.{" "}
            {dictionary.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
