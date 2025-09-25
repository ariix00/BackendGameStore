import { EntitySchema } from "typeorm";

export interface Province {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ProvinceEntity = new EntitySchema<Province>({
  name: "Province",
  tableName: "provinces",
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
