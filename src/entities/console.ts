import { EntitySchema } from "typeorm";
import { GameConsole } from "./gameConsole";

export interface Console {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ConsoleRelations {
  gameConsole: GameConsole[];
}

export const ConsoleEntity = new EntitySchema<Console & ConsoleRelations>({
  name: "Console",
  tableName: "consoles",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    name: {
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
      inverseSide: "console",
    },
  },
});
