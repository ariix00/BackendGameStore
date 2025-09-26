import { EntitySchema } from "typeorm";
import { Game } from "./game";

export interface GameConsole {
  id: string;
  gameId: string;
  consoleId: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
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
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
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
    createdAt: {
      type: "datetime",
      createDate: true,
    },
    updatedAt: {
      type: "datetime",
      updateDate: true,
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
