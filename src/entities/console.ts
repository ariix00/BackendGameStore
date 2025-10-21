import { UUID } from "crypto";
import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { Game } from "./game";
import { Platform } from "./platform";

export interface Console extends BaseEntitySchema {
  name: string;
  platformId: UUID;
}
export interface ConsoleRelations {
  platform: Platform;
  games: Game[];
}

export const ConsoleEntity = new EntitySchema<Console & ConsoleRelations>({
  name: "Console",
  tableName: "consoles",

  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
    platformId: {
      type: "uuid",
    },
  },
  relations: {
    platform: {
      type: "many-to-one",
      target: "Platform",
      inverseSide: "consoles",
    },
    games: {
      type: "one-to-many",
      target: "Game",
      inverseSide: "console",
    },
  },
});
