import { Tv } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Anime } from "@/types";

interface SidebarProps {
  airingAnimes: Anime[];
}

export function Sidebar({ airingAnimes }: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-20 h-full">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <Tv className="w-5 h-5 text-primary" />
            En Emisión
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[680px]">
            <div className="flex flex-col">
              {airingAnimes.map((anime, index) => (
                <Link
                  href={`/anime/${anime.slug}`}
                  key={anime.id}
                  className={`flex gap-3 p-3 group hover:bg-muted/50 transition-colors ${index !== airingAnimes.length - 1 ? "border-b border-border/50" : ""
                    }`}
                >
                  {/* Cover Image */}
                  <div className="w-16 h-20 shrink-0 rounded overflow-hidden relative">
                    <img
                      src={anime.coverImage}
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-1">
                        {anime.title}
                      </h4>
                      {anime.episodes && (
                        <p className="text-xs text-muted-foreground">
                          {anime.episodes.length} episodios
                        </p>
                      )}
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit text-[10px] px-2 py-0.5"
                    >
                      {anime.type}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </aside>
  );
}
