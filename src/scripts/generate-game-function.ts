import { UUID } from "crypto";
import { v4 } from "uuid";
import { Console } from "../entities/console";
import { Game } from "../entities/game";
import { GameGenre } from "../entities/gameGenre";
import { Genre } from "../entities/genre";
import { Image } from "../entities/image";
import { baseColumns } from "../utils/database/baseColumn";
import { GenreType, ImageData } from "./seeds-data";

export interface GameRequest {
  arrayGames: GameData[];
  console: Console;
  arrayGenres: Genre[];
}

export interface GameData {
  name: string;
  description: string;
  price: number;
  stock: number;
  genres: GenreType[];
  images?: ImageData[];
}

export interface CreateGamesResponse {
  games: Game[];

  gameGenres: GameGenre[];
  gameImages: Image[];
}

export const createGames = (gameRequest: GameRequest): CreateGamesResponse => {
  const gameGenres: GameGenre[] = [];
  const gameImages: Image[] = [];
  const games: Game[] = gameRequest.arrayGames.map((game) => {
    const gameId = v4() as UUID;
    game.genres.forEach(
      (genre) => {
        gameRequest.arrayGenres.forEach((g) => {
          if (genre == g.name) {
            gameGenres.push({
              genreId: g.id,
              gameId: gameId,
              id: v4() as UUID,
              ...baseColumns,
            });
          }
        });
      },
      game.images?.forEach((image) => {
        gameImages.push({
          gameId: gameId,
          ...baseColumns,
          id: v4() as UUID,
          type: image.type,
          url: image.url,
        });
      })
    );
    return {
      name: game.name + " " + gameRequest.console.name,
      ...baseColumns,
      description: game.description,
      id: gameId,

      price: game.price,
      stock: game.stock,
      consoleId: gameRequest.console.id,
    };
  });

  return {
    games: games,

    gameGenres: gameGenres,
    gameImages: gameImages,
  };
};

export const createGenres = (arrayGenres: GenreType[]): Genre[] => {
  const genres = arrayGenres.map((name) => {
    return {
      name: name,
      id: v4() as UUID,
      ...baseColumns,
    };
  });
  return genres;
};
