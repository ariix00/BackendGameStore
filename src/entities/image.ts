import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { GameImage } from "./gameImage";
export const ImageType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TITLE: "title",
} as const;
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

export interface Image extends BaseEntitySchema {
  url: string;
  type: ImageType;
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
    type: {
      type: "varchar",
      enum: ImageType,
    },
  },
  relations: {
    gameImages: {
      type: "one-to-many",
      target: "GameImage",
      inverseSide: "image",
    },
  },
});
