import type { Anime, Episode, News, VideoSource } from "@/types";

export interface AnimeFilters {
  genre?: string;
  year?: string;
  type?: string;
  status?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
}

export interface DataProvider {
  getLatestEpisodes(): Promise<Episode[]>;
  getFeaturedAnimes(): Promise<Anime[]>;
  getLatestAnimes(): Promise<Anime[]>;
  getNews(): Promise<News[]>;
  getAnimeBySlug(slug: string): Promise<Anime | null>;
  getEpisode(slug: string, number: number): Promise<Episode | null>;
  searchAnimes(query: string): Promise<Anime[]>;
  getAnimes(filters: AnimeFilters): Promise<PaginatedResult<Anime>>;
  getVideoSources(episodeId: string): Promise<VideoSource[]>;
  getEpisodes(animeId: string): Promise<Episode[]>;
}
