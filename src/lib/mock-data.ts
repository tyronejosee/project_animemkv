import type { Anime, Episode, News, VideoSource } from "@/types";

export const STATUSES = ["En emision", "Finalizado", "Proximamente"];
export const TYPES = ["Anime", "Pelicula", "OVA", "Especial"];
export const GENRES = [
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Fantasia",
  "Magia",
  "Mecha",
  "Música",
  "Misterio",
  "Psicológico",
  "Romance",
  "Ciencia ficción",
  "Seinen",
  "Shoujo",
  "Shounen",
  "Vida cotidiana",
  "Deporte",
  "Sobrenatural",
  "Suspenso",
];

export const MOCK_VIDEO_SOURCES: VideoSource[] = [
  {
    id: "src1",
    episodeId: "ep1",
    platform: "Streamwish",
    url: "https://streamwish.to/e/ifzp195fd6z7",
  },
  {
    id: "src2",
    episodeId: "ep2",
    platform: "Streamwish",
    url: "https://streamwish.to/e/dy3je8d4cqnh",
  },
  {
    id: "src3",
    episodeId: "ep3",
    platform: "Streamwish",
    url: "https://streamwish.to/e/f0041oz6n0ww",
  },
  {
    id: "src4",
    episodeId: "ep4",
    platform: "Streamwish",
    url: "https://streamwish.to/e/d8y63cnllf7r",
  },
  {
    id: "src5",
    episodeId: "ep5",
    platform: "Streamwish",
    url: "https://streamwish.to/e/6kte5pmaankh",
  },
];

export const MOCK_FEATURED_ANIMES: Anime[] = [
  {
    id: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    slug: "katainaka-no-ossan-kensei-ni-naru",
    coverImage: "https://www3.animeflv.net/uploads/animes/covers/4149.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4149.jpg",
    synopsis:
      "Beryl Gardinant, un autoproclamado “humilde anciano”, es un instructor de espada en su dojo ubicado en un pueblo rural y apartado. En su juventud, soñaba con alcanzar la gloria como maestro espadachín, pero esos días han quedado muy atrás. De repente, recibe la visita de un famoso exalumno que le trae una noticia impactante: ¡ha sido nombrado instructor especial para los caballeros de la Orden de Liberion! Con su vida completamente trastornada, Beryl viaja a la capital y se reúne con algunos de sus antiguos alumnos: caballeros de élite, un mago prodigioso e incluso un aventurero que ha alcanzado el rango más alto posible en el gremio. Pero, ¿por qué todos insisten en recibir nuevamente sus enseñanzas? Desde su punto de vista, está claro que ya no lo necesitan. ¿Podrá Beryl estar a la altura de su nueva posición? ¿Y alguna vez logrará disfrutar de un momento de tranquilidad lejos de sus adoradores estudiantes?",
    status: "Finalizado",
    type: "Anime",
    rating: 4.5,
    genres: ["Action", "Aventura", "Fantasia"],
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
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 1,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+1",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-1",
  },
  {
    id: "ep2",
    animeId: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 2,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+2",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-2",
  },
  {
    id: "ep3",
    animeId: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 3,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+3",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-3",
  },
  {
    id: "ep4",
    animeId: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 4,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+4",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-4",
  },
  {
    id: "ep5",
    animeId: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 5,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+5",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-5",
  },
  {
    id: "ep6",
    animeId: "1",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 6,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+6",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-6",
  },
];

export const MOCK_LATEST_ANIMES: Anime[] = [
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
  // ...Array.from({ length: 100 }).map((_, i) => {
  //   const id = `mock-${i + 10}`;
  //   const type = TYPES[i % TYPES.length];
  //   return {
  //     id,
  //     title: `Anime Mock Title ${i + 1}`,
  //     slug: `anime-mock-title-${i + 1}`,
  //     coverImage: `https://placehold.co/600x900/${Math.floor(
  //       Math.random() * 16777215
  //     ).toString(16)}/white?text=Anime+${i + 1}`,
  //     synopsis:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     status: STATUSES[i % STATUSES.length] as
  //       | "En emision"
  //       | "Finalizado"
  //       | "Proximamente",
  //     type: type as "Anime" | "Pelicula" | "OVA" | "Especial",
  //     rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // Rating between 3.0 and 5.0
  //     genres: [GENRES[i % GENRES.length], GENRES[(i + 5) % GENRES.length]],
  //   };
  // }),
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
