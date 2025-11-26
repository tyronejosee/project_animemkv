import { Search } from "lucide-react";

import { AnimeList } from "@/components/features/AnimeList";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";

interface PageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q || "";
  const results = query ? await api.searchAnimes(query) : [];

  return (
    <div className="container mx-auto">
      <Card className="mb-8">
        <CardContent className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Search className="w-6 h-6" />
            Resultados de búsqueda: "{query}"
          </h1>
          <div className="text-sm text-muted-foreground">
            Mostrando {results.length} resultados
          </div>
        </CardContent>
      </Card>

      {results.length > 0 ? (
        <Card>
          <CardContent className="p-6">
            <AnimeList animes={results} title="Resultados" />
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No se encontraron resultados para "{query}"
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
