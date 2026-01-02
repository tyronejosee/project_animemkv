"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { locales, type Locale } from "@/i18n/config";
import { routeMap } from "@/i18n/routes";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "compact" | "full";
  className?: string;
  onLanguageChange?: () => void;
}

export function LanguageSwitcher({
  variant = "compact",
  className,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = params.locale as Locale;

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0) {
      segments[0] = newLocale;

      for (let i = 1; i < segments.length; i++) {
        const segment = segments[i];
        for (const key in routeMap) {
          const routes = routeMap[key as keyof typeof routeMap];
          if (routes[locale] === segment) {
            segments[i] = routes[newLocale];
            break;
          }
        }
      }
    }

    router.push("/" + segments.join("/"));
    onLanguageChange?.();
  };

  return (
    <ButtonGroup
      className={cn(
        variant === "full" ? "w-full" : "hidden sm:inline-flex",
        className
      )}
    >
      {locales.map((l) => (
        <Button
          key={l}
          variant={locale === l ? "secondary" : "ghost"}
          size={variant === "compact" ? "sm" : "default"}
          className={cn(
            "rounded-none first:rounded-l-[calc(var(--radius)-1px)] last:rounded-r-[calc(var(--radius)-1px)]",
            variant === "compact" ? "h-9 px-3" : "flex-1 h-11",
            locale === l
              ? "bg-secondary font-bold text-foreground"
              : "text-muted-foreground hover:bg-accent"
          )}
          onClick={() => handleLanguageChange(l)}
        >
          {variant === "compact"
            ? l.toUpperCase()
            : l === "es"
            ? "Español"
            : "English"}
        </Button>
      ))}
    </ButtonGroup>
  );
}
