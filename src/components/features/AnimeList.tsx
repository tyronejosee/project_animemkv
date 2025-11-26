import type { Anime } from "@/types";
import { AnimeCard } from "./AnimeCard";

interface AnimeListProps {
  animes: Anime[];
  title?: string;
}

export function AnimeList({ animes, title }: AnimeListProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
