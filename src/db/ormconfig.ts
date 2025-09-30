import { DataSource } from "typeorm";
import { allEntities } from "../entities/entities";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: allEntities,
  extra: {
    foreignKeys: true,
  },
});
