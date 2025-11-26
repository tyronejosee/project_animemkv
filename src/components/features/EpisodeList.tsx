import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Episode } from "@/types";

import { EpisodeCard } from "./EpisodeCard";

interface EpisodeListProps {
  episodes: Episode[];
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Últimos Episodios
        </h2>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="w-4 h-4" />
          Hoy
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
