import { EntitySchemaColumnOptions } from "typeorm";
import { PosixDateTransformer } from "../../time/posix-date";

export const baseColumnSchema = {
  id: {
    type: "uuid",
    primary: true,
    generated: "uuid",
  } as EntitySchemaColumnOptions,

  createdAt: {
    type: "date",
    createDate: true,
    transformer: PosixDateTransformer,
  } as EntitySchemaColumnOptions,
  updatedAt: {
    type: "date",
    updateDate: true,
    transformer: PosixDateTransformer,
  } as EntitySchemaColumnOptions,
};
