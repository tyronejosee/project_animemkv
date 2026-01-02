import { AnimeList } from "@/components/features/AnimeList";
import { EpisodeList } from "@/components/features/EpisodeList";
import { Hero } from "@/components/features/Hero";
import { Sidebar } from "@/components/features/Sidebar";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { api } from "@/lib/api";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const featuredAnimes = await api.getFeaturedAnimes();
  const latestEpisodes = await api.getLatestEpisodes();
  const latestAnimes = await api.getLatestAnimes();

  // Get airing animes for sidebar
  const { data: airingAnimes } = await api.getAnimes({
    status: "En emision",
    limit: 50,
  });

  const recentAnimes = latestAnimes.slice(0, 25);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-6 p-4">
      <Sidebar
        airingAnimes={airingAnimes}
        locale={locale}
        dict={{
          airingTitle: dict.sidebar.airingTitle,
          episodesSuffix: dict.general.episodesSuffix,
          typeMap: dict.animeDetails.typeMap,
        }}
      />
      <div className="grow flex flex-col gap-8">
        <Hero
          animes={featuredAnimes}
          locale={locale}
          dict={{
            watchNow: dict.animeDetails.watchNow,
            statusMap: dict.animeDetails.statusMap,
            typeMap: dict.animeDetails.typeMap,
          }}
        />
        <EpisodeList
          episodes={latestEpisodes}
          locale={locale}
          dict={{
            latestEpisodes: dict.home.latestEpisodes,
            today: dict.general.today,
            episodeAbbr: dict.general.episodeAbbr,
            timeAgo: dict.general.timeAgo,
          }}
        />
        <AnimeList
          animes={recentAnimes}
          title={dict.home.latestAnimes}
          variant="compact"
          locale={locale}
          dict={{
            statusMap: dict.animeDetails.statusMap,
            typeMap: dict.animeDetails.typeMap,
          }}
        />
      </div>
    </div>
  );
}
