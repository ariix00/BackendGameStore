import { EntitySchema } from "typeorm";

export interface Genre {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const GenreEntity = new EntitySchema<Genre>({
  name: "Genre",
  tableName: "genres",
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
