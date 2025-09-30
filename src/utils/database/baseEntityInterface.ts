import { UUID } from "crypto";
import { PosixDate } from "../../time/posix-date";

export interface BaseEntitySchema {
  id: UUID;
  createdAt: PosixDate;
  updatedAt: PosixDate;
}
