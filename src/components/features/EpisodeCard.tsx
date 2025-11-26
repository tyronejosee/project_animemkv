import { Clock, Play } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Episode } from "@/types";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={episode.url || "#"} className="group">
      <Card className="overflow-hidden h-full border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={episode.image}
            alt={`${episode.title} Episode ${episode.number}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 backdrop-blur-sm p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* Episode badge */}
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm font-bold"
            >
              EP {episode.number}
            </Badge>
          </div>
        </div>

        <CardContent className="p-3">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {episode.title}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>Hace 2 horas</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
