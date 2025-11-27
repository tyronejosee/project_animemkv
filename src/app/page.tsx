import { AnimeList } from "@/components/features/AnimeList";
import { EpisodeList } from "@/components/features/EpisodeList";
import { Hero } from "@/components/features/Hero";
import { Sidebar } from "@/components/features/Sidebar";
import { api } from "@/lib/api";

export default async function Home() {
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
      <Sidebar airingAnimes={airingAnimes} />
      <div className="grow flex flex-col gap-8">
        <Hero animes={featuredAnimes} />
        <EpisodeList episodes={latestEpisodes} />
        <AnimeList
          animes={recentAnimes}
          title="Últimos animes agregados"
          variant="compact"
        />
      </div>
    </div>
  );
}
