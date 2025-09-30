import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { GameConsole } from "./gameConsole";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";

export interface Game extends BaseEntitySchema {
  name: string;
  description: string;
}
export interface GameRelations {
  gameConsole: GameConsole[];
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
  },
  relations: {
    gameConsole: {
      type: "one-to-many",
      target: "gameConsoles",
      inverseSide: "game",
    },
  },
});
