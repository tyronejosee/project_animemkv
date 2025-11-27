import { ChevronLeft, ChevronRight, Home, List } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommentsSection } from "@/components/features/CommentsSection";
import { VideoPlayer } from "@/components/features/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const parts = slug.split("-");
  const number = parseInt(parts.pop() || "0");
  const animeSlug = parts.join("-");

  let episode = await api.getEpisode(animeSlug, number);
  const anime = await api.getAnimeBySlug(animeSlug);

  const sources = episode ? await api.getVideoSources(episode.id) : [];

  if (!episode || !anime) {
    notFound();
  }

  const allEpisodes = await api.getEpisodes(anime.id);
  const hasNextEpisode = allEpisodes.some((e) => e.number === number + 1);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-1.5 hover:text-foreground transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          )}
        >
          <Home className="h-3.5 w-3.5" />
          Inicio
        </Link>
        <span>/</span>
        <Link
          href={`/anime/${animeSlug}`}
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {anime?.title}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Episodio {number}</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
        {anime?.title}{" "}
        <span className="text-muted-foreground">· Episodio {number}</span>
      </h1>

      {/* Main Content Grid - Video Player + Comments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column - Video Player and Navigation */}
        <div className="lg:col-span-2 space-y-4">
          {/* Video Player */}
          <div className="w-full">
            <VideoPlayer
              title={`${anime?.title} - Episodio ${number}`}
              sources={sources}
            />
          </div>

          {/* Episode Navigation */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center gap-4">
                <Button
                  variant="ghost"
                  size="default"
                  asChild
                  disabled={number <= 1}
                  className={cn(number <= 1 && "opacity-50 cursor-not-allowed")}
                >
                  <Link href={number > 1 ? `/ver/${animeSlug}-${number - 1}` : "#"}>
                    <ChevronLeft />
                    <span className="hidden sm:inline">Anterior</span>
                  </Link>
                </Button>

                <Button variant="outline" size="default" asChild>
                  <Link href={`/anime/${animeSlug}`}>
                    <List />
                    <span className="hidden sm:inline">Lista de Episodios</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="default"
                  asChild
                  disabled={!hasNextEpisode}
                  className={cn(
                    !hasNextEpisode && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <Link
                    href={
                      hasNextEpisode ? `/ver/${animeSlug}-${number + 1}` : "#"
                    }
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <ChevronRight />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Comments */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-4 h-[600px] lg:h-[calc(100vh-8rem)]">
            <CommentsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
