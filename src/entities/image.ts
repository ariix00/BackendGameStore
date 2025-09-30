import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { GameImage } from "./gameImage";

export interface Image extends BaseEntitySchema {
  url: string;
}

export interface ImageRelations {
  gameImages: GameImage[];
}

export const ImageEntity = new EntitySchema<Image & ImageRelations>({
  name: "Image",
  tableName: "images",
  columns: {
    ...baseColumnSchema,
    url: {
      type: "varchar",
    },
  },
  relations: {
    gameImages: {
      type: "one-to-many",
      target: "gameImages",
      inverseSide: "images",
    },
  },
});
