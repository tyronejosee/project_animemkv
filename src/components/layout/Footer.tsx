import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold tracking-tight">
              Anime Online
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ningún vídeo se encuentra alojado en nuestros servidores.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">Información</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/terminos-y-condiciones"
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/politica-de-privacidad"
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                Política de Privacidad
              </Link>
              <Link
                href="/sobre-animeflv"
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                )}
              >
                Sobre AnimeFLV
              </Link>
            </nav>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium">Síguenos</h4>
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
            © {new Date().getFullYear()} Anime Online. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
