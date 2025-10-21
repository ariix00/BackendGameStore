import { UUID } from "crypto";
import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";
import { Game } from "./game";
import { Image } from "./image";

export interface GameImage extends BaseEntitySchema {
  gameId: UUID;
  imageId: UUID;
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
        target: "Image",
        joinColumn: {
          name: "imageId",
        },
        inverseSide: "gameImages",
      },
      game: {
        type: "many-to-one",
        target: "Game",
        joinColumn: {
          name: "gameId",
        },
        inverseSide: "gameImages",
      },
    },
  }
);
