import { UUID } from "crypto";
import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { Game } from "./game";
export const ImageType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TITLE: "title",
} as const;
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

export interface Image extends BaseEntitySchema {
  url: string;
  type: ImageType;
  gameId: UUID;
}

export interface ImageRelations {
  game: Game;
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
    gameId: {
      type: "uuid",
    },
  },
  relations: {
    game: {
      type: "many-to-one",
      target: "Game",
      inverseSide: "image",
    },
  },
});
