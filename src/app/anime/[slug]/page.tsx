import { Play, Star, Tv, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  const episodes = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    title: `Episodio ${i + 1}`,
    image: anime.coverImage,
    date: "2025-11-29",
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header with cover image */}
      <div className="relative h-[200px] bg-linear-to-b from-black/80 to-background">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src={anime.bannerImage || anime.coverImage}
          alt={anime.title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto p-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4 sticky top-20 self-start">
            {/* Cover Image */}
            <Card className="overflow-hidden">
              <img
                src={anime.coverImage}
                alt={anime.title}
                className="w-full aspect-2/3 object-cover"
              />
            </Card>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Play className="w-4 h-4 fill-current" />
                EN EMISIÓN
              </Button>
              <Button variant="outline" className="w-full gap-2" size="lg">
                <Star className="w-4 h-4" />
                AGREGAR
              </Button>
              <Button variant="outline" className="w-full gap-2" size="lg">
                <Users className="w-4 h-4" />
                SEGUIR
              </Button>
            </div>

            {/* Info Card */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tipo:</span>
                  <Badge variant="secondary">{anime.type}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Estado:</span>
                  <Badge variant="secondary">{anime.status}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Episodios:</span>
                  <span className="font-medium">{episodes.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{anime.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {anime.title}
                </h1>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{anime.rating}</span>
                </div>
              </div>
              <div>
                {anime.genres.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">title 1</Badge>
                <Badge variant="secondary">title 2</Badge>
              </div>
            </div>

            {/* Synopsis Tabs */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="sinopsis">
                  <TabsList>
                    <TabsTrigger value="sinopsis">Sinopsis</TabsTrigger>
                    <TabsTrigger value="relacion">Relación</TabsTrigger>
                    <TabsTrigger value="recursos">Recursos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="sinopsis" className="mt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {anime.synopsis}
                    </p>
                  </TabsContent>
                  <TabsContent value="relacion">
                    <p className="text-muted-foreground">
                      No hay información de relación disponible.
                    </p>
                  </TabsContent>
                  <TabsContent value="recursos">
                    <p className="text-muted-foreground">
                      No hay recursos disponibles.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Episodes List */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Lista de episodios</h2>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Tv className="w-4 h-4" />
                    Mover a Próximo
                  </Button>
                </div>

                <div className="space-y-2">
                  {episodes.map((ep) => (
                    <Link
                      href={`/ver/${anime.slug}-${ep.number}`}
                      key={ep.number}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="relative w-20 h-12 rounded overflow-hidden shrink-0">
                        <img
                          src={ep.image}
                          alt={ep.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white fill-current" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {anime.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {ep.title}
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {ep.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
