import { UUID } from "crypto";
import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { GameGenre } from "./gameGenre";
import { GameImage } from "./gameImage";

export interface Game extends BaseEntitySchema {
  name: string;
  description: string;
  price: number;
  stock: number;
  consoleId: UUID;
}
export interface GameRelations {
  gameImages: GameImage[];
  gameGenres: GameGenre[];
  console: Console;
}

export const GameEntity = new EntitySchema<Game & GameRelations>({
  name: "Game",
  tableName: "games",
  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
    description: {
      type: "varchar",
    },
    price: {
      type: "varchar",
    },
    stock: {
      type: "varchar",
    },
    consoleId: {
      type: "uuid",
    },
  },
  relations: {
    gameImages: {
      type: "one-to-many",
      target: "GameImage",
      inverseSide: "game",
    },
    gameGenres: {
      type: "one-to-many",
      target: "GameGenre",
      inverseSide: "game",
    },
    console: {
      type: "many-to-one",
      target: "Console",
      inverseSide: "game",
    },
  },
});
