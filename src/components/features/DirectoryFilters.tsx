"use client";

import { Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DirectoryFilters() {
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
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Filtros</h3>
            </div>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/directorio")}
                className="gap-2"
              >
                <X className="w-4 h-4" />
                Limpiar
              </Button>
            )}
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {/* Genre */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Género
              </label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={filters.genre}
                onChange={(e) => updateFilter("genre", e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="Action">Acción</option>
                <option value="Adventure">Aventura</option>
                <option value="Comedy">Comedia</option>
                <option value="Fantasy">Fantasía</option>
                <option value="Drama">Drama</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Ciencia Ficción</option>
                <option value="Shounen">Shounen</option>
              </select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Año
              </label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
              <label className="text-xs font-medium text-muted-foreground">
                Tipo
              </label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={filters.type}
                onChange={(e) => updateFilter("type", e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="Anime">Anime</option>
                <option value="Pelicula">Película</option>
                <option value="OVA">OVA</option>
                <option value="Especial">Especial</option>
              </select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Estado
              </label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={filters.status}
                onChange={(e) => updateFilter("status", e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="En emision">En emisión</option>
                <option value="Finalizado">Finalizado</option>
                <option value="Proximamente">Próximamente</option>
              </select>
            </div>

            {/* Order */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Ordenar
              </label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={filters.order}
                onChange={(e) => updateFilter("order", e.target.value)}
              >
                <option value="default">Por Defecto</option>
                <option value="title">Nombre A-Z</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {filters.genre !== "Todos" && (
                <Badge variant="secondary" className="gap-1">
                  Género: {filters.genre}
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
                  Año: {filters.year}
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
                  Tipo: {filters.type}
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
                  Estado: {filters.status}
                  <button
                    onClick={() => updateFilter("status", "Todos")}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
