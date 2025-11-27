import {
  MOCK_EPISODES,
  MOCK_FEATURED_ANIMES,
  MOCK_LATEST_ANIMES,
  MOCK_NEWS,
  MOCK_VIDEO_SOURCES,
} from "@/lib/mock-data";
import type { Anime, Episode, News, VideoSource } from "@/types";

import { AnimeFilters, DataProvider, PaginatedResult } from "./types";

export class MockDataProvider implements DataProvider {
  async getLatestEpisodes(): Promise<Episode[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_EPISODES), 500);
    });
  }

  async getFeaturedAnimes(): Promise<Anime[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_FEATURED_ANIMES), 500);
    });
  }

  async getLatestAnimes(): Promise<Anime[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_LATEST_ANIMES), 500);
    });
  }

  async getNews(): Promise<News[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_NEWS), 500);
    });
  }

  async getAnimeBySlug(slug: string): Promise<Anime | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const anime = [...MOCK_FEATURED_ANIMES, ...MOCK_LATEST_ANIMES].find(
          (a) => a.slug === slug
        );
        resolve(anime || null);
      }, 500);
    });
  }

  async getEpisode(slug: string, number: number): Promise<Episode | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const episode = MOCK_EPISODES.find((e) => {
          return e.url?.includes(slug) && e.number === number;
        });
        resolve(episode || null);
      }, 500);
    });
  }

  async searchAnimes(query: string): Promise<Anime[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        const results = [...MOCK_FEATURED_ANIMES, ...MOCK_LATEST_ANIMES].filter(
          (a) =>
            a.title.toLowerCase().includes(lowerQuery) ||
            a.genres.some((g) => g.toLowerCase().includes(lowerQuery))
        );
        // Remove duplicates based on ID
        const uniqueResults = Array.from(
          new Map(results.map((item) => [item.id, item])).values()
        );
        resolve(uniqueResults);
      }, 500);
    });
  }

  async getAnimes(filters: AnimeFilters): Promise<PaginatedResult<Anime>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...MOCK_FEATURED_ANIMES, ...MOCK_LATEST_ANIMES];
        // Remove duplicates
        filtered = Array.from(
          new Map(filtered.map((item) => [item.id, item])).values()
        );

        if (filters.genre && filters.genre !== "Todos") {
          filtered = filtered.filter((a) => a.genres.includes(filters.genre!));
        }
        if (filters.type && filters.type !== "Todos") {
          filtered = filtered.filter((a) => a.type === filters.type);
        }
        if (filters.status && filters.status !== "Todos") {
          filtered = filtered.filter((a) => a.status === filters.status);
        }

        // Sorting (Mock implementation supports default and maybe title)
        if (filters.order === "title") {
          filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else {
          // Default order (by id or creation for mock)
          filtered.sort((a, b) => b.id.localeCompare(a.id));
        }

        const page = filters.page || 1;
        const limit = filters.limit || 24;
        const total = filtered.length;
        const totalPages = Math.ceil(total / limit);
        const start = (page - 1) * limit;
        const end = start + limit;
        const data = filtered.slice(start, end);

        resolve({
          data,
          total,
          page,
          totalPages,
        });
      }, 500);
    });
  }
  async getVideoSources(episodeId: string): Promise<VideoSource[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sources = MOCK_VIDEO_SOURCES.filter(
          (s) => s.episodeId === episodeId
        );
        resolve(sources);
      }, 500);
    });
  }

  async getEpisodes(animeId: string): Promise<Episode[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const episodes = MOCK_EPISODES.filter((e) => e.animeId === animeId);
        resolve(episodes);
      }, 500);
    });
  }
}
