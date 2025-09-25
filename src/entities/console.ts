import { EntitySchema } from "typeorm";

export interface Console {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ConsoleEntity = new EntitySchema<Console>({
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
});
