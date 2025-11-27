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

  const { data: animes, totalPages } = await api.getAnimes({
    genre: params.genre,
    year: params.year,
    type: params.type,
    status: params.status,
    order: params.order,
    page,
    limit: 12,
  });

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 h-fit">
          <DirectoryFilters />
        </aside>

        {/* Main Content */}
        <section className="space-y-4">
          {/* Results */}
          <AnimeList animes={animes} />

          {/* Pagination */}
          <DirectoryPagination currentPage={page} totalPages={totalPages} />
        </section>
      </div>
    </div>
  );
}
