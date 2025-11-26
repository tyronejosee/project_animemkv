import { Star } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Anime } from "@/types";

interface AnimeCardProps {
  anime: Anime;
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.slug}`} className="group">
      <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
        <div className="relative aspect-2/3 overflow-hidden">
          <img
            src={anime.coverImage}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Type badge */}
          <div className="absolute top-2 left-2">
            <Badge
              variant={anime.type === "Anime" ? "default" : "secondary"}
              className="font-bold"
            >
              {anime.type}
            </Badge>
          </div>

          {/* Rating */}
          {anime.rating && (
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold">{anime.rating}</span>
            </div>
          )}

          {/* Status badge at bottom */}
          <div className="absolute bottom-2 left-2">
            <Badge
              variant="outline"
              className={`text-xs ${
                anime.status === "En emision"
                  ? "bg-green-600/90 dark:bg-green-500/90 text-white border-green-600 dark:border-green-500"
                  : anime.status === "Finalizado"
                  ? "bg-muted/90 text-muted-foreground border-muted"
                  : "bg-primary/90 text-primary-foreground border-primary"
              }`}
            >
              {anime.status}
            </Badge>
          </div>
        </div>

        <CardContent className="p-3">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors min-h-10">
            {anime.title}
          </h3>

          {/* Genres */}
          {anime.genres && anime.genres.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {anime.genres.slice(0, 2).map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="text-[10px] px-1.5 py-0"
                >
                  {genre}
                </Badge>
              ))}
              {anime.genres.length > 2 && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                  +{anime.genres.length - 2}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
