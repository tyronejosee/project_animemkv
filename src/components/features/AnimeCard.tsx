import { Star } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Anime } from "@/types";

interface AnimeCardProps {
  anime: Anime;
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.slug}`} className="group">
      <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative aspect-2/3 overflow-hidden">
          {/* Cover Image */}
          <img
            src={anime.coverImage}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay - only visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content overlay - slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            {/* Genres */}
            {anime.genres && anime.genres.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {anime.genres.slice(0, 3).map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    {genre}
                  </Badge>
                ))}
                {anime.genres.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-white/20 text-white border-white/30"
                  >
                    +{anime.genres.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Badges row */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Type badge */}
              <Badge
                variant={anime.type === "Anime" ? "default" : "secondary"}
                className="text-xs font-bold"
              >
                {anime.type}
              </Badge>

              {/* Status badge */}
              <Badge
                variant="outline"
                className={`text-xs ${anime.status === "En emision"
                  ? "bg-green-600/90 text-white border-green-400"
                  : anime.status === "Finalizado"
                    ? "bg-gray-600/90 text-white border-gray-400"
                    : "bg-primary/90 text-primary-foreground border-primary"
                  }`}
              >
                {anime.status}
              </Badge>

              {/* Rating */}
              {anime.rating && (
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-white">{anime.rating}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
      <div className="text-center pt-2">
        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {anime.title}
        </h3>
      </div>
    </Link>
  );
}
