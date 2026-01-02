import { AnimeList } from "@/components/features/AnimeList";
import { DirectoryFilters } from "@/components/features/DirectoryFilters";
import { DirectoryPagination } from "@/components/features/DirectoryPagination";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { api } from "@/lib/api";

interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    genre?: string;
    year?: string;
    type?: string;
    status?: string;
    order?: string;
    page?: string;
  }>;
}

export default async function DirectoryPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const sParams = await searchParams;
  const page = parseInt(sParams.page || "1");

  const { data: animes, totalPages } = await api.getAnimes({
    genre: sParams.genre,
    year: sParams.year,
    type: sParams.type,
    status: sParams.status,
    order: sParams.order,
    page,
    limit: 12,
  });

  const genres = await api.getGenres();

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 h-fit">
          <DirectoryFilters
            genres={genres}
            locale={locale}
            dict={{
              ...dict.directory,
              statusMap: dict.animeDetails.statusMap,
              typeMap: dict.animeDetails.typeMap,
            }}
          />
        </aside>

        {/* Main Content */}
        <section className="space-y-4">
          {/* Results */}
          <AnimeList
            animes={animes}
            locale={locale}
            dict={{
              statusMap: dict.animeDetails.statusMap,
              typeMap: dict.animeDetails.typeMap,
            }}
          />

          {/* Pagination */}
          <DirectoryPagination
            currentPage={page}
            totalPages={totalPages}
            locale={locale}
          />
        </section>
      </div>
    </div>
  );
}
