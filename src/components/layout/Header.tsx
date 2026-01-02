"use client";

import { Languages, Menu, Moon, Search, Sun, User, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { SearchModal } from "@/components/features/SearchModal";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { routeMap } from "@/i18n/routes";

interface HeaderProps {
  dictionary: any; // Using any for simplicity or I could define the full type
}

export function Header({ dictionary }: HeaderProps) {
  const dict = dictionary.header;
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const params = useParams();
  const locale = params.locale as Locale;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href={`/${locale}`}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <div className="text-2xl font-bold bg-linear-to-r from-primary to-primary bg-clip-text text-transparent">
                anime
              </div>
              <div className="text-2xl font-bold text-foreground">mkv</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href={`/${locale}/${routeMap.directory[locale]}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {dict.directory}
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="relative hidden sm:flex items-center w-64 h-9 px-3 text-sm text-muted-foreground bg-muted/50 border border-input rounded-md hover:bg-muted transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              <span>{dict.searchPlaceholder}</span>
              <kbd className="pointer-events-none absolute right-2 top-[50%] -translate-y-[50%] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Language Selection Group */}
            <LanguageSwitcher variant="compact" />

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Login Button */}
            <Link href={`/${locale}/${routeMap.login[locale]}`}>
              <Button variant="default" size="sm" className="h-9 gap-2">
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">{dict.login}</span>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Menu */}
            <div className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden bg-background border-t border-border/40 animate-in slide-in-from-top-2 h-screen">
              <nav className="flex flex-col gap-6 p-6 h-full overflow-y-auto">
                <Link
                  href={`/${locale}`}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dict.home}
                </Link>
                <Link
                  href={`/${locale}/${routeMap.directory[locale]}`}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dict.directory}
                </Link>

                <div className="mt-auto pt-6 mb-20 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-muted-foreground">
                    <Languages className="w-4 h-4" />
                    <span>
                      {locale === "es"
                        ? "Seleccionar idioma"
                        : "Select language"}
                    </span>
                  </div>
                  <LanguageSwitcher
                    variant="full"
                    onLanguageChange={() => setMobileMenuOpen(false)}
                  />
                </div>
              </nav>
            </div>
          </>
        )}
      </header>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        locale={locale}
        dict={{
          ...dictionary.search,
          statusMap: dictionary.animeDetails.statusMap,
          typeMap: dictionary.animeDetails.typeMap,
        }}
      />
    </>
  );
}
