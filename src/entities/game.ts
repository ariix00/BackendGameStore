import { EntitySchema } from "typeorm";
import { GameConsole } from "./gameConsole";

export interface Game {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GameRelations {
  gameConsole: GameConsole[];
}

export const GameEntity = new EntitySchema<Game & GameRelations>({
  name: "Game",
  tableName: "games",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    name: {
      type: "varchar",
    },
    description: {
      type: "varchar",
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
    gameConsole: {
      type: "one-to-many",
      target: "gameConsoles",
      inverseSide: "game",
    },
  },
});
