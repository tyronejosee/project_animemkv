export interface Anime {
  id: string;
  title: string;
  alternativeTitles?: string[];
  slug: string;
  coverImage: string;
  bannerImage?: string;
  synopsis: string;
  status: "En emision" | "Finalizado" | "Proximamente";
  type: "Anime" | "Pelicula" | "OVA" | "Especial";
  rating?: number;
  genres: string[];
  episodes?: Episode[];
}

export interface Episode {
  id: string;
  animeId: string;
  title: string;
  number: number;
  image: string;
  url?: string;
}

export interface News {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
  url: string;
}

export interface VideoSource {
  id: string;
  episodeId: string;
  platform: string;
  url: string;
}
