import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { Game } from "./game";
import { Genre } from "./genre";

export interface GameGenre extends BaseEntitySchema {
  gameId: string;
  genreId: string;
}

export interface GameGenreRelations {
  game: Game;
  genre: Genre;
}

export const GameGenreEntity = new EntitySchema<GameGenre & GameGenreRelations>(
  {
    name: "GameGenre",
    tableName: "gameGenres",
    columns: {
      ...baseColumnSchema,
      gameId: {
        type: "uuid",
      },
      genreId: {
        type: "uuid",
      },
    },
    relations: {
      genre: {
        type: "many-to-one",
        target: "genres",
        joinColumn: {
          name: "genreId",
        },
      },
      game: {
        type: "many-to-one",
        target: "games",
        joinColumn: {
          name: "gameId",
        },
      },
    },
  }
);
