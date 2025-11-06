import { UUID } from "crypto";
import { v4 } from "uuid";
import { Console } from "../entities/console";
import { ImageType } from "../entities/image";
import { baseColumns } from "../utils/database/baseColumn";
import { GameData } from "./generate-game-function";
export const GenreType = {
  ACTION: "Acción",
  ROMANCE: "Romance",
  RPG: "RPG",
  ANIME: "Anime",
  TERROR: "Terror",
  SHOOTER: "Disparos",
  ADULT: "Adultos",
  STRATEGY: "Estrategia",
  PLATFORM: "Plataforma",
  RACING: "Carreras",
  CARD: "Cartas",
  VIOLENCE: "Violencia",
  ADVENTURE: "Aventura",
  HEROES: "Héroes",
  FIGHT: "Pelea",
  FANTASY: "Fantasy",
} as const;
export type GenreType = (typeof GenreType)[keyof typeof GenreType];

export const arrayGamesNintendoSwitch: GameData[] = [
  {
    name: "Pokemon Scarlett",
    description: "lorem ipsum comela wacho",
    price: 30000,
    stock: 20,
    genres: [
      GenreType.ACTION,
      GenreType.ANIME,
      GenreType.RPG,
      GenreType.STRATEGY,
    ],
    images: [
      {
        url: "https://archives.bulbagarden.net/media/upload/thumb/c/ca/Scarlet_JP_boxart.png/200px-Scarlet_JP_boxart.png",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://images3.alphacoders.com/128/thumb-1920-1289473.png",
        type: ImageType.SECONDARY,
      },
    ],
  },
  {
    name: "Persona 5",
    description:
      "Vive una doble vida como estudiante y ladrón fantasma. Persona 5 combina estilo, música inolvidable y combates estratégicos en una historia sobre rebelión y libertad.",
    price: 45000,
    stock: 20,
    genres: [
      GenreType.ACTION,
      GenreType.ANIME,
      GenreType.RPG,
      GenreType.STRATEGY,
    ],
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81--2UBmfgL._SL1499_.jpg",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://pbs.twimg.com/media/C1lczSnXgAAvoCY.jpg",
        type: ImageType.SECONDARY,
      },
      {
        url: "https://uploadc.wikimedia.org/wikipedia/commons/thumb/c/cd/Persona_5_logo.svg/1200px-Persona_5_logo.svg.png",
        type: ImageType.TITLE,
      },
    ],
  },
  {
    name: "Zelda",
    description: "La princesa Melda",
    price: 56000,
    stock: 20,
    genres: [
      GenreType.ACTION,
      GenreType.ANIME,
      GenreType.RPG,
      GenreType.ADULT,
      GenreType.RACING,
    ],
    images: [
      {
        url: "https://acdn-us.mitiendanube.com/stores/001/880/465/products/the-legend-of-zelda-breath-of-the-wild1-043cfb923ce7e875bd16702672410896-240-0.jpg",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://media.vandal.net/m/5-2023/20235223395250_1.jpg",
        type: ImageType.SECONDARY,
      },
    ],
  },
  {
    name: "Mario Kart",
    description: "zzz aguante Rushia",
    price: 85000,
    stock: 20,
    genres: [GenreType.RACING, GenreType.PLATFORM],
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71jZAGKRAQL.jpg",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453",
        type: ImageType.SECONDARY,
      },
    ],
  },
];
export const arrayGamesPS4: GameData[] = [
  {
    name: "Resident Evil 4 Remake",
    description:
      "Terror, acción y supervivencia. Resident Evil 4 Remake renace con gráficos de última generación y una historia que te atrapará desde el primer momento",
    price: 45000,
    stock: 15,
    genres: [
      GenreType.ACTION,
      GenreType.TERROR,
      GenreType.SHOOTER,
      GenreType.VIOLENCE,
    ],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://juegosdigitaleselsalvador.com/files/images/productos/1679605772-resident-evil-4-remake-ps4-pre-orden-0.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://media.revistagq.com/photos/63e9f744df9a2fddd35517c5/16:9/w_1904,h_1071,c_limit/resident-evil-4-remake.jpeg",
      },
    ],
  },
  {
    name: "Persona 5",
    description:
      "Vive una doble vida como estudiante y ladrón fantasma. Persona 5 combina estilo, música inolvidable y combates estratégicos en una historia sobre rebelión y libertad.",
    price: 45000,
    stock: 20,
    genres: [
      GenreType.ACTION,
      GenreType.ANIME,
      GenreType.RPG,
      GenreType.STRATEGY,
    ],
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81BgoNw+WuL._SL1500_.jpg",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://pbs.twimg.com/media/C1lczSnXgAAvoCY.jpg",
        type: ImageType.SECONDARY,
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Persona_5_logo.svg/437px-Persona_5_logo.svg.png",
        type: ImageType.TITLE,
      },
    ],
  },
  {
    name: "God Of War",
    description:
      "Kratos inicia una nueva era en los reinos nórdicos. God of War combina acción brutal, una historia profunda y una conexión padre e hijo que redefine la saga.",
    price: 50000,
    stock: 32,
    genres: [GenreType.ACTION, GenreType.ADVENTURE, GenreType.VIOLENCE],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://images.fravega.com/f1000/c0874323ce51126233ddc260f0044ec3.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://media.vandal.net/i/640x360/3-2023/20233520332817_1.jpg",
      },
    ],
  },
  {
    name: "Spiderman",
    description:
      "Balanceate por Nueva York como nunca antes. Marvel’s Spider-Man combina acción, emoción y una historia épica que muestra el lado más humano del héroe arácnido.",
    price: 45000,
    stock: 17,
    genres: [
      GenreType.ACTION,
      GenreType.ADVENTURE,
      GenreType.FIGHT,
      GenreType.HEROES,
    ],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://juegosdigitalesargentina.com/files/images/thumbs/productos_300x400_1629828562-marvels-spider-man-game-of-the-year-edition-ps4.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://media.vandal.net/m/9-2018/20189291748_1.jpg",
      },
    ],
  },
  {
    name: "Minecraft",
    description:
      "Crea, explora y sobrevive en un mundo infinito. Minecraft te da la libertad de construir tus sueños, enfrentarte a criaturas y vivir tu propia aventura sin límites.",
    price: 30000,
    stock: 26,
    genres: [GenreType.ADVENTURE],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://acdn-us.mitiendanube.com/stores/361/025/products/minecraft-ps41-8ba9a1d31e84f1b20915124448772740-640-0.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg",
      },
    ],
  },
  {
    name: "WWE 2k15",
    description:
      "El ring cobra vida como nunca antes. WWE 2K15 ofrece gráficos realistas, movimientos auténticos y la emoción del espectáculo más grande del entretenimiento deportivo.",
    price: 25000,
    stock: 15,
    genres: [GenreType.ACTION, GenreType.FIGHT],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://m.media-amazon.com/images/I/91954607dqL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2014/11/414328-analisis-wwe-2k15-ps4-xbox-one.png?tf=3840x",
      },
    ],
  },
];
export const arrayGamesXboxOne: GameData[] = [
  {
    name: "Grand Theft Auto V",
    description:
      "Vive la ciudad de Los Santos a tu manera. GTA V combina acción, crimen y libertad total en un mundo abierto lleno de oportunidades… y caos.",
    price: 35000,
    stock: 27,
    genres: [
      GenreType.ACTION,
      GenreType.ADULT,
      GenreType.RACING,
      GenreType.SHOOTER,
      GenreType.VIOLENCE,
    ],
    images: [
      {
        url: "https://i5.walmartimages.com/seo/Grand-Theft-Auto-V-Rockstar-Games-Xbox-One_a08b5daf-e50b-4be7-b1f8-4ccffb7385dd.4cd1f7d576eedb0f098c37c612fed4f2.jpeg",
        type: ImageType.PRIMARY,
      },
      {
        url: "https://articles-img.sftcdn.net/t_article_cover_s/auto-mapping-folder/sites/2/2015/04/GTAV-Review.jpg",
        type: ImageType.SECONDARY,
      },
    ],
  },
  {
    name: "Elden Ring",
    description:
      "Explora un mundo vasto y misterioso creado por FromSoftware. Elden Ring mezcla libertad, desafío y belleza en una aventura digna de los más valientes.",
    price: 40000,
    stock: 24,
    genres: [GenreType.FIGHT, GenreType.RPG, GenreType.VIOLENCE],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://ps4digitalargentina.com/files/images/productos/1648510669-elden-ring-xbox-one-0.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/08/elden-ring-2430515.jpg?tf=3840x",
      },
    ],
  },

  {
    name: "FARCRY 6",
    description:
      "Libera una isla oprimida bajo el poder de un dictador. Far Cry 6 combina acción explosiva, paisajes impresionantes y una historia de revolución y resistencia.",
    price: 40000,
    stock: 25,
    genres: [GenreType.SHOOTER, GenreType.ACTION, GenreType.VIOLENCE],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://store-images.s-microsoft.com/image/apps.30958.14115267245615103.909c4994-a3a7-4ec1-9547-d0f41c2110be.13fa40c7-bf8c-4f27-9edc-753b2ce38569",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://hips.hearstapps.com/hmg-prod/images/far-cry-6-3-1633518180.jpg?crop=1xw:0.974676724137931xh;0,0",
      },
    ],
  },
  {
    name: "Hogwarts Legacy",
    description: "",
    price: 54000,
    stock: 34,
    genres: [GenreType.ADVENTURE, GenreType.RPG, GenreType.FANTASY],
    images: [
      {
        type: ImageType.PRIMARY,
        url: "https://cms.gameflycdn.com/proxy/gf/boxart/320w/5035301.jpg",
      },
      {
        type: ImageType.SECONDARY,
        url: "https://store-images.s-microsoft.com/image/apps.38223.13814785456466922.0fef76f8-710d-4aca-b42f-c45e536f8d2b.0570d0b7-cf5e-4106-84d7-fa031e67d49f?q=90&w=480&h=270",
      },
    ],
  },
];

export const playStationId = v4() as UUID;
export const xboxId = v4() as UUID;
export const nintendoId = v4() as UUID;

export const consoles: Console[] = [
  {
    name: "PS4",
    ...baseColumns,
    id: v4() as UUID,
    platformId: playStationId,
  },
  {
    name: "PS5",
    ...baseColumns,
    id: v4() as UUID,
    platformId: playStationId,
  },
  {
    name: "XBOX ONE",
    ...baseColumns,
    id: v4() as UUID,
    platformId: xboxId,
  },
  {
    name: "NINTENDO SWITCH",
    ...baseColumns,
    id: v4() as UUID,
    platformId: nintendoId,
  },
];

export const nintendoSwitch: Console = {
  name: "NINTENDO SWITCH",
  ...baseColumns,
  id: v4() as UUID,
  platformId: nintendoId,
};

export const arrayGenres: GenreType[] = [
  GenreType.ACTION,
  GenreType.ADULT,
  GenreType.ANIME,
  GenreType.ROMANCE,
  GenreType.RPG,
  GenreType.SHOOTER,
  GenreType.STRATEGY,
  GenreType.TERROR,
  GenreType.RACING,
  GenreType.PLATFORM,
  GenreType.CARD,
  GenreType.ADVENTURE,
  GenreType.VIOLENCE,
  GenreType.HEROES,
  GenreType.FIGHT,
  GenreType.FANTASY,
];

export interface ImageData {
  url: string;
  type: ImageType;
}
