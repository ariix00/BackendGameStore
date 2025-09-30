import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { Game } from "./game";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";

export interface GameConsole extends BaseEntitySchema {
  gameId: string;
  consoleId: string;
  price: number;
  stock: number;
}

export interface GameConsoleRelations {
  game: Game;
  console: Console;
}

export const GameConsoleEntity = new EntitySchema<
  GameConsole & GameConsoleRelations
>({
  name: "GameConsole",
  tableName: "gameConsoles",
  columns: {
    ...baseColumnSchema,
    gameId: {
      type: "uuid",
    },
    consoleId: {
      type: "uuid",
    },
    price: {
      type: "float",
    },
    stock: {
      type: "int",
    },
  },
  relations: {
    console: {
      type: "many-to-one",
      target: "consoles",
      joinColumn: {
        name: "consoleId",
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
});
