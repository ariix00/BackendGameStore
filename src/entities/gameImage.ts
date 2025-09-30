import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { Game } from "./game";
import { Image } from "./image";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";

export interface GameImage extends BaseEntitySchema {
  gameId: string;
  imageId: string;
}

export interface GameImageRelations {
  game: Game;
  image: Image;
}

export const GameImageEntity = new EntitySchema<GameImage & GameImageRelations>(
  {
    name: "GameImage",
    tableName: "gameImages",
    columns: {
      ...baseColumnSchema,
      gameId: {
        type: "uuid",
      },
      imageId: {
        type: "uuid",
      },
    },
    relations: {
      image: {
        type: "many-to-one",
        target: "images",
        joinColumn: {
          name: "imageId",
        },
      },
      game: {
        type: "many-to-one",
        target: "games",
        joinColumn: {
          name: "gameId",
        },
      },
    },
  }
);
