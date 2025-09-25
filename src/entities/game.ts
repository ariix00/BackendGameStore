import { EntitySchema } from "typeorm";

export interface Game {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const GameEntity = new EntitySchema<Game>({
  name: "Game",
  tableName: "games",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    name: {
      type: "varchar",
    },
    description: {
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
});
