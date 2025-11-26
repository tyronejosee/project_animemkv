import { Tv } from "lucide-react";

import { AnimeList } from "@/components/features/AnimeList";
import { DirectoryFilters } from "@/components/features/DirectoryFilters";
import { DirectoryPagination } from "@/components/features/DirectoryPagination";
import { api } from "@/lib/api";

interface PageProps {
  searchParams: Promise<{
    genre?: string;
    year?: string;
    type?: string;
    status?: string;
    order?: string;
    page?: string;
  }>;
}

export default async function DirectoryPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");

  const {
    data: animes,
    total,
    totalPages,
  } = await api.getAnimes({
    genre: params.genre,
    year: params.year,
    type: params.type,
    status: params.status,
    order: params.order,
    page,
    limit: 24,
  });

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Tv className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Directorio Anime</h1>
            <p className="text-sm text-muted-foreground">
              Mostrando {animes.length} de {total} resultados
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <DirectoryFilters />

      {/* Results */}
      <AnimeList animes={animes} />
      <div className="mt-8">
        <DirectoryPagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
