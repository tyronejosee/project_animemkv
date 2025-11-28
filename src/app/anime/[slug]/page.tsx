import { Play, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EpisodeList } from "@/components/anime/episode-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/lib/api";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AnimeDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const anime = await api.getAnimeBySlug(slug);

  if (!anime) {
    notFound();
  }

  const episodes = await api.getEpisodes(anime.id);

  return (
    <div className="min-h-screen">
      {/* Header with cover image */}
      <figure className="relative h-[100px] lg:h-[200px] overflow-hidden">
        <img
          src={anime.bannerImage || anime.coverImage}
          alt={anime.title}
          className="w-full h-full object-cover opacity-50 blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </figure>

      <div className="container mx-auto p-4 lg:-mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Cover Image */}
            <Card className="overflow-hidden w-48 mx-auto lg:w-full shadow-2xl ring-1 ring-white/10">
              <img
                src={anime.coverImage}
                alt={anime.title}
                className="w-full aspect-[2/3] object-cover"
              />
            </Card>

            {/* Mobile Header (Title & Rating) */}
            <div className="lg:hidden mb-8 space-y-4">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold leading-tight text-foreground drop-shadow-md">
                  {anime.title}
                </h1>

                {/* Alternative Titles */}
                {anime.alternativeTitles && anime.alternativeTitles.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5 px-4">
                    {anime.alternativeTitles.map((title) => (
                      <Badge
                        key={title}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-secondary/80 transition-colors"
                      >
                        {title}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm text-primary">{anime.rating}</span>
                  </div>
                  {anime.genres.map((genre: string) => (
                    <Link key={genre} href={`/directorio?genre=${genre}`}>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium hover:bg-secondary/80 transition-colors"
                      >
                        {genre}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                size="lg"
              >
                <Play className="w-5 h-5 fill-current" />
                VER AHORA
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2 hover:bg-accent hover:text-accent-foreground transition-all"
                size="lg"
              >
                <Star className="w-5 h-5" />
                AGREGAR A LISTA
              </Button>
            </div>

            {/* Info Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-muted/50">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground font-medium">Tipo</span>
                  <Badge variant="secondary" className="font-bold">
                    {anime.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground font-medium">
                    Estado
                  </span>
                  <Badge
                    variant={
                      anime.status === "Finalizado" ? "secondary" : "default"
                    }
                    className="font-bold"
                  >
                    {anime.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground font-medium">
                    Episodios
                  </span>
                  <span className="font-bold">{episodes.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-muted-foreground font-medium">
                    Rating
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{anime.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-6">
            {/* Desktop Title and Rating */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                    {anime.title}
                  </h1>
                  {/* Alternative Titles Desktop */}
                  {anime.alternativeTitles && anime.alternativeTitles.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {anime.alternativeTitles.map((title) => (
                        <Badge
                          key={title}
                          variant="outline"
                          className="text-sm font-medium"
                        >
                          {title}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-primary">{anime.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre: string) => (
                  <Link key={genre} href={`/directorio?genre=${genre}`}>
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-1.5 font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {genre}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Synopsis Tabs */}
            <Card className="border-none shadow-none bg-transparent lg:bg-card lg:border lg:shadow-sm">
              <CardContent className="p-0 lg:p-6">
                <Tabs defaultValue="sinopsis" className="w-full">
                  <TabsList className="w-full justify-start h-auto p-1 bg-muted/50">
                    <TabsTrigger value="sinopsis" className="flex-1 lg:flex-none">Sinopsis</TabsTrigger>
                    <TabsTrigger value="relacion" className="flex-1 lg:flex-none">Relación</TabsTrigger>
                    <TabsTrigger value="recursos" className="flex-1 lg:flex-none">Recursos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="sinopsis" className="mt-4 animate-in fade-in-50">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {anime.synopsis}
                    </p>
                  </TabsContent>
                  <TabsContent value="relacion" className="mt-4">
                    <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                      No hay información de relación disponible.
                    </div>
                  </TabsContent>
                  <TabsContent value="recursos" className="mt-4">
                    <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                      No hay recursos disponibles.
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Episodes List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Play className="w-6 h-6 text-primary" />
                Episodios
              </h2>
              <EpisodeList
                episodes={episodes}
                animeSlug={anime.slug}
                animeTitle={anime.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

