import type { Locale } from "@/i18n/config";
import type { Anime } from "@/types";
import { AnimeCard } from "./AnimeCard";

interface AnimeListProps {
  animes: Anime[];
  title?: string;
  variant?: "default" | "compact";
  locale: Locale;
  dict: {
    statusMap: Record<string, string>;
    typeMap: Record<string, string>;
  };
}

export function AnimeList({
  animes,
  title,
  variant = "default",
  locale,
  dict,
}: AnimeListProps) {
  const gridClasses =
    variant === "compact"
      ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4";

  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className="text-2xl font-bold text-primary">{title}</h2>}

      <div className={gridClasses}>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            locale={locale}
            dict={{
              statusMap: dict.statusMap,
              typeMap: dict.typeMap,
            }}
          />
        ))}
      </div>
    </div>
  );
}
