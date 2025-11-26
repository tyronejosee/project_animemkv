import { AnimeList } from "@/components/features/AnimeList";
import { EpisodeList } from "@/components/features/EpisodeList";
import { Hero } from "@/components/features/Hero";
import { Sidebar } from "@/components/features/Sidebar";
import { api } from "@/lib/api";

export default async function Home() {
  const featuredAnimes = await api.getFeaturedAnimes();
  const latestEpisodes = await api.getLatestEpisodes();
  const latestAnimes = await api.getLatestAnimes();
  const news = await api.getNews();

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-4">
      <div className="grow">
        <Hero animes={featuredAnimes} />
        <EpisodeList episodes={latestEpisodes} />
        <AnimeList animes={latestAnimes} title="Últimos animes agregados" />
      </div>
      <Sidebar news={news} />
    </div>
  );
}
