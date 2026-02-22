"use client";

import { Play, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useFavoriteStore } from "@/stores/useFavoriteStore";
import type { Anime } from "@/types";

interface AnimeActionsProps {
  anime: Anime;
}

export function AnimeActions({ anime }: AnimeActionsProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { isFavorite, toggleFavorite } = useFavoriteStore();
  const isInList = isFavorite(anime.id);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-3">
        <Button
          className="w-full gap-2 bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          size="lg"
        >
          <Play className="w-5 h-5 fill-current" />
          VER AHORA
        </Button>

        <Button
          variant="outline"
          className="w-full gap-2 transition-all hover:bg-accent hover:text-accent-foreground"
          size="lg"
          disabled
        >
          <Star className="w-5 h-5" />
          AGREGAR A LISTA
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button
        className="w-full gap-2 bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        size="lg"
      >
        <Play className="w-5 h-5 fill-current" />
        VER AHORA
      </Button>

      <Button
        variant={isInList ? "default" : "outline"}
        className={`w-full gap-2 transition-all ${isInList ? "bg-red-500 hover:bg-red-600" : "hover:bg-accent hover:text-accent-foreground"}`}
        size="lg"
        onClick={() => toggleFavorite(anime)}
      >
        <Star className={`w-5 h-5 ${isInList ? "fill-current" : ""}`} />
        {isInList ? "EN MI LISTA" : "AGREGAR A LISTA"}
      </Button>
    </div>
  );
}
