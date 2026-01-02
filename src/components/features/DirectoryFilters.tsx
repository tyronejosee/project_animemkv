"use client";

import { Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale } from "@/i18n/config";
import { routeMap } from "@/i18n/routes";
import { AnimeStatus, AnimeType } from "@/lib/api/types";

interface DirectoryFiltersProps {
  genres: string[];
  locale: Locale;
  dict: {
    filters: string;
    all: string;
    genre: string;
    year: string;
    type: string;
    status: string;
    order: string;
    orderDefault: string;
    orderTitle: string;
    activeFilters: string;
    clear: string;
    statusMap: Record<string, string>;
    typeMap: Record<string, string>;
  };
}

export function DirectoryFilters({
  genres,
  locale,
  dict,
}: DirectoryFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = {
    genre: searchParams.get("genre") || dict.all,
    year: searchParams.get("year") || dict.all,
    type: searchParams.get("type") || dict.all,
    status: searchParams.get("status") || dict.all,
    order: searchParams.get("order") || "default",
  };

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === dict.all || value === "default") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    // Reset page when filtering
    params.delete("page");
    router.push(
      `/${locale}/${routeMap.directory[locale]}?${params.toString()}`
    );
  };

  const hasActiveFilters = Object.values(filters).some((value, index) =>
    index === 4 ? value !== "default" : value !== dict.all
  );

  return (
    <Card className="h-fit">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Filter className="w-5 h-5 text-primary" />
            {dict.filters}
          </CardTitle>

          {hasActiveFilters && (
            <Badge
              variant="secondary"
              className="gap-1 cursor-pointer"
              onClick={() =>
                router.push(`/${locale}/${routeMap.directory[locale]}`)
              }
            >
              <X className="w-4 h-4" />
              {dict.clear}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          {/* Genre */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.genre}</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.genre}
              onChange={(e) => updateFilter("genre", e.target.value)}
            >
              <option value={dict.all}>{dict.all}</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.year}</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.year}
              onChange={(e) => updateFilter("year", e.target.value)}
            >
              <option value={dict.all}>{dict.all}</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.type}</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.type}
              onChange={(e) => updateFilter("type", e.target.value)}
            >
              <option value={dict.all}>{dict.all}</option>
              {Object.values(AnimeType).map((type) => (
                <option key={type} value={type}>
                  {dict.typeMap[type] || type}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.status}</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.status}
              onChange={(e) => updateFilter("status", e.target.value)}
            >
              <option value={dict.all}>{dict.all}</option>
              {Object.values(AnimeStatus).map((status) => (
                <option key={status} value={status}>
                  {dict.statusMap[status] || status}
                </option>
              ))}
            </select>
          </div>

          {/* Order */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.order}</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filters.order}
              onChange={(e) => updateFilter("order", e.target.value)}
            >
              <option value="default">{dict.orderDefault}</option>
              <option value="title">{dict.orderTitle}</option>
            </select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="pt-4 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {dict.activeFilters}
              </p>
              <div className="flex flex-wrap gap-2">
                {filters.genre !== dict.all && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.genre}
                    <button
                      onClick={() => updateFilter("genre", dict.all)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.year !== dict.all && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.year}
                    <button
                      onClick={() => updateFilter("year", dict.all)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.type !== dict.all && (
                  <Badge variant="secondary" className="gap-1">
                    {dict.typeMap[filters.type] || filters.type}
                    <button
                      onClick={() => updateFilter("type", dict.all)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.status !== dict.all && (
                  <Badge variant="secondary" className="gap-1">
                    {dict.statusMap[filters.status] || filters.status}
                    <button
                      onClick={() => updateFilter("status", dict.all)}
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
