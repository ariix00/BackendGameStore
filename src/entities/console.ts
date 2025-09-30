import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { GameConsole } from "./gameConsole";

export interface Console extends BaseEntitySchema {
  name: string;
}
export interface ConsoleRelations {
  gameConsole: GameConsole[];
}

export const ConsoleEntity = new EntitySchema<Console & ConsoleRelations>({
  name: "Console",
  tableName: "consoles",

  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
  },
  relations: {
    gameConsole: {
      type: "one-to-many",
      target: "gameConsoles",
      inverseSide: "console",
      onDelete: "CASCADE",
    },
  },
});
