"use client";

import { Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimeStatus, AnimeType } from "@/lib/api/types";

interface DirectoryFiltersProps {
  genres: string[];
}

export function DirectoryFilters({ genres }: DirectoryFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = {
    genre: searchParams.get("genre") || "Todos",
    year: searchParams.get("year") || "Todos",
    type: searchParams.get("type") || "Todos",
    status: searchParams.get("status") || "Todos",
    order: searchParams.get("order") || "default",
  };

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "Todos" || value === "default") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    // Reset page when filtering
    params.delete("page");
    router.push(`/directorio?${params.toString()}`);
  };

  const hasActiveFilters = Object.values(filters).some((value, index) =>
    index === 4 ? value !== "default" : value !== "Todos"
  );

  return (
    <Card className="h-fit">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Filter className="w-5 h-5 text-primary" />
            Filtros
          </CardTitle>

          {hasActiveFilters && (
            <Badge variant="secondary" className="gap-1" onClick={() => router.push("/directorio")}>
              <X className="w-4 h-4" />
              Limpiar
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          {/* Genre */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Género
            </label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.genre}
              onChange={(e) => updateFilter("genre", e.target.value)}
            >
              <option value="Todos">Todos</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Año
            </label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.year}
              onChange={(e) => updateFilter("year", e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Tipo
            </label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.type}
              onChange={(e) => updateFilter("type", e.target.value)}
            >
              <option value="Todos">Todos</option>
              {Object.values(AnimeType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Estado
            </label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.status}
              onChange={(e) => updateFilter("status", e.target.value)}
            >
              <option value="Todos">Todos</option>
              {Object.values(AnimeStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Order */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Ordenar
            </label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.order}
              onChange={(e) => updateFilter("order", e.target.value)}
            >
              <option value="default">Por Defecto</option>
              <option value="title">Nombre A-Z</option>
            </select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="pt-4 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Filtros activos:
              </p>
              <div className="flex flex-wrap gap-2">
                {filters.genre !== "Todos" && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.genre}
                    <button
                      onClick={() => updateFilter("genre", "Todos")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.year !== "Todos" && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.year}
                    <button
                      onClick={() => updateFilter("year", "Todos")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.type !== "Todos" && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.type}
                    <button
                      onClick={() => updateFilter("type", "Todos")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.status !== "Todos" && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.status}
                    <button
                      onClick={() => updateFilter("status", "Todos")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
