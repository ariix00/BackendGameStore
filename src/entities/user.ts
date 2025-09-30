import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/baseColumnSchema";
import { BaseEntitySchema } from "../utils/database/baseEntityInterface";

export interface User extends BaseEntitySchema {
  name: string;
  lastName: string;
  password: string;
  email: string;
}

export const UserEntity = new EntitySchema<User>({
  name: "User",
  tableName: "users",
  columns: {
    ...baseColumnSchema,
    name: {
      type: "varchar",
    },
    lastName: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
  },
});
