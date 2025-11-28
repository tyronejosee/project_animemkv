import { Star } from "lucide-react";
import Image from "next/image";
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
          <Image
            src={anime.coverImage}
            alt={anime.title}
            width={260}
            height={370}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />

          {/* Top Badges - Always visible */}
          <div className="absolute top-2 inset-x-2 flex justify-end items-start z-10">
            {/* Bottom Badges row */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Type badge */}
              <Badge
                variant={anime.type === "Anime" ? "default" : "secondary"}
                className="text-xs font-bold shadow-sm"
              >
                {anime.type}
              </Badge>
            </div>
          </div>

          {/* Gradient overlay - only visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content overlay - slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-between gap-2">
            {/* Status badge */}
            <Badge
              variant="outline"
              className={`text-[10px] font-medium px-2 py-0.5 border-0 backdrop-blur-md shadow-sm ${anime.status === "En emision"
                ? "bg-green-500/90 text-white"
                : anime.status === "Finalizado"
                  ? "bg-black/60 text-white"
                  : "bg-primary/90 text-primary-foreground"
                }`}
            >
              {anime.status}
            </Badge>

            {/* Rating */}
            {anime.rating ? (
              <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 shadow-sm">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-white">{anime.rating}</span>
              </div>
            ) : (
              <div />
            )}
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
