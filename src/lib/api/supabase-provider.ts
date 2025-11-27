import { getSupabase } from "@/lib/supabase";
import { Anime, Episode, News, VideoSource } from "@/types";

import type { AnimeFilters, DataProvider, PaginatedResult } from "./types";

export class SupabaseDataProvider implements DataProvider {
  async getLatestEpisodes(): Promise<Episode[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("episodes")
      .select(
        `
        *,
        anime:animes (
          title,
          slug
        )
      `
      )
      .order("created_at", { ascending: false })
      .limit(24);

    if (error) {
      console.error("Error fetching episodes:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      animeId: item.anime_id,
      title: item.anime?.title || "Unknown",
      number: item.number,
      image: item.image,
      url: `/ver/${item.anime?.slug}-${item.number}`,
    }));
  }

  async getFeaturedAnimes(): Promise<Anime[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("animes")
      .select("*")
      .eq("is_featured", true)
      .limit(10);

    if (error) {
      console.error("Error fetching featured animes:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      coverImage: item.cover_image,
      bannerImage: item.banner_image,
      synopsis: item.synopsis,
      status: item.status,
      type: item.type,
      rating: item.rating,
      genres: item.genres || [],
    }));
  }

  async getLatestAnimes(): Promise<Anime[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("animes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Error fetching latest animes:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      coverImage: item.cover_image,
      synopsis: item.synopsis,
      status: item.status,
      type: item.type,
      rating: item.rating,
      genres: item.genres || [],
    }));
  }

  async getNews(): Promise<News[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) {
      console.error("Error fetching news:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      date: new Date(item.created_at).toLocaleDateString(),
      category: item.category,
      url: item.url || "#",
    }));
  }

  async getAnimeBySlug(slug: string): Promise<Anime | null> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("animes")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      console.error("Error fetching anime by slug:", error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      coverImage: data.cover_image,
      bannerImage: data.banner_image,
      synopsis: data.synopsis,
      status: data.status,
      type: data.type,
      rating: data.rating,
      genres: data.genres || [],
    };
  }

  async getEpisode(slug: string, number: number): Promise<Episode | null> {
    const supabase = getSupabase();
    // First get anime id by slug
    const { data: anime, error: animeError } = await supabase
      .from("animes")
      .select("id")
      .eq("slug", slug)
      .single();

    if (animeError || !anime) return null;

    const { data, error } = await supabase
      .from("episodes")
      .select("*")
      .eq("anime_id", anime.id)
      .eq("number", number)
      .single();

    if (error || !data) {
      console.error("Error fetching episode:", error);
      return null;
    }

    return {
      id: data.id,
      animeId: data.anime_id,
      title: data.title, // This might need to be fetched from anime if not in episode table, but assuming it is for now or we join
      number: data.number,
      image: data.image,
      url: `/ver/${slug}-${number}`,
    };
  }

  async searchAnimes(query: string): Promise<Anime[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("animes")
      .select("*")
      .ilike("title", `%${query}%`)
      .limit(20);

    if (error) {
      console.error("Error searching animes:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      coverImage: item.cover_image,
      synopsis: item.synopsis,
      status: item.status,
      type: item.type,
      rating: item.rating,
      genres: item.genres || [],
    }));
  }

  async getAnimes(filters: AnimeFilters): Promise<PaginatedResult<Anime>> {
    const supabase = getSupabase();
    let query = supabase.from("animes").select("*", { count: "exact" });

    if (filters.genre && filters.genre !== "Todos") {
      query = query.contains("genres", [filters.genre]);
    }
    if (filters.type && filters.type !== "Todos") {
      query = query.eq("type", filters.type);
    }
    if (filters.status && filters.status !== "Todos") {
      query = query.eq("status", filters.status);
    }

    // Sorting
    if (filters.order === "title") {
      query = query.order("title", { ascending: true });
    } else {
      query = query.order("created_at", { ascending: false });
    }

    const page = filters.page || 1;
    const limit = filters.limit || 24;
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    query = query.range(start, end);

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching animes:", error);
      return { data: [], total: 0, page, totalPages: 0 };
    }

    const animes = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      coverImage: item.cover_image,
      synopsis: item.synopsis,
      status: item.status,
      type: item.type,
      rating: item.rating,
      genres: item.genres || [],
    }));

    return {
      data: animes,
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit),
    };
  }

  async getVideoSources(episodeId: string): Promise<VideoSource[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("video_sources")
      .select("*")
      .eq("episode_id", episodeId);

    if (error) {
      console.error("Error fetching video sources:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      episodeId: item.episode_id,
      platform: item.platform,
      url: item.url,
    }));
  }

  async getEpisodes(animeId: string): Promise<Episode[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("episodes")
      .select("*")
      .eq("anime_id", animeId)
      .order("number", { ascending: true });

    if (error) {
      console.error("Error fetching episodes:", error);
      return [];
    }

    return data.map((item: any) => ({
      id: item.id,
      animeId: item.anime_id,
      title: item.title,
      number: item.number,
      image: item.image,
      url: `/ver/${item.anime_id}-${item.number}`,
    }));
  }
}
