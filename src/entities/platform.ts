import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";

export interface Platform extends BaseEntitySchema {
  name: string;
  url: string;
}
export interface PlatformRelations {
  consoles: Console;
}

export const PlatformEntity = new EntitySchema<Platform & PlatformRelations>({
  name: "Platform",
  tableName: "platforms",

  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
    url: {
      type: "varchar",
    },
  },
  relations: {
    consoles: {
      type: "one-to-many",
      target: "consoles",
      inverseSide: "platform",
    },
  },
});
