import { EntitySchema } from "typeorm";

export interface Image {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ImageEntity = new EntitySchema<Image>({
  name: "Image",
  tableName: "images",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    url: {
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
