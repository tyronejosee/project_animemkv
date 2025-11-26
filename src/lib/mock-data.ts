import type { Anime, Episode, News } from "@/types";

export const MOCK_FEATURED_ANIMES: Anime[] = [
  {
    id: "1",
    title: "One Piece",
    slug: "one-piece",
    coverImage: "https://placehold.co/600x400/00aaff/white?text=One+Piece",
    bannerImage:
      "https://placehold.co/1200x400/00aaff/white?text=One+Piece+Banner",
    synopsis:
      "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates.",
    status: "En emision",
    type: "Anime",
    rating: 4.5,
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
  },
  {
    id: "2",
    title: "Detective Conan",
    slug: "detective-conan",
    coverImage:
      "https://placehold.co/600x400/ff5500/white?text=Detective+Conan",
    synopsis:
      "Shinichi Kudo is a high school detective who sometimes works with the police to solve cases.",
    status: "En emision",
    type: "Anime",
    rating: 4.3,
    genres: ["Adventure", "Comedy", "Mystery", "Police", "Shounen"],
  },
];

export const MOCK_EPISODES: Episode[] = [
  {
    id: "ep1",
    animeId: "1",
    title: "One Piece",
    number: 1080,
    image: "https://placehold.co/320x180/00aaff/white?text=One+Piece+1080",
    url: "/ver/one-piece-1080",
  },
  {
    id: "ep2",
    animeId: "2",
    title: "Detective Conan",
    number: 1100,
    image: "https://placehold.co/320x180/ff5500/white?text=Conan+1100",
    url: "/ver/detective-conan-1100",
  },
  {
    id: "ep3",
    animeId: "3",
    title: "Yasei no Last Boss ga Arawareta!",
    number: 9,
    image: "https://placehold.co/320x180/444444/white?text=Yasei+9",
    url: "/ver/yasei-no-last-boss-ga-arawareta-9",
  },
  {
    id: "ep4",
    animeId: "4",
    title: "Kekkon Yubiwa Monogatari",
    number: 4,
    image: "https://placehold.co/320x180/666666/white?text=Kekkon+4",
    url: "/ver/kekkon-yubiwa-monogatari-4",
  },
  {
    id: "ep5",
    animeId: "mock-10",
    title: "Anime Mock Title 1",
    number: 5,
    image: "https://placehold.co/320x180/888888/white?text=Mock+5",
    url: "/ver/anime-mock-title-1-5",
  },
  {
    id: "ep6",
    animeId: "mock-11",
    title: "Anime Mock Title 2",
    number: 6,
    image: "https://placehold.co/320x180/aaaaaa/white?text=Mock+6",
    url: "/ver/anime-mock-title-2-6",
  },
  {
    id: "ep7",
    animeId: "mock-12",
    title: "Anime Mock Title 3",
    number: 7,
    image: "https://placehold.co/320x180/cccccc/white?text=Mock+7",
    url: "/ver/anime-mock-title-3-7",
  },
  {
    id: "ep8",
    animeId: "mock-13",
    title: "Anime Mock Title 4",
    number: 8,
    image: "https://placehold.co/320x180/eeeeee/black?text=Mock+8",
    url: "/ver/anime-mock-title-4-8",
  },
];

const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Magic",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shounen",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];
const STATUSES = ["En emision", "Finalizado", "Proximamente"];
const TYPES = ["Anime", "Pelicula", "OVA", "Especial"];

export const MOCK_LATEST_ANIMES: Anime[] = [
  // Keep some real-looking data at the start
  {
    id: "3",
    title: "Yasei no Last Boss ga Arawareta!",
    slug: "yasei-no-last-boss-ga-arawareta",
    coverImage: "https://placehold.co/600x900/444444/white?text=Yasei",
    synopsis: "...",
    status: "En emision",
    type: "Anime",
    rating: 4.5,
    genres: ["Fantasy"],
  },
  {
    id: "4",
    title: "Kekkon Yubiwa Monogatari",
    slug: "kekkon-yubiwa-monogatari",
    coverImage: "https://placehold.co/600x900/666666/white?text=Kekkon",
    synopsis: "...",
    status: "En emision",
    type: "Anime",
    rating: 4.2,
    genres: ["Fantasy", "Romance"],
  },
  // Generate the rest
  ...Array.from({ length: 100 }).map((_, i) => {
    const id = `mock-${i + 10}`;
    const type = TYPES[i % TYPES.length];
    return {
      id,
      title: `Anime Mock Title ${i + 1}`,
      slug: `anime-mock-title-${i + 1}`,
      coverImage: `https://placehold.co/600x900/${Math.floor(
        Math.random() * 16777215
      ).toString(16)}/white?text=Anime+${i + 1}`,
      synopsis:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: STATUSES[i % STATUSES.length] as
        | "En emision"
        | "Finalizado"
        | "Proximamente",
      type: type as "Anime" | "Pelicula" | "OVA" | "Especial",
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // Rating between 3.0 and 5.0
      genres: [GENRES[i % GENRES.length], GENRES[(i + 5) % GENRES.length]],
    };
  }),
];

export const MOCK_NEWS: News[] = [
  {
    id: "1",
    title: "Gundam GQuuuuuuX domina internet",
    image: "https://placehold.co/300x200/111111/white?text=News+1",
    date: "Hoy",
    category: "Cultura Otaku",
    url: "#",
  },
  {
    id: "2",
    title: "La solución de Bandai Namco a la crisis del anime",
    image: "https://placehold.co/300x200/222222/white?text=News+2",
    date: "Ayer",
    category: "Cultura Otaku",
    url: "#",
  },
];
