import { UUID } from "crypto";
import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { Console } from "../entities/console";
import { Game } from "../entities/game";
import { GameGenre } from "../entities/gameGenre";
import { Genre } from "../entities/genre";
import { baseColumns } from "../utils/database/baseColumn";
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
} as const;
export type GenreType = (typeof GenreType)[keyof typeof GenreType];
interface GamesRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  genres: string[];
}

interface CreateGamesResponse {
  games: Game[];
  genres: Genre[];
  gameGenres: GameGenre[];
}
const playStationId = v4() as UUID;
const xboxId = v4() as UUID;
const nintendoId = v4() as UUID;
const consoles: Console[] = [
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

const nintendoSwitch: Console = {
  name: "NINTENDO SWITCH",
  ...baseColumns,
  id: v4() as UUID,
  platformId: nintendoId,
};

const arrayGamesNintendoSwitch: GamesRequest[] = [
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
  },
  {
    name: "Pokemon 2",
    description: "lorem ipsum comela wacho",
    price: 30000,
    stock: 20,
    genres: [
      GenreType.ACTION,
      GenreType.ANIME,
      GenreType.RPG,
      GenreType.STRATEGY,
    ],
  },
  {
    name: "Zelda",
    description: "La princesa Melda",
    price: 30000,
    stock: 20,
    genres: [GenreType.ACTION, GenreType.ANIME, GenreType.RPG, GenreType.ADULT],
  },
  {
    name: "Mario Kart",
    description: "zzz aguante Rushia",
    price: 30000,
    stock: 20,
    genres: [GenreType.RACING, GenreType.PLATFORM],
  },
];

const arrayGenres: string[] = [
  GenreType.ACTION,
  GenreType.ADULT,
  GenreType.ANIME,
  GenreType.ROMANCE,
  GenreType.RPG,
  GenreType.SHOOTER,
  GenreType.STRATEGY,
  GenreType.TERROR,
];
describe("prueba", () => {
  it("hola", () => {
    const createGames = (
      arrayGamesNintendoSwitch: GamesRequest[],
      nintendoSwitch: Console
    ): CreateGamesResponse => {
      const genres = createGenres(arrayGenres);
      const gameGenres: GameGenre[] = [];
      const NintendoSwitchGames: Game[] = arrayGamesNintendoSwitch.map(
        (game) => {
          const gameId = v4() as UUID;
          game.genres.forEach((genre) => {
            genres.forEach((g) => {
              if (genre == g.name) {
                gameGenres.push({
                  genreId: g.id,
                  gameId: gameId,
                  id: v4() as UUID,
                  ...baseColumns,
                });
              }
            });
          });
          return {
            name: game.name + " " + nintendoSwitch.name,
            ...baseColumns,
            description: game.description,
            id: gameId,

            price: game.price,
            stock: game.stock,
            consoleId: nintendoSwitch.id,
          };
        }
      );

      return {
        games: NintendoSwitchGames,
        genres: genres,
        gameGenres: gameGenres,
      };
    };

    const createGenres = (arrayGenres: string[]): Genre[] => {
      const genres = arrayGenres.map((name) => {
        return {
          name: name,
          id: v4() as UUID,
          ...baseColumns,
        };
      });
      return genres;
    };

    console.log(createGames(arrayGamesNintendoSwitch, nintendoSwitch));

    expect("number").toBe("number");
  });
});
