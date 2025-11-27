import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Episode } from "@/types";

import { EpisodeCard } from "./EpisodeCard";

interface EpisodeListProps {
  episodes: Episode[];
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary">
          Últimos Episodios
        </h2>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="w-4 h-4" />
          Hoy
        </Button>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </section>
    </section>
  );
}
