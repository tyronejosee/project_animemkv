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
    id: "019ac795-631e-71e2-b065-37428edf28b7",
    episodeId: "019ac798-2274-749d-9e5b-50a4ab670ba8",
    platform: "Streamwish",
    url: "https://streamwish.to/e/ifzp195fd6z7",
  },
  {
    id: "019ac795-9457-765d-b5af-31bfdacab509",
    episodeId: "019ac798-2298-711c-83e3-7a1e1bf596c2",
    platform: "Streamwish",
    url: "https://streamwish.to/e/dy3je8d4cqnh",
  },
  {
    id: "019ac795-94a9-71bc-baa2-55ba5e21c31c",
    episodeId: "019ac798-22b2-74a3-b6db-e7051ad89f74",
    platform: "Streamwish",
    url: "https://streamwish.to/e/f0041oz6n0ww",
  },
  {
    id: "019ac795-94c3-7563-aea1-d6304085b6d1",
    episodeId: "019ac798-22cb-76c3-9185-a375ffd453ee",
    platform: "Streamwish",
    url: "https://streamwish.to/e/d8y63cnllf7r",
  },
  {
    id: "019ac795-94dc-72c9-85ca-8b58a261529f",
    episodeId: "019ac798-22ec-720d-91ba-bead4c612d34",
    platform: "Streamwish",
    url: "https://streamwish.to/e/6kte5pmaankh",
  },
];

export const MOCK_FEATURED_ANIMES: Anime[] = [
  {
    id: "019ac796-2b7c-728e-a594-58a5d8f3936b",
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
    id: "019ac796-3937-7012-bfa5-e329c4dda650",
    title: "Clevatess: Majuu no Ou to Akago to Shikabane no Yuusha",
    slug: "clevatess-majuu-no-ou-to-akago-to-shikabane-no-yuusha",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4182.jpg",
    bannerImage:
      "https://anitousen.com/uploads/posts/2025-08/c01570375b_anitousen-clevatess-majuu-no-ou-to-akago-to-shikabane-no-yuusha-2025.jpg",
    synopsis:
      "El reinado de Clevatess, uno de los Señores de las Bestias Mágicas, se desmorona al revivir a un héroe al que él mismo mató y adoptar a un bebé humanoide huérfano: la última esperanza para salvar un mundo moribundo. Ahora unidos, ¿qué destino les espera a este improbable trío?",
    status: "Finalizado",
    type: "Anime",
    rating: 4.7,
    genres: ["Acción", "Fantasia"],
  },
  {
    id: "019ac7a1-9bbc-719a-bfbf-9a011d6ca662",
    title: "Mizu Zokusei no Mahoutsukai",
    slug: "mizu-zokusei-no-mahoutsukai",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4190.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4190.jpg",
    synopsis:
      "La reencarnación hacía soñar a Ryo con la paz, pero en su lugar se encuentra en un desierto infestado de monstruos. Gracias a la magia del agua y a su eterna juventud, sobrevive durante 20 años a innumerables maleficios y se convierte en uno de los magos más poderosos de la historia. El destino de Ryo cambia cuando conoce a Abel, un caballero excepcional, que lo coloca en el punto de mira de la sociedad mágica. Así comienza la trepidante aventura del Mago del Agua.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.3,
    genres: ["Acción", "Fantasia"],
  },
  {
    id: "019ac7a2-e63d-726b-b56b-641ea3688e15",
    title: "Dandadan 2nd Season",
    slug: "dandadan-2nd-season",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4188.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4188.jpg",
    synopsis:
      "Segunda temporada de Dandadan",
    status: "Finalizado",
    type: "Anime",
    rating: 4.7,
    genres: ["Acción", "Comedia", "Shounen", "Sobrenatural"],
  },
  {
    id: "019ac7c0-7260-7307-a278-12c529ca18a7",
    title: "The Unfavorable Job",
    alternativeTitles: [
      "Fuguushoku 'Kanteishi' ga Jitsu wa Saikyou Datta",
      "不遇職【鑑定士】が実は最強だった",
      "Even Given the Worthless",
    ],
    slug: "the-unfavorable-job",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4117.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4117.jpg",
    synopsis:
      "En un mundo donde los héroes nacen, no se forjan, el don divino de Ein es el más débil de todos: el poder de tasar las cosas. Maltratado por sus compañeros, Ein se pasa el día despreciándose a sí mismo hasta que conoce a Yuri, el espíritu del Árbol del Mundo. Yuri y su protectora, Úrsula, bendicen a Ein con el Ojo Espiritual, lo que le otorga una nueva fuerza. A medida que sus habilidades progresan, Ein se embarca en un viaje para descubrir su verdadero propósito.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.0,
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    id: "019ac7c5-cbed-70f8-b81f-a5e2ee444c33",
    title: "Farmagia",
    alternativeTitles: [
      "FARMAGIA（ファーマギア）",
    ],
    slug: "farmagia",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4122.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4122.jpg",
    synopsis:
      "En Felicidad, unos granjeros conocidos como los Farmagia crían monstruos bajo el pacífico gobierno del Magus Diluculum. Tras la muerte del Magus, estalla una lucha de poder entre fuerzas que utilizan monstruos para hacerse con el control. En la ciudad de Centvelt, el Farmagia Ten y sus amigos se unen para enfrentarse al nuevo y déspota gobernante, Glaza. Ten, sus amigos y los monstruos que han criado deberán mantenerse firmes para defender su libertad.",
    status: "Finalizado",
    type: "Anime",
    rating: 2.8,
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    id: "019ac7c9-bca9-72ae-a63a-60de66422c3b",
    title: "Sakamoto Days",
    slug: "sakamoto-days",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4125.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4125.jpg",
    synopsis:
      "Tarou Sakamoto fue considerado el mejor asesino a sueldo de todos los tiempos. Temido por muchos, estaba en la cima del mundo clandestino hasta que conoció y se enamoró de una mujer. Como resultado, Sakamoto abandonó su vida criminal y ahora trabaja como dependiente de una tienda. Dejar atrás su turbio pasado resulta más difícil de lo que Sakamoto imaginaba en un principio. Muchos de sus antiguos rivales y socios no creen que haya dejado realmente el negocio y aparecen con la esperanza de acabar con él. Con la prohibición de matar, Sakamoto deberá encontrar formas creativas de someter a sus enemigos y evitar que hagan daño a su familia, a su tienda y a la pequeña ciudad en la que vive.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.5,
    genres: ["Acción", "Comedia", "Shounen"],
  },
  {
    id: "019ac7cc-0dd2-748a-9c99-cabbc0a54393",
    title: "The Brilliant Healer's New Life in the Shadows",
    slug: "the-brilliant-healer-s-new-life-in-the-shadows",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4140.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4140.jpg",
    synopsis:
      "Zenos, un curandero autodidacta de los barrios bajos que ha sido desterrado por inútil, decide luchar contra la desesperación y abre una clínica clandestina en la ciudad. Con su incomparable magia sin licencia, cura, consuela y repara males, convirtiéndose discretamente en una leyenda. Pero a medida que aumenta su poder, comienza a llamar la atención del Palacio Real. ¿Podrá superar las adversidades y sanar a un mundo que lo marginó?",
    status: "Finalizado",
    type: "Anime",
    rating: 4.3,
    genres: ["Fantasía"],
  },
  {
    id: "019ac7cd-bcb8-7758-b512-5d04ab05d94e",
    title: "Kowloon Generic Romance",
    alternativeTitles: ["九龍ジェネリックロマンス"],
    slug: "kowloon-generic-romance",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4150.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4150.jpg",
    synopsis:
      "Los agentes inmobiliarios Reiko Kujirai y Hajime Kudo trabajan en la melancólica ciudad amurallada de Kowloon. A medida que comparten momentos en común, los sentimientos de Reiko por Hajime se intensifican. Pero cuando encuentra una foto de él con su antigua prometida, se sorprende al ver que aquella mujer es idéntica a ella. Reiko se da cuenta entonces de un escalofriante hecho: no recuerda nada de su pasado.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.3,
    genres: ["Ciencia Ficción", "Romance", "Seinen"],
  },
  {
    id: "019ac7d0-5005-74ca-8434-99a5d4d6980f",
    title: "Summer Pockets",
    alternativeTitles: [],
    slug: "summer-pockets",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4162.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4162.jpg",
    synopsis:
      "Hairi Takahara jamás habría imaginado que el verano sería como un sueño. Cuando lo envían a Torishirojima para ordenar las pertenencias de su difunta abuela, descubre un mar infinito, una nostalgia silenciosa y unas chicas enigmáticas que buscan algo que se escapa a su alcance. A medida que se adapta a la vida en la isla, los recuerdos perdidos empiezan a aflorar y encuentra lo que ni siquiera sabía que había perdido.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.0,
    genres: ["Recuentos de la vida"],
  },
  {
    id: "019ac7d2-1623-74cb-809e-4cd409e4da62",
    title: "The Children of Shiunji Family, The Shiunji Siblings",
    alternativeTitles: [
      "The Shiunji Family Children",
      "Shiunji-ke no Kodomotachi",
      "紫雲寺家の子供たち"
    ],
    slug: "the-children-of-shiunji-family-the-shiunji-siblings",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4165.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4165.jpg",
    synopsis:
      "La familia Shiunji y sus siete hijos residen en una mansión del barrio tokiota de Setagaya. El hijo mayor, Arata, está cansado de que sus cinco hermanas y fantasea con la posibilidad de vivir lejos de ellas. Sin embargo, el padre de Arata les revela algo sorprendente: ¡en realidad son todos adoptados! Con este nuevo dato sobre la mesa, las relaciones entre los hermanos cambiarán completamente.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.1,
    genres: ["Comedia", "Romance", "Seinen"],
  },
  {
    id: "019ac7d2-1623-74cb-809e-4cd409e4da62",
    title: "The Children of Shiunji Family, The Shiunji Siblings",
    alternativeTitles: [
      "The Shiunji Family Children",
      "Shiunji-ke no Kodomotachi",
      "紫雲寺家の子供たち"
    ],
    slug: "the-children-of-shiunji-family-the-shiunji-siblings",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4165.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4165.jpg",
    synopsis:
      "La familia Shiunji y sus siete hijos residen en una mansión del barrio tokiota de Setagaya. El hijo mayor, Arata, está cansado de que sus cinco hermanas y fantasea con la posibilidad de vivir lejos de ellas. Sin embargo, el padre de Arata les revela algo sorprendente: ¡en realidad son todos adoptados! Con este nuevo dato sobre la mesa, las relaciones entre los hermanos cambiarán completamente.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.1,
    genres: ["Comedia", "Romance", "Seinen"],
  },
  {
    id: "019ac7d5-fc89-75aa-99c2-01adb6476e9d",
    title: "Honey Lemon Soda",
    alternativeTitles: ["ハニーレモンソーダ"],
    slug: "honey-lemon-soda",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4114.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4114.jpg",
    synopsis:
      "Después de graduarse de la secundaria, donde sufrió bullying y le pusieron toda clase de apodos, Uka Ishimori está ansiosa por empezar de cero en la Preparatoria Hachimitsu. Kai Miura, un chico popular y extrovertido, se sienta a su lado en clase. Uka recuerda que ya había conocido a Kai en la secundaria y que, con una sola palabra, él la convenció de inscribirse en Hachimitsu. A pesar de su popularidad, Kai la apoya en su esfuerzo por encajar con sus nuevos compañeros de clase.",
    status: "Finalizado",
    type: "Anime",
    rating: 4.4,
    genres: ["Escolares", "Romance", "Shoujo"],
  },
  {
    id: "019ac7d7-dea4-7244-bafe-1fc3a35c24ad",
    title: "My Charms Are Wasted On Kuroiwa Medaka",
    alternativeTitles: [
      "Kuroiwa Medaka ni Watashi no Kawaii ga Tsuujinai",
      "Kuroiwa Medaka is Proof Against My Cuteness.",
      "Medaka Kuroiwa is Impervious to My Charms",
      "Medakawa",
      "黒岩メダカに私の可愛いが通じない",
    ],
    slug: "my-charms-are-wasted-on-kuroiwa-medaka",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4110.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4110.jpg",
    synopsis:
      "Para Kawai Mona, conquistar corazones es tan fácil como respirar… o al menos eso creía hasta que llegó Medaka Kuroiwa, el chico nuevo que ni siquiera la voltea a ver. De un día para otro, su vida en la escuela cambia por completo, porque jamás se había topado con alguien que no cayera rendido ante sus encantos. Pero Mona no está dispuesta a rendirse, y cuando decimos que hará de todo, es en serio: ¡llega a puntos tan extremos que no lo vas a creer! Prepárate para una comedia romántica llena de enredos protagonizada por la reina del colegio y un chico bien estoico que viene a romper con todas las reglas. ¡Te va a encantar!",
    status: "Finalizado",
    type: "Anime",
    rating: 4.0,
    genres: ["Comedia", "Escolares", "Romance"],
  },
];


export const MOCK_LATEST_ANIMES: Anime[] = [
  {
    id: "019acb22-cda3-7569-819d-62fb8c6232c7",
    title: "Dusk Beyond the End of the World",
    alternativeTitles: [
      "Towa no Yugure",
      "永遠のユウグレ",
    ],
    slug: "dusk-beyond-the-end-of-the-world",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4237.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4237.jpg",
    synopsis:
      "Después de despertarse de un largo sueño criogénico, el estudiante de secundaria Akira Himegami se encuentra en un mundo que ya no reconoce. La ciudad está en ruinas debido a la guerra, la sociedad ahora está gobernada por una organización llamada OWEL, y el matrimonio tradicional ha sido reemplazado por un nuevo sistema conocido como 'Elsie'. Mientras Akira lucha por comprender este futuro drásticamente cambiado, una figura familiar aparece ante él: Yuugure, que guarda un fuerte parecido con su novia Towasa. Para su sorpresa, Yuugure sonríe suavemente y propone: 'Akira... por favor cásate conmigo.' Confundido por su repentina propuesta, Akira acepta viajar con Yuugure, aferrándose a la esperanza de que en algún lugar de este mundo, la verdadera Towasa todavía esté viva. A lo largo de su viaje, encuentran las formas cambiantes del amor en esta nueva era y reflexionan sobre lo que realmente significa su vínculo.",
    status: "En emision",
    type: "Anime",
    rating: 4.1,
    genres: ["Ciencia Ficción", "Romance"],
  },
  {
    id: "019acb29-47cf-73b5-a9c8-42a16fd66cb3",
    title: "Gachiakuta",
    alternativeTitles: ["ガチアクタ"],
    slug: "gachiakuta",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4209.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4209.jpg",
    synopsis:
      "En una ciudad flotante donde los ricos se deshacen de su basura y de las personas, a Ludo lo acusan de asesinato y lo arrojan al Abismo, un infierno habitado por las bestias de la basura. Para sobrevivir, deberá hacer uso de un nuevo poder y unirse a los Limpiadores. El objetivo de Ludo no es solo acabar con los monstruos, sino también con aquellos que lo arrojaron al Infierno.",
    status: "En emision",
    type: "Anime",
    rating: 4.1,
    genres: ["Acción", "Fantasía", "Shounen"],
  },
  {
    id: "019acb29-5d3d-7184-9ddf-0c911f222250",
    title: "Campfire Cooking in Another World with My Absurd Skill Season 2",
    alternativeTitles: [
      "とんでもスキルで異世界放浪メシ2",
      "Regarding the Display of an Outrageous Skill Which Has Incredible Powers, Tonsuki"
    ],
    slug: "campfire-cooking-in-another-world-with-my-absurd-skill-season-2",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4266.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4266.jpg",
    synopsis:
      "Segunda temporada de Tondemo Skill de Isekai Hourou Meshi.",
    status: "En emision",
    type: "Anime",
    rating: 4.6,
    genres: ["Aventura", "Comedia", "Fantasía"],
  },
  {
    id: "019acb2d-4a92-7447-9dd5-544e23f03128",
    title: "Chitose Is in the Ramune Bottle",
    alternativeTitles: [
      "Chitose-kun wa Ramune Bin no Naka",
      "Chiramune",
      "Chitose-kun is Inside a Ramune Bottle",
      "Ramune no Bin ni Shizunda Biidama no Tsuki",
      "千歳くんはラムネ瓶のなか"
    ],
    slug: "chitose-is-in-the-ramune-bottle",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4265.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4265.jpg",
    synopsis:
      "Los insultos dirigidos a Saku Chitose son pan de cada día. Apodado 'el mujeriego sinvergüenza de la Clase 5', es constantemente difamado en línea por aquellos que sienten celos de su popularidad. Afortunadamente, esto apenas afecta la confianza de Saku. Fuera de los foros de internet de nicho, es la figura respetable que sus compañeros admiran y un estudiante modelo en quien sus profesores confían. Con el inicio de su segundo año de preparatoria, Saku se reúne con sus viejos amigos y hace nuevos, todos pertenecientes a la élite social de la escuela. Sin embargo, la diversión se ve interrumpida cuando el profesor tutor de Saku le pide que convenza a su compañero de clase recluso, Kenta Yamazaki, para que regrese a la escuela. Deseando resolver las cosas rápidamente, Saku visita la casa de Kenta al día siguiente. Pero la tarea resulta ser más desafiante de lo que esperaba cuando descubre que Kenta está completamente en contra de Saku. Si quiere preservar su impecable imagen, Saku debe encontrar la manera de ganarse a Kenta y llevarlo de vuelta a la escuela.",
    status: "En emision",
    type: "Anime",
    rating: 3.8,
    genres: ["Comedia", "Escolares", "Harem", "Romance"],
  },
  {
    id: "019acb30-1a6b-7606-ab75-3ee93d7bd24b",
    title: "My Status as an Assassin Obviously Exceeds the Hero's",
    alternativeTitles: [
      "Ansatsusha de Aru Ore no Status ga Yuusha yori mo Akiraka ni Tsuyoi no da ga",
      "Sutetsuyo",
      "暗殺者である俺のステータスが勇者よりも明らかに強いのだが"
    ],
    slug: "my-status-as-an-assassin-obviously-exceeds-the-hero-s",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4264.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4264.jpg",
    synopsis:
      "Oda Akira es el tipo de persona que la gente olvida que está presente. Sin embargo, su naturaleza discreta tiene sus beneficios cuando toda su clase es transportada a un mundo de fantasía, y él se adapta fácilmente a su nuevo rol como un asesino silencioso. Con sus sospechosamente altas estadísticas iniciales y demasiados detalles que no encajan, Akira está seguro de que algo no anda bien. Pero indagar en secretos reales es un juego peligroso, y cuando Akira descubre un plan maligno, también se hace un poderoso enemigo: ¡el mismo rey que lo trajo a este mundo! Con la ayuda de la medium elfa Amelia, ¿podrá encontrar el poder para poner las cosas en su lugar y vengarse?.",
    status: "En emision",
    type: "Anime",
    rating: 4.4,
    genres: ["Acción", "Aventuras", "Fantasía"],
  },
  {
    id: "019acb32-a196-7353-b350-3b435f7346d0",
    title: "The Dark History of the Reincarnated Villainess",
    alternativeTitles: [
      "Tensei Akujo no Kuro Rekishi",
      "The Reincarnated Villainess' Dark History, Tenkuro",
      "転生悪女の黒歴史"
    ],
    slug: "the-dark-history-of-the-reincarnated-villainess",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4269.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4269.jpg",
    synopsis:
      "Konoha Satou tiene un oscuro pasado. Después de todo, pasó sus años de adolescencia escribiendo fics de romance de fantasía indulgentes, como su Oscura Historia. Pero desde que se ha convertido en la villana más despreciable, recordar cada último detalle se ha vuelto una cuestión de vida o muerte. Después de haber evitado las primeras banderas de muerte, Satou se encuentra de repente a oscuras cuando un extraño misterioso regresa del Reino de Lily, un personaje que no recuerda haber escrito en el guion original. Aunque Yomi afirma ser su aliada, ¿puede realmente Satou confiar en un personaje del que no sabe nada en un mundo tan peligroso?.",
    status: "En emision",
    type: "Anime",
    rating: 3.8,
    genres: ["Comedia", "Romance", "Shoujo"],
  },
  {
    id: "019acb4f-90c8-76b8-bc98-32f1b8fa548e",
    title: "Wandance",
    alternativeTitles: ["ワンダンス"],
    slug: "wandance",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4268.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4268.jpg",
    synopsis:
      "Kaboku Kotani está comenzando la preparatoria, y planea hacer lo que siempre ha hecho: acompañar a sus amigos, mantenerse en silencio y no llamar demasiado la atención sobre sí mismo. Después de todo, ya es lo suficientemente difícil salir adelante con un tartamudeo como el suyo: ¿por qué empeorar las cosas destacándose entre la multitud? Pero luego ve a otra estudiante de primer año, Hikari Wanda, bailando como si nadie la estuviera mirando, o como si no le importara quién la vea. Esto hace que a Kaboku le surja una pregunta: ¿Podría alcanzar esa misma libertad? Para acercarse a Wanda, hace algo que nunca pensó que podría hacer: se une al club de baile. Después de todo, cada rutina comienza con un solo paso, ¿verdad? ¡Únete a Kaboku y Wanda mientras improvisan su camino hacia la vida y el amor!.",
    status: "En emision",
    type: "Anime",
    rating: 3.2,
    genres: ["Deportes", "Escolares", "Seinen"],
  },
  {
    id: "019acb55-42e5-755a-916c-f3d90310316a",
    title: "Mechanical Marie",
    alternativeTitles: [
      "Kikaijikake no Marie",
      "機械じかけのマリー"
    ],
    slug: "mechanical-marie",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4256.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4256.jpg",
    synopsis:
      "Rico, guapo y exitoso, Arthur Louis Zetes no es ajeno a la codicia de las personas. Constantemente dudando de quienes lo rodean, no tiene fe en la humanidad; por lo tanto, hace una solicitud para tener la sirvienta perfecta: una sirvienta robot. Sin embargo, su mayordomo no puede conseguir tal sirviente debido a limitaciones tecnológicas, así que encuentra el siguiente mejor sustituto. Marie Evans es una ex prodigio infantil en artes marciales conocida por su falta de expresión. Ahogada en deudas, acepta de buen grado la oferta de ser una sirvienta que actúa como un robot. Mientras Arthur suele ser brusco con los humanos, no puede evitar mimar a su robot personal; a su vez, Marie se siente conmovida por su determinación y consideración hacia ella.",
    status: "En emision",
    type: "Anime",
    rating: 4.3,
    genres: ["Comedia", "Romance", "Shoujo"],
  },
  {
    id: "019acb57-fe20-7193-94e6-e3e9d284986d",
    title: "Watari-kun's ****** Is about to Collapse",
    alternativeTitles: [
      "Watari-kun no xx ga Houkai Sunzen",
      "Watari's XX Is on the Brink of Collapse, Watari-kun's ****** Is about to Collapse",
      "渡くんの××が崩壊寸前"
    ],
    slug: "watari-kun-s-xxxxxx-is-about-to-collapse",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4192.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4192.jpg",
    synopsis:
      "Naoto Watari vive dedicado por completo a su hermana menor, Suzushiro, hasta que su caótica amiga de la infancia, Satsuki, irrumpe de nuevo en su vida. Sin pronunciar una sola palabra, su sola presencia despierta recuerdos olvidados y destroza su estricta rutina. A medida que crece la tensión y afloran los secretos, la devoción de Naoto por Suzushiro colisiona con el dolor acumulado, amenazando con derrumbar su frágil mundo.",
    status: "En emision",
    type: "Anime",
    rating: 4.1,
    genres: ["Comedia", "Drama", "Escolares", "Romance", "Seinen"],
  },
  {
    id: "019acb5c-d4af-703a-8261-a1c844e3ea52",
    title: "Inexpressive Kashiwada and Expressive Oota",
    alternativeTitles: [
      "Kao ni Denai Kashiwada-san to Kao ni Deru Oota-kun",
      "Expressionless Face Girl & Emotional Face Boy",
      "顔に出ない柏田さんと顔に出る太田君"
    ],
    slug: "inexpressive-kashiwada-and-expressive-oota",
    coverImage:
      "https://www3.animeflv.net/uploads/animes/covers/4243.jpg",
    bannerImage:
      "https://www3.animeflv.net/uploads/animes/covers/4243.jpg",
    synopsis:
      "Con una sonrisa de satisfacción, Oota hace caso omiso de sus calificaciones de un solo dígito en los exámenes y busca una nueva fuente de diversión. Pronto se siente cautivado por su compañera de clase Kashiwada, una misteriosa estudiante que siempre lleva el rostro inexpresivo. Oota conspira para romper su plácida conducta mediante sustos y planes traviesos, aunque sus tácticas siempre parecen fracasar. Oota es conocido como el payaso de la clase y es constantemente disciplinado por su profesor, que afirma que «su cara lo delata». Sin tener la culpa, no controla sus emociones ni sus expresiones faciales. Kashiwada, por su parte, parece siempre indiferente e ilegible: ¡nadie sabe lo que está pensando! Oota y Kashiwada son completamente opuestos, pero eso no impide que se desarrolle entre ellos una relación única. Cuando se dan cuenta de lo que sienten el uno por el otro, surge una pregunta importante: ¿se atraen realmente los polos opuestos?.",
    status: "En emision",
    type: "Anime",
    rating: 3.7,
    genres: ["Comedia", "Escolares", "Romance"],
  },
];

export const MOCK_EPISODES: Episode[] = [
  {
    id: "019ac798-2274-749d-9e5b-50a4ab670ba8",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 1,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+1",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-1",
  },
  {
    id: "019ac798-2298-711c-83e3-7a1e1bf596c2",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 2,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+2",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-2",
  },
  {
    id: "019ac798-22b2-74a3-b6db-e7051ad89f74",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 3,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+3",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-3",
  },
  {
    id: "019ac798-22cb-76c3-9185-a375ffd453ee",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 4,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+4",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-4",
  },
  {
    id: "019ac798-22e5-749a-bd71-6aa8fc439f15",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 5,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+5",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-5",
  },
  {
    id: "019ac798-22ec-720d-91ba-bead4c612d34",
    animeId: "019ac796-2b7c-728e-a594-58a5d8f3936b",
    title: "Katainaka no Ossan, Kensei ni Naru",
    number: 6,
    image: "https://placehold.co/320x180/00aaff/white?text=Katainaka+6",
    url: "/ver/katainaka-no-ossan-kensei-ni-naru-6",
  },
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
