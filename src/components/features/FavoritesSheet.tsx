"use client";

import { Heart, Star, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useFavoriteStore } from "@/stores/useFavoriteStore";

interface FavoritesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FavoritesSheet({ open, onOpenChange }: FavoritesSheetProps) {
  const [mounted, setMounted] = useState(false);
  const { favorites, removeFavorite } = useFavoriteStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
            Mi Lista
          </SheetTitle>

          <SheetDescription>
            {mounted && favorites.length > 0
              ? `${favorites.length} anime${favorites.length === 1 ? "" : "s"} en tu lista`
              : "No tienes animes en tu lista"}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-2 p-2 overflow-y-auto h-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {!mounted || favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 mx-auto text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">Tu lista está vacía</p>
              <p className="text-sm text-muted-foreground/70">
                Busca animes y agrégalos a tu lista
              </p>
            </div>
          ) : (
            favorites.map((anime) => (
              <div
                key={anime.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Link
                  href={`/anime/${anime.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="shrink-0"
                >
                  <img
                    src={anime.coverImage}
                    alt={anime.title}
                    className="w-16 h-24 object-cover rounded-md"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/anime/${anime.slug}`}
                    onClick={() => onOpenChange(false)}
                  >
                    <h3 className="font-medium truncate hover:text-primary transition-colors">
                      {anime.title}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm text-muted-foreground">
                      {anime.rating}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-muted-foreground hover:text-destructive"
                  onClick={() => removeFavorite(anime.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
