import { Tv } from "lucide-react";
import Image from "next/image";
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
    <aside className="hidden lg:block w-full lg:w-80 shrink-0 lg:sticky lg:top-20 h-[calc(100vh-6rem)]">
      <Card className="h-full flex flex-col">
        <CardHeader className="border-b shrink-0">
          <CardTitle className="flex items-center gap-2">
            <Tv className="w-5 h-5 text-primary" />
            En Emisión
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="flex flex-col pb-4">
              {airingAnimes.map((anime, index) => (
                <Link
                  href={`/anime/${anime.slug}`}
                  key={anime.id}
                  className={`flex gap-3 p-3 group hover:bg-muted/50 transition-colors ${index !== airingAnimes.length - 1 ? "border-b border-border/50" : ""
                    }`}
                >
                  {/* Cover Image */}
                  <div className="w-16 h-24 shrink-0 rounded overflow-hidden relative">
                    <Image
                      src={anime.coverImage}
                      alt={anime.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
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
