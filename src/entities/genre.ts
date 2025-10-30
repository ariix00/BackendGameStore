import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { GameGenre } from "./gameGenre";
export const GenreType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TITLE: "title",
} as const;
export type GenreType = (typeof GenreType)[keyof typeof GenreType];
export interface Genre extends BaseEntitySchema {
  name: string;
}
export interface GenreRelations {
  gameGenres: GameGenre[];
}

export const GenreEntity = new EntitySchema<Genre & GenreRelations>({
  name: "Genre",
  tableName: "genres",
  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
  },
  relations: {
    gameGenres: {
      type: "one-to-many",
      target: "gameGenres",
      inverseSide: "genre",
    },
  },
});
